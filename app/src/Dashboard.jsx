import React from 'react';
import { domainOf, domainRanks } from './comparison.js';

// <!-- DRAFT --> Korean interface copy is a draft for Theresa to edit.
export function ResultColumn({ engine, query, items, error, loading, shared, onRetry }) {
  const name = engine === 'naver' ? 'Naver' : 'Google';
  return (
    <section className={`engine engine-${engine}`} aria-labelledby={`${engine}-heading`} aria-busy={loading}>
      <header className="engine-heading">
        <h2 id={`${engine}-heading`}>{name}<span className="count">{loading ? '—' : `${items.length}개`}</span></h2>
        <span className="engine-detail">{engine === 'naver' ? '웹 검색' : 'Korea · 한국어'}</span>
      </header>
      <div className="phone">
        <div className="phone-status" aria-hidden="true"><span>9:41</span><span className="phone-camera" /><span>▮▮▮ ▰</span></div>
        <div className="phone-search"><span className="phone-search-symbol" aria-hidden="true">⌕</span><span>{query}</span></div>
        <div className="phone-tabs" aria-hidden="true"><span>검색 결과</span><span>웹</span></div>
        {loading ? (
          <div className="result-list" aria-hidden="true">{Array.from({ length: 5 }, (_, i) => <div className="result-card skeleton-card" key={i}><div className="skeleton skeleton-title" /><div className="skeleton skeleton-domain" /><div className="skeleton skeleton-line" /></div>)}</div>
        ) : error ? (
          <div className="state-card" role="alert"><h3>잠시 검색 결과를 가져오지 못했어요.</h3><p>잠시 후 다시 시도해 주세요. 다른 검색엔진의 결과는 계속 볼 수 있어요.</p><button className="secondary-button" onClick={onRetry}>다시 시도</button></div>
        ) : !items.length ? (
          <div className="state-card"><h3>아직 검색 결과가 없어요.</h3><p>다른 검색어를 입력하거나 위의 예시 검색어를 선택해 보세요.</p></div>
        ) : (
          <ol className="result-list">{items.map((item, index) => {
            const domain = domainOf(item.link);
            const thumbnails = index === 0 ? (Array.isArray(item.thumbnail) ? item.thumbnail : [item.thumbnail])
              .filter((url) => typeof url === 'string' && domainOf(url)).slice(0, 3) : [];
            return <li className={`result-card${index === 0 ? ' top-result' : ''}`} key={`${item.link}-${index}`}>
              <span className="rank" aria-label={`${index + 1}위`}>#{index + 1}</span>
              <div className="result-content">
                <h3>{domain ? <a href={item.link} target="_blank" rel="noopener noreferrer"><span className="result-title">{item.title || '제목 없음'}</span><span className="external-arrow" aria-hidden="true">↗</span><span className="sr-only"> (새 탭)</span></a> : <span className="result-title">{item.title || '제목 없음'}</span>}</h3>
                <div className="result-meta"><span className="domain">{domain || '링크 없음'}</span>{shared.has(domain) && <span className="overlap-tag">양쪽 모두</span>}</div>
                <p className="snippet">{item.snippet || '미리보기 내용이 제공되지 않았어요.'}</p>
                {thumbnails.length > 0 && <div className="result-thumbnails">{thumbnails.map((url, i) => <img key={`${url}-${i}`} src={url} alt={`${item.title || name} 미리보기 ${i + 1}`} loading="lazy" referrerPolicy="no-referrer" />)}</div>}
              </div>
            </li>;
          })}</ol>
        )}
        <div className="phone-home" aria-hidden="true" />
      </div>
    </section>
  );
}

