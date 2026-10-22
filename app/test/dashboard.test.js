import test from 'node:test';
import assert from 'node:assert/strict';
import * as comparison from '../src/comparison.js';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createServer } from 'vite';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const item = (domain) => ({ link: `https://${domain}/page` });

test('domain ranks use the first occurrence, normalize www, and mark missing ranks as null', () => {
  assert.equal(typeof comparison.domainRanks, 'function');
  assert.deepEqual(comparison.domainRanks({
    naver: [item('www.shared.test'), item('shared.test'), { link: 'invalid' }, item('naver.test')],
    google: [item('google.test'), item('shared.test')],
  }), [
    { domain: 'shared.test', naver: 1, google: 2 },
    { domain: 'google.test', naver: null, google: 1 },
    { domain: 'naver.test', naver: 4, google: null },
  ]);
});

test('dashboard renders ranks, missing states, and optional thumbnails without fabricated data', async () => {
  const cacheDir = await mkdtemp(join(tmpdir(), 'dashboard-test-'));
  const server = await createServer({ configFile: false, cacheDir, server: { middlewareMode: true } });
  try {
    const { default: App } = await server.ssrLoadModule('/src/App.jsx');
    const markup = renderToStaticMarkup(React.createElement(App));
    const heading = markup.match(/<h1[^>]*>(.*?)<\/h1>/)[1];
    assert.equal(heading.replace(/<[^>]+>/g, ''), '키워드 가시성 매치: 네이버 vs 구글');
    assert.match(heading, /매치:<\/span> <wbr\/><span[^>]*>네이버 vs 구글/);
    assert.match(markup, /<p class="dashboard-subtitle">내 키워드 어디서 더 잘 보일까\?<\/p><p lang="en">Search Visibility Dashboard<\/p>/);
    assert.match(markup, /<p lang="en">Search Visibility Dashboard<\/p>/);
    const css = await readFile(new URL('../src/styles.css', import.meta.url), 'utf8');
    assert.match(css, /color-scheme:\s*light\s*;/);
    assert.doesNotMatch(css, /prefers-color-scheme:\s*dark/);
    const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
    assert.match(html, /<title>키워드 가시성 매치: 네이버 vs 구글 - 내 키워드 어디서 더 잘 보일까\?<\/title>/);
    const { RankChart, ResultColumn, StatTiles } = await server.ssrLoadModule('/src/Dashboard.jsx');
    const data = {
      naver: [{ ...item('shared.test'), title: 'Top Naver', thumbnail: ['https://images.test/a.jpg', 'https://images.test/b.jpg', 'https://images.test/c.jpg', 'https://images.test/d.jpg'] }],
      google: [{ ...item('www.shared.test'), title: 'Top Google' }, item('google.test')],
    };
    const render = (component, props) => renderToStaticMarkup(React.createElement(component, props));
    const chart = render(RankChart, { data });
    assert.match(chart, /도메인별 순위 비교/);
    assert.match(chart, /순위 밖/);
    assert.match(chart, /Naver 1위, Google 1위/);
    const many = render(RankChart, { data: { naver: Array.from({ length: 10 }, (_, i) => item(`domain${i}.test`)), google: [] } });
    assert.equal((many.match(/class="chart-domain"/g) || []).length, 8);
    const stats = render(StatTiles, { data, loading: false, incomplete: false, shared: comparison.overlapDomains(data) });
    assert.match(stats, /예/);
    assert.match(stats, /1개/);
    assert.match(stats, /Top Naver/);
    const phoneProps = { engine: 'naver', query: 'Test', shared: new Set(), loading: false };
    const phone = render(ResultColumn, { ...phoneProps, items: data.naver });
    assert.equal((phone.match(/<img /g) || []).length, 3);
    assert.match(phone, /9:41/);
    assert.match(phone, /#1/);
    assert.doesNotMatch(render(ResultColumn, { ...phoneProps, items: data.google }), /<img /);
    assert.match(render(ResultColumn, { ...phoneProps, items: [] }), /아직 검색 결과가 없어요/);
    assert.match(render(ResultColumn, { ...phoneProps, items: [], error: true }), /다시 시도/);
    assert.match(render(StatTiles, { data, loading: false, incomplete: true, shared: new Set() }), /확인 불가/);
    assert.match(render(RankChart, { data: { naver: [], google: [] } }), /비교할 도메인이 없어요/);
  } finally {
    await server.close();
    await rm(cacheDir, { recursive: true, force: true });
  }
});
