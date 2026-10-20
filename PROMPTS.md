# Hermes prompts — copy one at a time

Start every project with a fresh `hermes` session in this folder (AGENTS.md loads automatically).
Total ≈ 4 h 55 min including your checks. Full plan with explanations: the "Hermes Build Plan" doc.

---

## Step 0 — Setup (15 min)

You: sign up for SerpApi, copy your key, `cp .env.example .env` and fill it in, `git init` (or clone your empty GitHub repo here), run `hermes`.

```text
Read AGENTS.md. Check that the folder structure matches it and that .gitignore covers .env, .venv, node_modules and dist. Commit everything with message "setup". Reply in 3 lines max.
```

---

## Project 1 — Naver vs Google comparison app (1 h 40 min)

**1.1 Backend (~15 min)**
```text
In app/, scaffold a Vite + React (JavaScript) project. Then create app/api/search.js, a Vercel serverless function:
- GET /api/search?q=<query>
- Calls SerpApi twice in parallel with fetch: Google Korea and Naver (params in AGENTS.md).
- Returns JSON: { query, google: [{title, link, snippet}], naver: [{title, link, snippet}], errors: {google, naver} }, top 5 each.
- In-memory cache keyed by query. If env MOCK=1, read fixtures/<engine>.json instead of calling SerpApi.
- Handle the JSON "error" field and network errors without exposing the key.
Write a small test (node --test) using MOCK=1. Run it. Reply with only: files created, test result.
```

**1.2 Capture real data (~10 min)** — first run `export SERPAPI_KEY=...` (or load .env)
```text
Write scripts/capture.js: for each of these 5 queries, call /api/search logic once with the real key and save the combined result to app/public/presets/<slug>.json. Also save one raw Google and one raw Naver response to fixtures/google.json and fixtures/naver.json.
Queries: "카페 추천 강남", "파이썬 강의", "AI 스타트업", "제주도 여행", "아이폰 17 리뷰"
Run it once. Print only the 5 file names and result counts.
```
(10 searches total. Note anything odd in content/feedback-notes.md.)

**1.3 Front end (~25 min)**
```text
Build the React page in app/src. Design goal: a polished developer-tool look (think Linear or Vercel), not a default template.

Design system (put tokens in app/src/styles.css as CSS variables, plain CSS, no UI library):
- Font: Pretendard (load from its CDN), fallback system-ui. Sizes 14/16/20/32, weights 400/600/700.
- Colors: background #FAFAFA, surface #FFFFFF, text #111827, muted #6B7280, border #E5E7EB. Naver column accent green #03C75A, Google column accent blue #4285F4 (thin top border + rank badge only; no logos).
- Dark mode via prefers-color-scheme (background #0B0F14, surface #111827, text #F3F4F6, border #1F2937).
- 8px spacing scale, 12px card radius, soft shadow 0 1px 2px rgba(0,0,0,.06), max width 1100px.

Layout:
- Hero: title "Naver vs Google 검색 결과 비교기", one-line English subtitle, large rounded search input with a button.
- Under it, 5 preset queries as pill chips. Presets load from /presets/<slug>.json (no API call); custom queries call /api/search.
- Two columns side by side (Naver left, Google right), each with a header showing engine name + result count. Each result card: rank badge, title link, domain in muted text, snippet clamped to 2 lines. One column on phones.
- Highlight overlap: if the same domain appears in both columns, show a small "양쪽 모두" tag on both cards.
- Summary bar above the columns: "겹치는 도메인 N개" and a DRAFT box "무엇이 다른가요?" for my 2–3 sentences.
- States: skeleton loading cards, friendly Korean empty and error messages.
- Footer: "Project made for my SerpApi application." + GitHub link.
- Accessible: visible focus rings, contrast AA, buttons usable by keyboard.

Run the build; reply with only errors if any.
```

**1.3b One polish pass (~10 min)**
```text
Start the dev server. Use a headless browser (Playwright if installed, otherwise ask me) to take two screenshots: desktop 1280px wide with the "카페 추천 강남" preset loaded, and mobile 390px wide. Look at them and fix the 5 biggest visual problems (spacing, alignment, text overflow, contrast). One pass only. Reply with the 5 fixes, one line each.
```

**1.4 README + deploy (~10 min)**
```text
Write app/README.md in Korean (with a 3-line English summary): what it does, how to run locally with your own SERPAPI_KEY, how the cache and presets save searches. Add vercel.json if needed. List the exact steps for me to deploy on Vercel with SERPAPI_KEY as an environment variable. Commit "comparison app".
```

You (~30 min): `npm run dev`, try presets + one custom query, deploy on Vercel, add SERPAPI_KEY in Vercel settings, write the "무엇이 다른가요?" text, check on your phone.

---

## Project 2 — Korean AI search agent (25 min)

Already done in this folder: the fixed script, MOCK=1 offline mode, requirements.txt.

