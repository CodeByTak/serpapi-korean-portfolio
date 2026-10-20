import { readFile } from 'node:fs/promises';

function safeErrorText(value) {
  let text = typeof value === 'string' ? value : JSON.stringify(value);
  text = text ?? 'Unknown error';
  const key = process.env.SERPAPI_KEY;
  if (key) {
    for (const secret of new Set([key, encodeURIComponent(key)])) {
      text = text.split(secret).join('[REDACTED]');
    }
  }
  return text.replace(/https?:\/\/\S+/gi, '[URL REDACTED]')
    .replace(/\S*(?:api_key|SERPAPI_KEY)=\S*/gi, '[REDACTED]');
}

export async function searchEngine(engine, query, mock, onRawResponse) {
  const controller = new AbortController();
  let timer;
  let httpStatus;
  try {
    let data;
    if (mock) {
      const file = engine === 'google'
        ? new URL('../../fixtures/google.json', import.meta.url)
        : new URL('../../fixtures/naver.json', import.meta.url);
      data = JSON.parse(await readFile(file, 'utf8'));
    } else {
      if (!process.env.SERPAPI_KEY) {
        return { results: [], error: 'Search service is not configured.' };
      }
      const params = new URLSearchParams({ engine, api_key: process.env.SERPAPI_KEY });
      if (engine === 'google') {
        params.set('q', query);
        params.set('gl', 'kr');
        params.set('hl', 'ko');
        params.set('location', 'Seoul, South Korea');
      } else {
        params.set('query', query);
      }
      timer = setTimeout(() => controller.abort(), 30000);
      const response = await fetch(`https://serpapi.com/search.json?${params}`, {
        signal: controller.signal,
      });
      if (!response.ok) httpStatus = response.status;
      data = await response.json();
    }
    // Capture every parsed response, including upstream errors and empty results.
    if (onRawResponse) await onRawResponse(engine, query, data);
    if (httpStatus !== undefined) return { results: [], error: `http ${httpStatus}` };
    if (!data || typeof data !== 'object' || Array.isArray(data)) {
      return { results: [], error: 'parse error' };
    }
    if (Object.hasOwn(data, 'error')) {
      return { results: [], error: `serpapi error: ${safeErrorText(data.error)}` };
    }
    const items = data[engine === 'google' ? 'organic_results' : 'web_results'];
    const results = (Array.isArray(items) ? items : []).slice(0, 5).map((item) => ({
      title: typeof item?.title === 'string' ? item.title : '',
      link: typeof item?.link === 'string' ? item.link : '',
      snippet: typeof item?.snippet === 'string' ? item.snippet : '',
    }));
    return { results, error: null };
  } catch (error) {
    const reason = controller.signal.aborted ? 'timeout'
      : httpStatus !== undefined ? `http ${httpStatus}`
        : error instanceof SyntaxError ? 'parse error' : 'network error';
    return { results: [], error: reason };
  } finally {
    clearTimeout(timer);
  }
}

export function createSearchHandler({ onRawResponse } = {}) {
  // Cache promises as well as completed responses to coalesce concurrent queries.
  const cache = new Map();
  return async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed.' });
  }
  const query = req.query?.q;
  if (typeof query !== 'string' || !query.trim()) {
    return res.status(400).json({ error: 'A non-empty q query parameter is required.' });
  }
  if (!cache.has(query)) {
    const mock = process.env.MOCK === '1';
    cache.set(query, Promise.all([
      searchEngine('google', query, mock, onRawResponse),
      searchEngine('naver', query, mock, onRawResponse),
    ]).then(([google, naver]) => ({
      query,
      google: google.results,
      naver: naver.results,
      errors: { google: google.error, naver: naver.error },
    })));
  }
  return res.status(200).json(await cache.get(query));
  };
}

export default createSearchHandler();
