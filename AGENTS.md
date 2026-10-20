# SerpApi Korean Portfolio — project rules

Owner: Theresa Tak. Unofficial portfolio for a SerpApi Developer Advocate (Korean) application.

## Stack
- app/: Vite + React (JavaScript) front end; Vercel serverless functions in app/api/ (Node 20)
- app/public/portfolio.html: the single static portfolio hub page
- agent/: serpapi_korean_agent.py (Python, google-search-results package; MOCK=1 reads fixtures/)
- content/: Markdown drafts (Korean first, short English summary at the end)
- fixtures/: saved SerpApi JSON responses for offline testing (google.json, naver.json)
- scripts/: one-off helper scripts

## SerpApi facts (do not look these up again)
- Endpoint: https://serpapi.com/search.json
- Google Korea: engine=google, q=<query>, gl=kr, hl=ko, location="Seoul, South Korea"; results in organic_results
- Naver: engine=naver, query=<query> (not q); results in web_results
- Errors come back as an "error" field in the JSON, not as an HTTP exception

## Rules
- API key only in env var SERPAPI_KEY; never in code, logs, or the browser. .env and .venv are in .gitignore.
- Never print error messages that contain request URLs (they include the key).
- Cache results: same query = no new search. Tests use fixtures/, never live searches.
- Keep command output short (pipe to tail -20). Never print whole JSON files.
- Edit files in place; don't rewrite whole files unless asked.
- Every public page shows: "Unofficial project made for my SerpApi application." No SerpApi logo.
- Korean text is a draft for Theresa to edit; mark it <!-- DRAFT -->.
- Ask before installing anything not listed here.

