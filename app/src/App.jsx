import React, { useCallback, useEffect, useRef, useState } from 'react';
import { PRESETS, domainOf, overlapDomains, loadComparison } from './comparison.js';

// <!-- DRAFT --> All Korean interface copy is a draft for Theresa to edit.
function SearchIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="1.5" /><path d="m16 16 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>;
}

function ResultColumn({ engine, items, error, loading, shared, onRetry }) {
  const name = engine === 'naver' ? 'Naver' : 'Google';
  return (
    <section className={`engine engine-${engine}`} aria-labelledby={`${engine}-heading`} aria-busy={loading}>
      <header className="engine-heading">
        <h2 id={`${engine}-heading`}>{name}<span className="count">{loading ? '—' : `${items.length}개`}</span></h2>
        <span className="engine-detail">{engine === 'naver' ? '한국어 웹 검색' : 'Google Korea · ko-KR'}</span>
      </header>
      {loading ? (
        <div className="result-list" aria-hidden="true">{Array.from({ length: 5 }, (_, i) => <div className="result-card skeleton-card" key={i}><div className="skeleton skeleton-title" /><div className="skeleton skeleton-domain" /><div className="skeleton skeleton-line" /><div className="skeleton skeleton-line short" /></div>)}</div>
      ) : error ? (
        <div className="state-card" role="alert"><h3>잠시 검색 결과를 가져오지 못했어요.</h3><p>잠시 후 다시 시도해 주세요. 다른 검색엔진의 결과는 계속 볼 수 있어요.</p><button className="secondary-button" onClick={onRetry}>다시 시도</button></div>
      ) : !items.length ? (
        <div className="state-card"><h3>아직 검색 결과가 없어요.</h3><p>다른 검색어를 입력하거나 위의 예시 검색어를 선택해 보세요.</p></div>
      ) : (
        <ol className="result-list">{items.map((item, index) => {
          const domain = domainOf(item.link);
          return <li className="result-card" key={`${item.link}-${index}`}>
            <span className="rank" aria-label={`${index + 1}위`}>{String(index + 1).padStart(2, '0')}</span>
            <div className="result-content">
              <h3>{domain ? <a href={item.link} target="_blank" rel="noopener noreferrer"><span className="result-title">{item.title || '제목 없음'}</span><span className="external-arrow" aria-hidden="true">↗</span><span className="sr-only"> (새 탭)</span></a> : <span className="result-title">{item.title || '제목 없음'}</span>}</h3>
              <div className="result-meta"><span className="domain">{domain || '링크 없음'}</span>{shared.has(domain) && <span className="overlap-tag">양쪽 모두</span>}</div>
              <p className="snippet">{item.snippet || '미리보기 내용이 제공되지 않았어요.'}</p>
            </div>
          </li>;
        })}</ol>
      )}
    </section>
  );
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
      <header className="topbar"><a className="wordmark" href="/">SEARCH / COMPARE</a><span className="project-label">Theresa Tak <span aria-hidden="true">/</span> Developer portfolio</span></header>
      <main>
        <section className="hero" aria-labelledby="page-title">
          <div className="eyebrow">TWO ENGINES. ONE QUERY.</div>
          <h1 id="page-title">Naver vs Google 검색 결과 비교기</h1>
          <p className="subtitle" lang="en">One query, two perspectives. Explore how Korea searches.</p>
          <form className="search-form" onSubmit={(event) => { event.preventDefault(); runSearch(input); }}>
            <label className="sr-only" htmlFor="query">비교할 검색어</label>
            <span className="search-icon"><SearchIcon /></span>
            <input id="query" name="q" value={input} onChange={(event) => setInput(event.target.value)} placeholder="궁금한 검색어를 입력해 보세요" required maxLength={300} autoComplete="off" />
            <button className="search-button" type="submit" disabled={!input.trim()}>검색하기 <span aria-hidden="true">↵</span></button>
          </form>
          <div className="presets" aria-label="예시 검색어"><span className="preset-label">예시 검색</span>{PRESETS.map((preset) => <button key={preset.slug} type="button" className="preset-chip" aria-pressed={query === preset.query} onClick={() => runSearch(preset.query)}>{preset.query}</button>)}</div>
        </section>

        <section id="comparison" className="comparison-section" aria-label="검색 결과 비교" tabIndex={-1}>
          <div className="comparison-toolbar"><div><span className="eyebrow">SEARCH RESULTS</span><h2 className="query-heading">{query}</h2></div><span className="source-label">{isPreset ? '저장된 예시 · API 호출 없음' : '실시간 검색 · SerpApi'}</span></div>
          <div className="summary-bar">
            <div className="overlap-summary"><span className="overlap-symbol" aria-hidden="true">◎</span><span>{loading ? '도메인을 비교하고 있어요' : incomplete ? '겹치는 도메인 —' : <>겹치는 도메인 <strong>{shared.size}개</strong></>}</span><span className="muted">{incomplete ? '일부 결과를 불러오지 못했어요' : '같은 도메인은 양쪽 결과에 표시돼요'}</span></div>

          </div>
          <p className="sr-only" role="status" aria-live="polite">{loading ? `${query} 검색 결과를 불러오는 중이에요.` : failed ? '검색 결과를 불러오지 못했어요.' : `${query}: Naver ${data?.naver.length || 0}개, Google ${data?.google.length || 0}개.`}</p>
          <div className="results-grid">{['naver', 'google'].map((engine) => <ResultColumn key={engine} engine={engine} items={data?.[engine] || []} error={failed || data?.errors?.[engine]} loading={loading} shared={shared} onRetry={() => runSearch(query)} />)}</div>
        </section>
      </main>
      <footer><p lang="en">Project made for my SerpApi application.</p><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span><span className="sr-only"> (새 탭)</span></a></footer>
    </div>
  );
}
