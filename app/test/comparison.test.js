import test from 'node:test';
import assert from 'node:assert/strict';
import { PRESETS, domainOf, overlapDomains, loadComparison } from '../src/comparison.js';

test('safe domains normalize www and reject non-web links', () => {
  assert.equal(domainOf('https://www.example.com/page'), 'example.com');
  assert.equal(domainOf('javascript:alert(1)'), '');
  assert.equal(domainOf('not a url'), '');
  assert.deepEqual([...overlapDomains({
    naver: [{ link: 'https://www.example.com/a' }, { link: 'https://example.com/b' }],
    google: [{ link: 'https://example.com/c' }, { link: 'https://other.com' }],
  })], ['example.com']);
});

test('five presets use saved JSON, custom queries use the API, repeated queries are cached', async (t) => {
  assert.equal(PRESETS.length, 5);
  const requested = [];
  t.mock.method(globalThis, 'fetch', async (url) => {
    requested.push(url);
    const preset = PRESETS.find((p) => url === `/presets/${p.slug}.json`);
    return { ok: true, json: async () => ({ query: preset?.query || 'custom test', naver: [], google: [], errors: { naver: null, google: null } }) };
  });
  for (const preset of PRESETS) await loadComparison(preset.query);
  await loadComparison('custom test');
  await loadComparison('custom test');
  assert.deepEqual(requested, [...PRESETS.map((p) => `/presets/${p.slug}.json`), '/api/search?q=custom%20test']);
});

test('bad HTTP and malformed results fail cleanly and can be retried', async (t) => {
  let valid = false;
  t.mock.method(globalThis, 'fetch', async () => ({ ok: valid, json: async () => ({}) }));
  await assert.rejects(loadComparison('failed test'));
  valid = true;
  await assert.rejects(loadComparison('failed test'));
});