export function StatTiles({ data, loading, incomplete, shared }) {
  const naver = data?.naver || [];
  const google = data?.google || [];
  const naverTop = domainOf(naver[0]?.link);
  const googleTop = domainOf(google[0]?.link);
  const unavailable = loading ? '—' : '확인 불가';
  const canCompare = !loading && !incomplete;
  return <div className="stat-tiles" aria-label="검색 결과 통계">
    <div className="top-stats">{['naver', 'google'].map((engine) => {
      const top = data?.[engine]?.[0];
      return <article className={`stat-tile engine-${engine}`} key={engine}>
        <h3 className="stat-label">{engine.toUpperCase()} #1</h3>
        <p className="top-domain">{loading ? '—' : incomplete && !top ? '확인 불가' : domainOf(top?.link) || '결과 없음'}</p>
        <p className="top-title">{loading ? '불러오는 중이에요' : top?.title || '표시할 제목이 없어요'}</p>
      </article>;
    })}</div>
    <div className="count-stats">
      <article className="stat-tile"><h3 className="stat-label">결과 수</h3><p className="stat-value">{canCompare ? `${naver.length} / ${google.length}` : unavailable}</p><p className="stat-note">Naver / Google</p></article>
      <article className="stat-tile"><h3 className="stat-label">겹치는 도메인</h3><p className="stat-value">{canCompare ? `${shared.size}개` : unavailable}</p><p className="stat-note">중복 없이 비교해요</p></article>
      <article className="stat-tile"><h3 className="stat-label">1위 일치</h3><p className="stat-value">{canCompare && naverTop && googleTop ? naverTop === googleTop ? '예' : '아니오' : unavailable}</p><p className="stat-note">도메인 기준</p></article>
    </div>
  </div>;
}

export function RankChart({ data, loading, incomplete }) {
  const allRows = domainRanks(data || {});
  const rows = allRows.slice(0, 8);
  const maxRank = Math.max(1, data?.naver?.length || 0, data?.google?.length || 0);
  const start = 154;
  const plotWidth = 192;
  const rowHeight = 65;
  return <section className="chart-card" aria-labelledby="chart-heading">
    <div className="chart-header"><h2 id="chart-heading">도메인별 순위 비교</h2><p>숫자가 작을수록 상위 결과예요</p></div>
    <div className="chart-legend"><span><i className="naver-key" />Naver</span><span><i className="google-key" />Google</span></div>
    {loading ? <p className="chart-state" role="status">순위를 비교하고 있어요.</p> : !rows.length ? <p className="chart-state">{incomplete ? '순위를 확인할 수 없어요.' : '비교할 도메인이 없어요.'}</p> : <>
      {incomplete && <p className="chart-warning">일부 결과를 불러오지 못해 비교가 불완전해요.</p>}
      <svg className="rank-chart" viewBox={`0 0 400 ${rows.length * rowHeight + 34}`} role="img" aria-labelledby="rank-chart-title rank-chart-desc">
        <title id="rank-chart-title">도메인별 순위 비교</title>
        <desc id="rank-chart-desc">각 도메인의 첫 등장 순위예요. 막대가 짧을수록 순위가 높아요. 순위 밖은 현재 결과 목록에 없는 도메인이에요.</desc>
        {Array.from({ length: maxRank }, (_, i) => <g className="chart-axis" key={i} aria-hidden="true"><line x1={start + (i + 1) / maxRank * plotWidth} x2={start + (i + 1) / maxRank * plotWidth} y1="10" y2={rows.length * rowHeight} /><text x={start + (i + 1) / maxRank * plotWidth} y={rows.length * rowHeight + 22} textAnchor="middle">{i + 1}위</text></g>)}
        {rows.map((row, index) => <g key={row.domain} transform={`translate(0 ${index * rowHeight + 12})`}>
          <title>{`${row.domain}: Naver ${row.naver === null ? '순위 밖' : `${row.naver}위`}, Google ${row.google === null ? '순위 밖' : `${row.google}위`}`}</title>
          <text className="chart-domain" x="0" y="22">{row.domain.length > 22 ? `${row.domain.slice(0, 21)}…` : row.domain}</text>
          {['naver', 'google'].map((engine, i) => <g key={engine} transform={`translate(${start} ${i * 22})`}>
            {row[engine] !== null && <rect className={`bar-${engine}`} width={row[engine] / maxRank * plotWidth} height="13" rx="3" />}
            <text className="chart-rank" x={row[engine] === null ? 4 : row[engine] / maxRank * plotWidth + 6} y="11">{row[engine] === null ? '순위 밖' : row[engine]}</text>
          </g>)}
        </g>)}
      </svg>
      <p className="chart-footnote">{allRows.length > 8 ? `전체 ${allRows.length}개 중 상위 순위 기준 8개 도메인 · ` : ''}현재 목록의 첫 등장 순위 · 순위 밖 = 목록에 없음</p>
    </>}
  </section>;
}
