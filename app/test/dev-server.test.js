import test from 'node:test';
import assert from 'node:assert/strict';
import { createServer, request } from 'node:http';
import * as config from '../vite.config.js';

const get = (port, path, method = 'GET') => new Promise((resolve, reject) => {
  const req = request({ hostname: '127.0.0.1', port, path, method }, (res) => {
    let text = '';
    res.setEncoding('utf8');
    res.on('data', (chunk) => { text += chunk; });
    res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, text }));
  });
  req.on('error', reject);
  req.end();
});

test('dev middleware serves the existing handler and leaves other paths alone', async (t) => {
  assert.equal(typeof config.searchApiPlugin, 'function');
  assert.equal(process.env.MOCK, '1');
  t.mock.method(globalThis, 'fetch', () => { throw new Error('Live searches forbidden'); });
  const plugin = config.searchApiPlugin();
  assert.equal(plugin.apply, 'serve');
  let middleware;
  plugin.configureServer({ middlewares: { use(fn) { middleware = fn; } } });
  const server = createServer((req, res) => middleware(req, res, () => {
    res.statusCode = 404;
    res.end('Not found');
  }));
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  t.after(() => new Promise((resolve) => server.close(resolve)));
  const port = server.address().port;
  const query = '개발 서버 테스트';
  const response = await get(port, `/api/search?q=${encodeURIComponent(query)}`);
  assert.equal(response.status, 200);
  assert.match(response.headers['content-type'], /application\/json/);
  const result = JSON.parse(response.text);
  assert.equal(result.query, query);
  assert.ok(result.google.length > 0);
  assert.ok(result.naver.length > 0);
  assert.deepEqual(result.errors, { google: null, naver: null });
  assert.equal((await get(port, '/api/search?q=a&q=b')).status, 400);
  assert.equal((await get(port, '/api/search')).status, 400);
  assert.equal((await get(port, '/api/search?q=test', 'POST')).status, 405);
  assert.equal((await get(port, '/other')).status, 404);
  assert.equal((await get(port, '/api/search-extra')).status, 404);
  assert.equal(globalThis.fetch.mock.calls.length, 0);
});
