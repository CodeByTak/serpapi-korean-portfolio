// <!-- DRAFT --> Korean labels are drafts for Theresa to edit.
export const PRESETS = [
  { query: '카페 추천 강남', slug: 'gangnam-cafes' },
  { query: '파이썬 강의', slug: 'python-courses' },
  { query: 'AI 스타트업', slug: 'ai-startups' },
  { query: '제주도 여행', slug: 'jeju-travel' },
  { query: '아이폰 17 리뷰', slug: 'iphone-17-review' },
];

export function domainOf(link) {
  try {
    const url = new URL(link);
    return ['https:', 'http:'].includes(url.protocol) ? url.hostname.replace(/^www\./, '') : '';
  } catch {
    return '';
  }
}

export function overlapDomains({ naver = [], google = [] }) {
  const googleDomains = new Set(google.map((item) => domainOf(item.link)).filter(Boolean));
  return new Set(naver.map((item) => domainOf(item.link)).filter((domain) => domain && googleDomains.has(domain)));
}

export function domainRanks({ naver = [], google = [] }) {
  const ranks = new Map();
  for (const [engine, items] of Object.entries({ naver, google })) {
    items.forEach((item, index) => {
      const domain = domainOf(item.link);
      if (!domain) return;
      if (!ranks.has(domain)) ranks.set(domain, { domain, naver: null, google: null });
      const entry = ranks.get(domain);
      if (entry[engine] === null) entry[engine] = index + 1;
    });
  }
  return [...ranks.values()].sort((a, b) =>
    Math.min(a.naver ?? Infinity, a.google ?? Infinity) - Math.min(b.naver ?? Infinity, b.google ?? Infinity));
}

const cache = new Map();
export function loadComparison(query) {
  query = query.trim();
  if (!query) return Promise.reject(new Error('Empty query'));
  if (!cache.has(query)) {
    const preset = PRESETS.find((item) => item.query === query);
    const url = preset ? `/presets/${preset.slug}.json` : `/api/search?q=${encodeURIComponent(query)}`;
    const request = (async () => {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Search unavailable');
      const data = await response.json();
      if (data?.query !== query || !Array.isArray(data.naver) || !Array.isArray(data.google) || !data.errors) {
        throw new Error('Invalid search response');
      }
      return data;
    })().catch((error) => {
      cache.delete(query);
      throw error;
    });
    cache.set(query, request);
  }
  return cache.get(query);
}
