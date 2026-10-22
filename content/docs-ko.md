# Naver Search API 빠른 참조

> 현지화 샘플을 위한 한국어 번역본입니다. 원문은 SerpApi의 공개 문서 [Naver Search Engine Results API](https://serpapi.com/naver-search-api)를 요약한 것이며, 2026년 10월 기준으로 확인했습니다. 전체 및 최신 내용은 공식 문서를 참고하시기 바랍니다.

Naver Search API는 네이버 검색 결과 페이지를 구조화된 JSON으로 반환합니다. `/search` endpoint에 `engine=naver`로 요청을 보내면 데이터 수집, 파싱, 차단 문제는 SerpApi가 처리합니다.

```
https://serpapi.com/search?engine=naver&query=coffee&api_key=YOUR_API_KEY
```

## 빠르게 시작하기

1. [SerpApi 대시보드](https://serpapi.com/manage-api-key)에서 API 키를 발급받습니다.
2. API 키는 `SERPAPI_KEY` 같은 서버 환경 변수에 보관합니다. 브라우저 코드에는 절대 넣지 마십시오.
3. `engine=naver`와 `query`를 넣어 요청을 보냅니다.

```python
import os
from serpapi import GoogleSearch

params = {
    "engine": "naver",
    "query": "제주도 여행",
    "api_key": os.environ["SERPAPI_KEY"],
}

results = GoogleSearch(params).get_dict()

if "error" in results:
    print(results["error"])
else:
    for item in results.get("web_results", [])[:5]:
        print(item["title"], item["link"])
```

> **참고:** 네이버는 검색어 파라미터로 Google의 `q`가 아니라 `query`를 사용합니다. 일반 웹 검색 결과도 `organic_results`가 아니라 `web_results`에 담겨 반환됩니다.

## 검색 파라미터

| 파라미터 | 필수 여부 | 설명 |
|---|---|---|
| `query` | 필수 | 검색어입니다. `site:`, `filetype:` 같은 네이버 검색 연산자를 사용할 수 있습니다. |
| `where` | 선택 | 검색 유형입니다. 기본값은 `nexearch`(네이버 통합검색)이며, `web`, `video`, `news`, `image`도 사용할 수 있습니다. |
| `page` | 선택 | 페이지 번호입니다. SerpApi가 `start` 값을 자동으로 계산합니다. 페이지는 `1`부터 시작합니다. |
| `start` | 선택 | 결과 offset입니다. 기본값은 `1`입니다. `web` 검색은 계산 방식이 다르므로 `page`를 사용하는 것이 더 편리합니다. |
| `num` | 선택 | 반환할 최대 결과 수입니다. 기본값은 `50`, 최대 `100`이며 이미지 검색에서만 적용됩니다. |
| `sort_by` | 선택 | 정렬 방식입니다. 뉴스: `0` 관련도순(기본값), `1` 최신순, `2` 오래된순. 그 외 유형: `r` 관련도순(기본값), `dd` 최신순. |
| `period` | 선택 | 검색 기간입니다. 기본값은 `all`입니다. `1h`, `1d`, `1w`, `1m`, `3m`, `6m`, `1y` 또는 `from20260101to20260630` 형식의 직접 지정 기간을 사용할 수 있습니다. 뉴스는 `2h`~`6h`도 지원합니다. |

## SerpApi 파라미터

| 파라미터 | 필수 여부 | 설명 |
|---|---|---|
| `engine` | 필수 | `naver`로 설정합니다. |
| `api_key` | 필수 | 개인 SerpApi API 키입니다. |
| `device` | 선택 | `desktop`(기본값), `tablet`, `mobile` 중 하나입니다. |
| `no_cache` | 선택 | 기본값은 `false`입니다. `true`로 설정하면 항상 새 결과를 가져옵니다. 캐시된 결과는 1시간 동안 보관되며 검색 횟수에 포함되지 않습니다. |
| `async` | 선택 | 기본값은 `false`입니다. `true`로 설정하면 검색을 먼저 제출하고, 결과는 나중에 Searches Archive API에서 받을 수 있습니다. `no_cache`와 함께 사용하지 마십시오. |
| `output` | 선택 | `json`(기본값), `html`(원본 HTML), `md`(LLM용 Markdown) 중 하나입니다. |
| `json_restrictor` | 선택 | 필요한 필드만 반환해 응답 크기를 줄입니다. |
| `zero_trace` | 선택 | Enterprise 플랜 전용입니다. 검색 파라미터와 결과를 SerpApi 서버에 저장하지 않습니다. |

## 응답 구조

JSON 응답에는 검색어에 따라 네이버가 보여주는 내용에 맞춰 다음 최상위 키가 포함될 수 있습니다.

| 키 | 내용 |
|---|---|
| `search_metadata` | 검색 ID, 상태, 소요 시간입니다. 상태는 `Processing`에서 `Success` 또는 `Error`로 바뀝니다. |
| `search_parameters` | 이번 검색에 사용된 파라미터입니다. |
| `web_results` | 일반 웹 검색 결과입니다. `title`, `link`, `snippet` 등이 포함됩니다. |
| `news_results` | 뉴스 기사입니다. |
| `inline_videos_results` | 동영상 결과입니다. |
| `inline_images_results` | 이미지 결과입니다. `title`, `source`, `thumbnail`, `original`, `link`가 포함됩니다. |
| `knowledge_graph` | 네이버가 지식 패널을 보여주는 경우 해당 정보입니다. |
| `ads_results` | 광고입니다. |
| `shopping_results` | 쇼핑 결과입니다. |
| `pagination`, `serpapi_pagination` | 다음 페이지로 이동하는 링크입니다. |

## 오류 처리

요청이 HTTP `200`을 반환하더라도 JSON 안에 `error` 필드가 있을 수 있습니다. 예를 들어 검색 결과가 없거나 API 키가 잘못된 경우입니다. 따라서 다음 두 가지를 모두 확인하십시오.

1. HTTP 상태 코드
2. JSON에 `error` 필드가 있는지 여부

```python
if "error" in results:
    # e.g. invalid key, no results, or run out of searches
    handle_error(results["error"])
```

## 팁

- `start`를 직접 계산하기보다 `page`를 사용하십시오.
- 다시 쓸 결과는 캐시해 두십시오. 같은 검색을 반복하면 월간 검색 횟수가 소진됩니다.
- 네이버와 Google 결과를 비교할 때는 차이에 유의하십시오. Google은 `q`와 `organic_results`를, 네이버는 `query`와 `web_results`를 사용합니다.
