# Glossary and style guide (용어집 및 스타일 가이드)

Translation rules used for `docs-ko.md`, so future SerpApi Korean docs stay consistent.

## Terms

| English | Korean | Keep in English? | Note |
|---|---|---|---|
| API | API | Yes | Standard in Korean developer docs. |
| API key | API 키 | Partly | "키" reads naturally, and "API" stays in English. |
| endpoint | endpoint | Yes | "엔드포인트" is also common, but English matches the URL and code. |
| parameter | 파라미터 | Korean | More common in Korean dev docs than "매개변수". |
| required / optional | 필수 / 선택 | Korean | Short labels for tables. |
| default | 기본값 | Korean | |
| search query | 검색어 | Korean | The parameter name `query` stays in code font. |
| search results | 검색 결과 | Korean | |
| web results | 웹 검색 결과 | Korean | The key name `web_results` is not translated. |
| regular search (nexearch) | 네이버 통합검색 | Korean | Naver's own name for the default "통합검색" tab. |
| relevance / latest / oldest | 관련도순 / 최신순 / 오래된순 | Korean | Matches the sort labels Korean users see on Naver. |
| response | 응답 | Korean | |
| structured data | 구조화된 데이터 | Korean | |
| parsing | 파싱 | Korean (transliterated) | Developers say "파싱". |
| scraping | 데이터 수집 | Korean | See translator note 2. |
| cache / cached | 캐시 / 캐시된 | Korean (transliterated) | |
| offset | offset | Yes | No natural Korean equivalent. |
| pagination | 페이지 이동 | Korean | Only in prose. Key names stay in English. |
| environment variable | 환경 변수 | Korean | |
| knowledge panel | 지식 패널 | Korean | |
| quota | 검색 횟수 | Korean | Clearer than "할당량" for plan limits. |
| Enterprise plan | Enterprise 플랜 | Partly | Plan names stay in English. |
| Markdown, JSON, HTML | Markdown, JSON, HTML | Yes | Format names are never translated. |

## Style rules

### Speech level: 합니다체
Use 합니다체 for docs: "반환합니다", "사용하십시오". Use 해요체 only for blog tutorials and social posts.

### Words that stay in English
- Code, parameter names, keys, values and URLs. Always write them in `code font`, exactly as in the API.
- Product names: SerpApi, Naver Search API, Searches Archive API.
- File formats and widely used terms (API, JSON, endpoint, offset).

### Numbers and units
- Numbers are always Arabic numerals: 1시간, 최대 `100`.
- Ranges use a tilde: `2h`~`6h`.
- Dates in prose use 2026년 10월. Dates in code keep the API format, such as `from20260101to20260630`.

### Code and parameters
- Code blocks are never translated. Keep code comments in English so they match the official SDK examples.
- Parameter values in tables use code font: `true`, `false`, `desktop`.
- Use a space between Korean text and code font: `query`를 사용합니다. Attach Korean particles directly after the code.

## Translator notes (번역자 노트)

1. **"regular Naver search" → 네이버 통합검색.**
   A literal translation such as "일반 네이버 검색" isn't a term Korean users know. Naver calls this default tab "통합검색", so readers immediately understand what `nexearch` returns.

2. **"scrape" → 데이터 수집.**
   In Korean, "스크래핑" and "크롤링" can sound like unauthorized data collection, especially to business readers. "데이터 수집" keeps the meaning without that connotation. Developer-focused blog posts can still use "크롤링" where it fits the audience.

3. **"Cached results … are free" → 검색 횟수에 포함되지 않습니다.**
   "무료입니다" alone is ambiguous: free of charge, or free to use? Saying cached results don't count toward your searches tells Korean readers exactly what "free" means for their plan.
