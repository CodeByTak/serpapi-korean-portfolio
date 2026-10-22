import React, { useCallback, useEffect, useRef, useState } from 'react';
import { PRESETS, overlapDomains, loadComparison } from './comparison.js';
import { ResultColumn, StatTiles, RankChart } from './Dashboard.jsx';

// <!-- DRAFT --> All Korean interface copy is a draft for Theresa to edit.
function SearchIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="1.5" /><path d="m16 16 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>;
}

export default function App() {
  const [input, setInput] = useState(PRESETS[0].query);
  const [query, setQuery] = useState(PRESETS[0].query);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);
  const requestId = useRef(0);
  const runSearch = useCallback(async (value) => {
    const nextQuery = value.trim();
    if (!nextQuery) return;
    const id = ++requestId.current;
    setInput(nextQuery);
    setQuery(nextQuery);
    setLoading(true);
    setFailed(false);
    setData(null);
    try {
      const next = await loadComparison(nextQuery);
      if (id === requestId.current) setData(next);
    } catch {
      if (id === requestId.current) setFailed(true);
    } finally {
      if (id === requestId.current) setLoading(false);
    }
  }, []);
  useEffect(() => {
    runSearch(PRESETS[0].query);
    return () => { requestId.current += 1; };
  }, [runSearch]);
  const shared = overlapDomains(data || {});
  const isPreset = PRESETS.some((preset) => preset.query === query);
  const incomplete = failed || Boolean(data?.errors?.naver || data?.errors?.google);

  return (
    <div className="app-shell">
      <a className="skip-link" href="#comparison">검색 결과로 건너뛰기</a>
      <header className="topbar">
        <div className="dashboard-brand"><h1 id="page-title"><span>키워드 가시성 매치:</span>{' '}<wbr /><span>네이버 vs 구글</span></h1><p className="dashboard-subtitle">내 키워드 어디서 더 잘 보일까?</p><p lang="en">Search Visibility Dashboard</p></div>
        <div className="header-controls">
          <label className="sr-only" htmlFor="preset">예시 검색어</label>
          <select id="preset" className="preset-select" value={isPreset ? query : ''} onChange={(event) => runSearch(event.target.value)}>
            {!isPreset && <option value="">키워드: {query}</option>}
            {PRESETS.map((preset) => <option key={preset.slug} value={preset.query}>키워드: {preset.query}</option>)}
          </select>
          <form className="search-form" onSubmit={(event) => { event.preventDefault(); runSearch(input); }}>
            <label className="sr-only" htmlFor="query">비교할 검색어</label>
            <span className="search-icon"><SearchIcon /></span>
            <input id="query" name="q" value={input} onChange={(event) => setInput(event.target.value)} placeholder="궁금한 검색어를 입력해 보세요" required maxLength={300} autoComplete="off" />
            <button className="search-button" type="submit" disabled={!input.trim()}>검색하기</button>
          </form>
        </div>
      </header>
      <main aria-labelledby="page-title">
        <section id="comparison" className="comparison-section" aria-label="검색 결과 비교" tabIndex={-1}>
          <div className="comparison-toolbar"><div><span className="eyebrow">SEARCH RESULTS</span><h2 className="query-heading">{query}</h2></div><span className="source-label">{isPreset ? '저장된 예시 · API 호출 없음' : '실시간 검색 · SerpApi'}</span></div>

          <p className="sr-only" role="status" aria-live="polite">{loading ? `${query} 검색 결과를 불러오는 중이에요.` : failed ? '검색 결과를 불러오지 못했어요.' : `${query}: Naver ${data?.naver.length || 0}개, Google ${data?.google.length || 0}개.`}</p>
          <div className="dashboard-grid">
            {['naver', 'google'].map((engine) => <ResultColumn key={engine} engine={engine} query={query} items={data?.[engine] || []} error={failed || data?.errors?.[engine]} loading={loading} shared={shared} onRetry={() => runSearch(query)} />)}
            <div className="dashboard-center" aria-busy={loading}>
              <StatTiles data={data} loading={loading} incomplete={incomplete} shared={shared} />
              <RankChart data={data} loading={loading} incomplete={incomplete} />
            </div>
          </div>
        </section>
      </main>
      <footer><div><p lang="en">Project made for my SerpApi application.</p><p className="unofficial" lang="en">Unofficial project made for my SerpApi application.</p></div><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span><span className="sr-only"> (새 탭)</span></a></footer>
    </div>
  );
}
