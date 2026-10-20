import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import * as search from '../api/search.js';

test('capture hook receives both raw fixtures without additional searches', async (t) => {
  const seen = new Map();
  t.mock.method(globalThis, 'fetch', () => { throw new Error('Network forbidden'); });
  assert.equal(typeof search.createSearchHandler, 'function');
  const handler = search.createSearchHandler({
    onRawResponse(engine, query, data) { seen.set(engine, { query, data }); },
  });
  const response = {
    status() { return this; },
    json(body) { this.body = body; },
  };
  await handler({ method: 'GET', query: { q: 'capture test' } }, response);
  assert.equal(seen.size, 2);
  for (const engine of ['google', 'naver']) {
    const fixture = JSON.parse(await readFile(new URL(`../../fixtures/${engine}.json`, import.meta.url), 'utf8'));
    assert.deepEqual(seen.get(engine), { query: 'capture test', data: fixture });
  }
  await handler({ method: 'GET', query: { q: 'capture test' } }, response);
  assert.equal(globalThis.fetch.mock.calls.length, 0);
});
