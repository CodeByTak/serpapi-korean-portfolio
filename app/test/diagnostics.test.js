import test from 'node:test';
import assert from 'node:assert/strict';
import * as api from '../api/search.js';

function fakeKey(t) {
  const old = process.env.SERPAPI_KEY;
  process.env.SERPAPI_KEY = 'diagnostic-test-key';
  t.after(() => {
    if (old === undefined) delete process.env.SERPAPI_KEY;
    else process.env.SERPAPI_KEY = old;
  });
}

test('SerpApi errors preserve safe text and expose raw error responses to capture', async (t) => {
  fakeKey(t);
  const data = { error: 'Quota exceeded diagnostic-test-key https://serpapi.com/search.json?api_key=diagnostic-test-key' };
  t.mock.method(globalThis, 'fetch', async () => ({ ok: true, status: 200, json: async () => data }));
  assert.equal(typeof api.searchEngine, 'function');
  let captured;
  const result = await api.searchEngine('google', 'test', false, (engine, query, raw) => { captured = raw; });
  assert.strictEqual(captured, data);
  assert.match(result.error, /^serpapi error: Quota exceeded/);
  assert.equal(result.error.includes('diagnostic-test-key'), false);
  assert.equal(result.error.includes('https://'), false);
});

test('HTTP status and parse failures have distinct safe reasons', async (t) => {
  fakeKey(t);
  assert.equal(typeof api.searchEngine, 'function');
  let response;
  t.mock.method(globalThis, 'fetch', async () => response);
  response = { ok: false, status: 429, json: async () => ({ error: 'Too many requests' }) };
  let raw;
  assert.equal((await api.searchEngine('google', 'http', false, (engine, query, data) => { raw = data; })).error, 'http 429');
  assert.deepEqual(raw, { error: 'Too many requests' });
  response = { ok: true, status: 200, json: async () => { throw new SyntaxError('secret URL'); } };
  assert.equal((await api.searchEngine('google', 'parse', false)).error, 'parse error');
});

test('AbortController uses a 30 second timeout with a distinct reason', async (t) => {
  fakeKey(t);
  assert.equal(typeof api.searchEngine, 'function');
  const realSetTimeout = globalThis.setTimeout;
  t.mock.method(globalThis, 'setTimeout', (callback, delay) => {
    assert.equal(delay, 30000);
    return realSetTimeout(callback, 0);
  });
  t.mock.method(globalThis, 'fetch', (url, { signal }) => new Promise((resolve, reject) => {
    assert.ok(signal instanceof AbortSignal);
    signal.addEventListener('abort', () => reject(signal.reason), { once: true });
  }));
  assert.equal((await api.searchEngine('google', 'timeout', false)).error, 'timeout');
});
