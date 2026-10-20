"""
Korean search agent: answers a Korean question using live Naver + Google (Korea)
results from SerpApi, then (optionally) asks an LLM to summarize with sources.

Setup:
    pip install google-search-results anthropic
    export SERPAPI_KEY=...            # https://serpapi.com/manage-api-key
    export ANTHROPIC_API_KEY=...      # optional: enables the LLM summary
    export LLM_MODEL=...              # optional: the Claude model name to use
    MOCK=1 python serpapi_korean_agent.py   # offline test using fixtures/

Project made for my SerpApi application.
"""
import json
import os
import sys

SERPAPI_KEY = os.environ.get("SERPAPI_KEY")
TOP_N = 5


FIXTURES = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "fixtures")


def serpapi_search(params):
    """Run one SerpApi search. Returns (results_dict, error_message).
    With MOCK=1, reads fixtures/<engine>.json instead (no searches spent)."""
    if os.environ.get("MOCK") == "1":
        path = os.path.join(FIXTURES, f"{params['engine']}.json")
        if not os.path.exists(path):
            return None, f"MOCK=1 but {os.path.relpath(path)} does not exist yet"
        with open(path, encoding="utf-8") as f:
            return json.load(f), None
    from serpapi import GoogleSearch  # provided by the `google-search-results` package

    try:
        results = GoogleSearch({**params, "api_key": SERPAPI_KEY}).get_dict()
    except Exception as e:  # network / connection problems
        # Print only the error type: the full message contains the request URL, including your API key.
        return None, f"Request failed ({type(e).__name__}). Check your internet connection."
    if "error" in results:  # SerpApi reports problems (bad key, no results) here
        return None, results["error"]
    return results, None


def search_google_kr(query):
    results, err = serpapi_search({
        "engine": "google",
        "q": query,
        "location": "Seoul, South Korea",  # check exact spelling via SerpApi's Locations API
        "gl": "kr",
        "hl": "ko",
    })
    if err:
        return [], err, None
    items = [
        {"source": "Google", "title": r.get("title", ""), "link": r.get("link", ""), "snippet": r.get("snippet", "")}
        for r in results.get("organic_results", [])[:TOP_N]
    ]
    return items, None, results


def search_naver(query):
    results, err = serpapi_search({"engine": "naver", "query": query})  # Naver uses `query`, not `q`
    if err:
        return [], err, None
    items = [
        {"source": "Naver", "title": r.get("title", ""), "link": r.get("link", ""), "snippet": r.get("snippet", "")}
        for r in results.get("web_results", [])[:TOP_N]  # Naver uses `web_results`, not `organic_results`
    ]
    return items, None, results


def build_context(items):
    return "\n".join(
        f"[{i}] ({it['source']}) {it['title']}\n{it['link']}\n{it['snippet']}\n"
        for i, it in enumerate(items, 1)
    )


def summarize(question, context):
    """Ask an LLM for a Korean summary with numbered citations. Skipped if not configured."""
    model = os.environ.get("LLM_MODEL")
    if not (os.environ.get("ANTHROPIC_API_KEY") and model):
        return None
    import anthropic

    prompt = (
        "다음 검색 결과만 근거로 질문에 한국어로 답하세요. "
        "각 문장 끝에 [1]처럼 출처 번호를 붙이고, 결과에 없는 내용은 추측하지 마세요.\n\n"
        f"질문: {question}\n\n검색 결과:\n{context}"
    )
    msg = anthropic.Anthropic().messages.create(
        model=model, max_tokens=1024, messages=[{"role": "user", "content": prompt}]
    )
    return msg.content[0].text


def main():
    question = " ".join(sys.argv[1:]) or "요즘 인기 있는 AI 프레임워크"
    if not SERPAPI_KEY and os.environ.get("MOCK") != "1":
        sys.exit("SERPAPI_KEY is not set. Get a key at https://serpapi.com/manage-api-key")

    print(f"질문: {question}\n")
    google_items, google_err, google_raw = search_google_kr(question)
    naver_items, naver_err, naver_raw = search_naver(question)
    for name, err in (("Google", google_err), ("Naver", naver_err)):
        if err:
            print(f"[{name}] {err}")

    items = google_items + naver_items
    if not items:
        sys.exit("No results from either engine.")

    context = build_context(items)
    answer = summarize(question, context)
    print(answer if answer else "LLM not configured; showing the search context instead:\n")
    print(context)

    with open("serpapi_response_sample.json", "w", encoding="utf-8") as f:
        json.dump({"google": google_raw, "naver": naver_raw}, f, ensure_ascii=False, indent=2)
    print("Saved raw results to serpapi_response_sample.json")


if __name__ == "__main__":
    main()
