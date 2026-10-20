const { mkdir, readFile, writeFile } = require('node:fs/promises');
const path = require('node:path');
const { pathToFileURL } = require('node:url');

const root = path.resolve(__dirname, '..');
const queries = [
  ['카페 추천 강남', 'gangnam-cafes'],
  ['파이썬 강의', 'python-courses'],
  ['AI 스타트업', 'ai-startups'],
  ['제주도 여행', 'jeju-travel'],
  ['아이폰 17 리뷰', 'iphone-17-review'],
];

async function main(args = process.argv.slice(2)) {
  const googleOnly = args[0] === '--google-only';
  const selected = googleOnly ? queries.filter(([, slug]) => args.slice(1).includes(slug)) : queries;
  if (args.length && (!googleOnly || selected.length !== new Set(args.slice(1)).size || !selected.length)) {
    throw new Error('Use --google-only followed by known preset slugs.');
  }
  // Load the local key into the environment only; never print it or a request URL.
  if (!process.env.SERPAPI_KEY) {
    try {
      process.loadEnvFile(path.join(root, '.env'));
    } catch (error) {
      if (error.code !== 'ENOENT') throw new Error('Could not load local environment.');
    }
  }
  const key = process.env.SERPAPI_KEY;
  if (!key) throw new Error('SERPAPI_KEY is required in the environment or root .env.');
  process.env.MOCK = '0';

  const { createSearchHandler, searchEngine } = await import(pathToFileURL(path.join(root, 'app/api/search.js')));
  const raw = new Map();
  const handler = createSearchHandler({
    onRawResponse(engine, query, data) {
      if (!raw.has(engine)) raw.set(engine, data);
    },
  });
  const presets = path.join(root, 'app/public/presets');
  await mkdir(presets, { recursive: true });
  const serialize = (data) => {
    let json = JSON.stringify(data, null, 2);
    for (const secret of new Set([key, encodeURIComponent(key)])) {
      json = json.split(secret).join('[REDACTED]');
    }
    return `${json}\n`;
  };
  const lines = [];
  if (googleOnly) {
    for (const [query, slug] of selected) {
      const file = path.join(presets, `${slug}.json`);
      const existing = JSON.parse(await readFile(file, 'utf8'));
      if (existing.query !== query) throw new Error('Preset query mismatch.');
      let rawSaved = false;
      // Refresh only Google; reuse Naver so each slug spends exactly one search.
      const google = await searchEngine('google', query, false, async (engine, capturedQuery, data) => {
        const rawFile = path.join(root, `fixtures/google-${slug}.json`);
        const text = serialize(data);
        await writeFile(rawFile, text);
        if (await readFile(rawFile, 'utf8') !== text) throw new Error('Raw fixture verification failed.');
        rawSaved = true;
      });
      existing.google = google.results;
      existing.errors.google = google.error;
      const text = serialize(existing);
      await writeFile(file, text);
      if (await readFile(file, 'utf8') !== text) throw new Error('Preset verification failed.');
      if (google.error) process.exitCode = 1;
      lines.push(`${slug}: ${google.error || `Google ${google.results.length} results`}${rawSaved ? '' : ' (no raw JSON received)'}`);
    }
    console.log(lines.join('\n'));
    return;
  }
  for (const [query, slug] of queries) {
    const file = path.join(presets, `${slug}.json`);
    // Resume existing successful captures without spending another search.
    let result;
    try {
      const existing = JSON.parse(await readFile(file, 'utf8'));
      if (existing.query === query && Array.isArray(existing.google) && Array.isArray(existing.naver)
        && existing.errors?.google === null && existing.errors?.naver === null) {
        result = existing;
      }
    } catch (error) {
      if (error.code !== 'ENOENT') throw new Error(`Cannot read preset ${slug}.json.`);
    }
    if (!result) {
      const response = {
        statusCode: 200,
        status(code) { this.statusCode = code; return this; },
        setHeader() {},
        json(body) { result = body; },
      };
      // One handler call per query; it fetches both engines in parallel.
      await handler({ method: 'GET', query: { q: query } }, response);
      if (response.statusCode !== 200) throw new Error(`Capture failed for ${slug}.json.`);
      await writeFile(file, serialize(result));
    }
    const saved = JSON.parse(await readFile(file, 'utf8'));
    if (saved.query !== query || !Array.isArray(saved.google) || !Array.isArray(saved.naver)) {
      throw new Error(`Verification failed for ${slug}.json.`);
    }
    const failures = ['google', 'naver'].filter((engine) => saved.errors?.[engine]);
    if (failures.length) process.exitCode = 1;
    lines.push(`${slug}.json: google=${saved.google.length}, naver=${saved.naver.length}${failures.length ? ` (failed: ${failures.join(', ')})` : ''}`);
  }
  for (const engine of ['google', 'naver']) {
    if (!raw.has(engine)) continue;
    const file = path.join(root, `fixtures/${engine}.json`);
    const expected = serialize(raw.get(engine));
    await writeFile(file, expected);
    if (await readFile(file, 'utf8') !== expected) throw new Error(`Fixture verification failed for ${engine}.`);
  }
  console.log(lines.join('\n'));
}

if (require.main === module) {
  main().catch(() => {
    console.error('Capture failed. Check SERPAPI_KEY, network access, and output permissions.');
    process.exitCode = 1;
  });
}

module.exports = { main, queries };
