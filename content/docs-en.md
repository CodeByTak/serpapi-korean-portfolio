# Naver Search API: Quick Reference

> Source text for the localization sample. It condenses SerpApi's public [Naver Search Engine Results API](https://serpapi.com/naver-search-api) docs, checked October 2026. For the full and current reference, see the official page.

The Naver Search API returns Naver search result pages as structured JSON. Send a request to the `/search` endpoint with `engine=naver`, and SerpApi handles the fetching, parsing and blocking issues for you.

```
https://serpapi.com/search?engine=naver&query=coffee&api_key=YOUR_API_KEY
```

## Quick start

1. Get your API key from your [SerpApi dashboard](https://serpapi.com/manage-api-key).
2. Keep the key in a server-side environment variable, such as `SERPAPI_KEY`. Never put it in browser code.
3. Send a request with `engine=naver` and a `query`.

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

> **Note:** Naver uses `query` for the search term, not `q` as Google does. Regular web results are returned in `web_results`, not `organic_results`.

## Search parameters

| Parameter | Required | Description |
|---|---|---|
| `query` | Required | The search term. Naver search operators such as `site:` and `filetype:` are supported. |
| `where` | Optional | The search type. Defaults to `nexearch` (regular Naver search). Other values: `web`, `video`, `news`, `image`. |
| `page` | Optional | The page number. SerpApi calculates `start` for you. Pagination starts at `1`. |
| `start` | Optional | The result offset. Defaults to `1`. `web` searches use a different formula, so `page` is easier to use. |
| `num` | Optional | The maximum number of results. Defaults to `50`, up to `100`. Works only with image searches. |
| `sort_by` | Optional | The sort order. For news: `0` relevance (default), `1` latest, `2` oldest. For other types: `r` relevance (default), `dd` latest. |
| `period` | Optional | The time range. Defaults to `all`. Values: `1h`, `1d`, `1w`, `1m`, `3m`, `6m`, `1y`, or a custom range such as `from20260101to20260630`. News also supports `2h` to `6h`. |

## SerpApi parameters

| Parameter | Required | Description |
|---|---|---|
| `engine` | Required | Set to `naver`. |
| `api_key` | Required | Your private SerpApi key. |
| `device` | Optional | `desktop` (default), `tablet` or `mobile`. |
| `no_cache` | Optional | Defaults to `false`. Set to `true` to always fetch fresh results. Cached results are kept for one hour and are free. |
| `async` | Optional | Defaults to `false`. Set to `true` to submit a search now and get the results later from the Searches Archive API. Don't combine it with `no_cache`. |
| `output` | Optional | `json` (default), `html` (raw HTML) or `md` (Markdown for LLMs). |
| `json_restrictor` | Optional | Returns only the fields you choose, to make the response smaller. |
| `zero_trace` | Optional | Enterprise only. Search parameters and results are not stored on SerpApi's servers. |

## Response

A JSON response can include these top-level keys, depending on what Naver shows for the query:

| Key | What it contains |
|---|---|
| `search_metadata` | The search ID, status and timing. Status moves from `Processing` to `Success` or `Error`. |
| `search_parameters` | The parameters used for this search. |
| `web_results` | Regular web results: `title`, `link`, `snippet` and more. |
| `news_results` | News articles. |
| `inline_videos_results` | Video results. |
| `inline_images_results` | Image results: `title`, `source`, `thumbnail`, `original`, `link`. |
| `knowledge_graph` | The knowledge panel, when Naver shows one. |
| `ads_results` | Ads. |
| `shopping_results` | Shopping results. |
| `pagination`, `serpapi_pagination` | Links to the next pages. |

## Error handling

A request can return HTTP `200` and still contain an `error` field. For example, this happens when there are no results or the key is invalid. Always check both:

1. The HTTP status.
2. Whether the JSON has an `error` field.

```python
if "error" in results:
    # e.g. invalid key, no results, or run out of searches
    handle_error(results["error"])
```

## Tips

- Use `page` instead of calculating `start` yourself.
- Cache results you reuse. Repeated searches use up your monthly quota.
- To compare Naver with Google, remember the differences: Google uses `q` and `organic_results`, while Naver uses `query` and `web_results`.
