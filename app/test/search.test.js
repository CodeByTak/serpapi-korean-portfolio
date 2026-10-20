import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const invoke = async (handler, query, method = 'GET') => {
  const res = {
    statusCode: 200,
    status(code) { this.statusCode = code; return this; },
    setHeader() {},
    json(body) { this.body = body; return this; },
  };
  await handler({ method, query: { q: query } }, res);
  return res;
};

const freshHandler = async () => (await import(`../api/search.js?test=${Math.random()}`)).default;

function useFakeLiveMode(t) {
  const originalMock = process.env.MOCK;
  const originalKey = process.env.SERPAPI_KEY;
  process.env.MOCK = '0';
  process.env.SERPAPI_KEY = 'test-only-key';
  t.after(() => {
    if (originalMock === undefined) delete process.env.MOCK;
    else process.env.MOCK = originalMock;
    if (originalKey === undefined) delete process.env.SERPAPI_KEY;
    else process.env.SERPAPI_KEY = originalKey;
  });
}

test('MOCK=1 returns the first five fixture results without network access', async (t) => {
  assert.equal(process.env.MOCK, '1');
  t.mock.method(globalThis, 'fetch', () => { throw new Error('Network forbidden'); });
  const handler = await freshHandler();
  const res = await invoke(handler, '서울 카페');
  assert.equal(res.statusCode, 200);
  assert.equal(res.body.query, '서울 카페');
  assert.deepEqual(res.body.errors, { google: null, naver: null });
  for (const [engine, field] of [['google', 'organic_results'], ['naver', 'web_results']]) {
    const fixture = JSON.parse(await readFile(new URL(`../../fixtures/${engine}.json`, import.meta.url), 'utf8'));
    assert.ok(fixture[field].length > 0);
    assert.equal(res.body[engine].length, Math.min(5, fixture[field].length));
    assert.deepEqual(res.body[engine], fixture[field].slice(0, 5).map((item) => ({
      title: typeof item?.title === 'string' ? item.title : '',
      link: typeof item?.link === 'string' ? item.link : '',
      snippet: typeof item?.snippet === 'string' ? item.snippet : '',
    })));
  }
  assert.equal(globalThis.fetch.mock.calls.length, 0);
  const cached = await invoke(handler, '서울 카페');
  assert.strictEqual(cached.body, res.body);
});

test('rejects invalid queries and non-GET requests', async () => {
  const handler = await freshHandler();
  for (const query of [undefined, '', '   ', ['one', 'two']]) {
    assert.equal((await invoke(handler, query)).statusCode, 400);
  }
  assert.equal((await invoke(handler, 'test', 'POST')).statusCode, 405);
});

test('parallel requests use correct params, isolate failures, and cache concurrent queries', async (t) => {
  useFakeLiveMode(t);
  const fixture = JSON.parse(await readFile(new URL('../../fixtures/naver.json', import.meta.url), 'utf8'));
  const urls = [];
  const releases = [];
  t.mock.method(globalThis, 'fetch', (url) => {
    const parsed = new URL(url);
    urls.push(parsed);
    return new Promise((resolve) => releases.push(() => resolve({
      ok: true,
      json: async () => parsed.searchParams.get('engine') === 'google'
        ? { error: `Sensitive URL ${url}` }
        : fixture,
    })));
  });
  const handler = await freshHandler();
  const first = invoke(handler, '서울');
  const second = invoke(handler, '서울');
  assert.equal(urls.length, 2);
  const [google, naver] = urls.map((url) => url.searchParams);
  assert.equal(google.get('q'), '서울');
  assert.equal(google.get('gl'), 'kr');
  assert.equal(google.get('hl'), 'ko');
  assert.equal(google.get('location'), 'Seoul, South Korea');
  assert.equal(naver.get('query'), '서울');
  assert.equal(naver.has('q'), false);
  releases.forEach((release) => release());
  const [a, b] = await Promise.all([first, second]);
  assert.strictEqual(a.body, b.body);
  assert.deepEqual(a.body.google, []);
  assert.equal(a.body.naver.length, Math.min(5, fixture.web_results.length));
  assert.ok(a.body.errors.google);
  assert.equal(a.body.errors.naver, null);
  assert.equal(JSON.stringify(a.body).includes('test-only-key'), false);
  assert.equal(urls.length, 2);
});

test('network failures return safe per-engine errors', async (t) => {
  useFakeLiveMode(t);
  t.mock.method(globalThis, 'fetch', async (url) => { throw new Error(url); });
  const res = await invoke(await freshHandler(), 'network failure');
  assert.deepEqual(res.body.google, []);
  assert.deepEqual(res.body.naver, []);
  assert.ok(res.body.errors.google);
  assert.ok(res.body.errors.naver);
  assert.equal(JSON.stringify(res.body).includes('test-only-key'), false);
});