**2.1 (~5 min)**
```text
Run agent/serpapi_korean_agent.py with MOCK=1 and show the last 15 lines of output. Then write agent/README.md in Korean (+3-line English summary): what it does, setup with a venv (pip install -r agent/requirements.txt), env vars (SERPAPI_KEY, ANTHROPIC_API_KEY, LLM_MODEL), MOCK=1 offline mode, an example command, and a sample output section I will fill in. Commit "korean search agent".
```

You (~20 min): run one real question, e.g. `python agent/serpapi_korean_agent.py 요즘 인기 있는 AI 프레임워크`, paste the output into the README, record a 60–90 s screen capture if time allows. (2 searches.)

---

## Project 3 — Korean tutorial (35 min)

**3.1 (~10 min)**
```text
Using only app/api/search.js and app/public/presets/ as sources, draft content/tutorial-ko.md in Korean (해요체), for beginner developers:
Title: "SerpApi로 Naver와 Google 검색 결과 비교하기 (JavaScript)"
Sections: 왜 비교하나요 / 준비물 / API 키 설정 / 코드 (the fetch calls, ≤ 25 lines) / 결과 비교 (use one real preset, describe 2–3 differences) / 다음 단계 / English summary (3 lines).
Keep technical terms in English (API, endpoint, JSON). Mark it DRAFT. Max 900 Korean words. Do not invent features or numbers.
```

You (~25 min): rewrite in your voice, add 1–2 screenshots, link app + repo, publish on ai-tools-authority.com, delete "Hello world!".

---

## Project 4 — Localized docs page + style guide (45 min)

You first (5 min): paste the English text of SerpApi's Naver Search API docs page into content/docs-en.md.

**4.1 Term list (~5 min)**
```text
Read content/docs-en.md. Create content/glossary.md: a table of 25–30 technical terms from it with columns English | Korean (blank) | Keep in English? (blank) | Note (blank). Add a style-guide section with these headings only: 문체 (해요체 vs 합니다체), 영어 그대로 쓰는 용어, 숫자·단위 표기, 코드와 파라미터 표기. Do not fill the Korean. Reply with the term count only.
```

You (~30 min): fill the glossary and style rules, translate into content/docs-ko.md, add a "번역자 노트" with 3 term choices and why.

**4.2 Consistency check (~5 min)**
```text
Compare content/docs-ko.md against content/glossary.md. List only places where a glossary term is translated differently from the glossary, or where code, parameter names or URLs were changed. Do not edit the files. Max 15 lines.
```

Fix, then commit "localized docs sample".

---

## Project 5 — Feedback report (20 min)

All night: add one line to content/feedback-notes.md whenever something surprises you.

**5.1 (~5 min)**
```text
Turn content/feedback-notes.md into content/feedback-report.md, one page:
- 3-sentence summary in Korean, then English.
- A table: # | Engine | Query | Expected | Actual | Suggestion.
- Only use findings in my notes and data in app/public/presets/. Do not invent findings. Polite, specific tone.
```

You (~15 min): check each row, keep the 3–5 strongest.

---

## Project 6 — 90-day market plan (25 min)

content/market-notes.md is already filled in.

**6.1 (~8 min)**
```text
Using only content/market-notes.md and content/feedback-report.md, write content/market-plan.md: one page, Korean with an English version below.
Structure: one-line goal / channels table (channel, action, frequency) / two marketing angles / Days 1–30, 31–60, 61–90 (3–4 actions each) / how I'd measure progress (3 simple metrics) / ground rules.
No company names as prospects, no legal claims, no statistics that aren't in my notes. Max 450 words per language.
```

You (~15 min): edit both versions, keep it to one page.

---

## Step 7 — Hub page + email (30 min)

**7.1 Hub (~10 min)**
```text
Create app/public/portfolio.html: a single static page (inline CSS copying the design tokens from app/src/styles.css so it matches the app, Pretendard font, dark mode, no frameworks, mobile friendly), Korean first with English lines under each item.
Top: my name (Theresa Tak), one-line bio (Korean–English translator and conference interpreter, developer, Apple Store tech teacher), and a placeholder for a 60-second intro video.
Then 6 cards: comparison app (live link), AI search agent (repo link), tutorial (blog link), localized docs + glossary, feedback report, 90-day market plan (GitHub file links). Use placeholders like {{APP_URL}} for links I don't have yet and list them at the end of your reply.
Footer: "Project made for my SerpApi application." Commit "portfolio hub" and push.
```

**7.2 Email (~3 min)** — content/email-draft.md is already in this folder.
```text
Edit content/email-draft.md: make it list exactly the six pieces now in app/public/portfolio.html, with the hub link {{HUB_URL}}. Keep it under 170 words. Do not add claims that aren't already in the draft.
```

You (~17 min): fill in real links, click every link on phone + laptop, add the hub link to your résumé, read the email aloud once, send from your own email to careers@serpapi.com with your résumé attached.
