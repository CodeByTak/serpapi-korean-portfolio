<!-- DRAFT -->
# 한국어 검색 에이전트

Project made for my SerpApi application.

## 하는 일

한국어 질문을 받아 SerpApi로 Google 한국 검색과 Naver 웹 검색을 수행합니다. 각 검색 엔진에서 최대 5개 결과의 제목, 링크, 설명을 모읍니다. Anthropic API 키와 모델을 모두 설정하면 검색 결과를 근거로 출처 번호가 붙은 한국어 요약을 생성하고, 설정하지 않으면 검색 결과만 출력합니다.

실행한 디렉터리에 원본 응답을 `serpapi_response_sample.json`으로 저장합니다. 같은 파일이 있으면 덮어씁니다.

## 설치: 가상 환경

저장소 루트에서 실행합니다. Python 3가 필요합니다.

```sh
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -r agent/requirements.txt
```

## 환경 변수

- `SERPAPI_KEY`: 실제 검색에 필요한 SerpApi API 키입니다. `MOCK=1`이면 필요하지 않습니다.
- `ANTHROPIC_API_KEY`: 선택 사항입니다. Anthropic 요약을 활성화하려면 설정합니다.
- `LLM_MODEL`: 선택 사항입니다. 계정에서 사용할 수 있는 Claude 모델 ID를 설정합니다. 요약은 이 값과 `ANTHROPIC_API_KEY`가 모두 있어야 실행됩니다.
- `MOCK`: `1`이면 SerpApi를 호출하지 않고 저장소의 `fixtures/google.json`, `fixtures/naver.json`을 읽습니다. 실행 디렉터리와 관계없이 같은 파일을 사용합니다.

키는 환경 변수로만 설정하고 코드나 Git에 저장하지 마세요. 아래 값은 실제 키와 모델 ID로 바꿉니다.

```sh
export SERPAPI_KEY='YOUR_SERPAPI_KEY'
export ANTHROPIC_API_KEY='YOUR_ANTHROPIC_API_KEY'
export LLM_MODEL='YOUR_CLAUDE_MODEL_ID'
python agent/serpapi_korean_agent.py "한국어 검색 API 활용 방법"
```

## 오프라인 실행 예시

```sh
MOCK=1 ANTHROPIC_API_KEY= LLM_MODEL= python agent/serpapi_korean_agent.py "한국어 검색 API 활용 방법"
```

이 명령은 LLM 요약도 비활성화하므로 외부 API를 호출하지 않습니다. 질문을 바꾸어도 fixture 내용은 바뀌지 않습니다. 현재 fixture는 서로 다른 검색어의 저장 응답이므로 결과가 질문이나 서로의 주제와 일치하지 않을 수 있습니다.

## 샘플 출력

<!-- 질문: 요즘 인기 있는 AI 프레임워크

LLM not configured; showing the search context instead:

[1] (Google) AI 프레임워크란 무엇인가요?
https://www.ibm.com/kr-ko/think/topics/ai-frameworks
모든 프레임워크를 일일이 언급할 수는 없지만, 가장 최신의 인기 있는 AI프레임워크 몇 가지의 목록은 다음과 같습니다. Hugging Face. IBM WatsonStudio. Keras.

[2] (Google) AI 프레임워크란? | 퓨어스토리지
https://www.everpuredata.com/kr/knowledge/ai-framework.html
인기 AI 프레임워크 ; TensorFlow · 엔터프라이즈급 확장성; 포괄적인 프로덕션 툴 ; PyTorch · 동적 계산 그래프; 사용자 친화적인 인터페이스; 직관적인 Python 통합 ; 케라스.

[3] (Google) 2026년 최고의 AI 에이전트 프레임워크 13선 - Bright Data
https://brightdata.co.kr/blog/ai/best-ai-agent-frameworks
최고의 AI 에이전트 프레임워크 · AutoGen · LangChain · OpenAI 에이전트SDK · Langflow · LlamaIndex · Agno · CrewAI · PydanticAI.

[4] (Google) 기업용으로 가장 믿을 만한 AI 에이전트 프레임워크는 무엇 ...
https://www.reddit.com/r/AI_Agents/comments/1nj56ij/whats_the_most_reliable_ai_agent_framework_for/?tl=ko
AI 에이전트 구축에 뛰어들고 있는데, 취미 프로젝트보다는 기업용 애플리케이션에 더 집중하고 있어요. 실제 비즈니스 ...

[5] (Google) 모든 AI/ML 엔지니어가 알아야 할 생성형 AI 프레임워크!
https://kr.linkedin.com/pulse/generative-ai-frameworks-every-aiml-engineer-should-know-belagatti-8kykc?tl=ko
이번 주 뉴스레터 호에서는 여섯 가지 필수 생성형 AI 프레임워크를 다룹니다—랭체인, 다이나믹, 라마인덱스, 크루AI, 오토젠, 아마존 베드락—모든 AI/ML ...

[6] (Naver) 2025년 지금 가장 인기 있는 AI 도구 TOP 5 완전 비교
https://blog.naver.com/hyj1029/223958174261
가장 인기 있는 AI 2025년 지금 가장 인기 있는 AI 도구 TOP 5 완전 비교요즘 AI 없이는 하루도 안 지나가는 것 같아요. 저도 처음에는 ‘이거 어려운 거 아냐?’ 했는데, 한 번 써보니까 너무 편리해서 이제는 매일 쓰게 되더라고요. 단순히 영어 공부나 글쓰기만이 아니라 일정 관리, 자료 요약,아이디어 뽑기까지… AI를 잘 활용하면 시간이 절약되고...

[7] (Naver) AI 프레임워크란 무엇인가요?
https://www.ibm.com/kr-ko/think/topics/ai-frameworks
인공 지능(AI) 프레임워크는 AI 시스템 개발을 위한 데이터 세트, 라이브러리, 패키지, 도구로 구성됩니다. 이 디지털 에코시스템은 맞춤형 AI 솔루션과 맞춤형 AI 애플리케이션을 만들기 위한 체계적인 기반 역할을 합니다.초기 AI 프레임워크는 학계나 연구 커뮤니티에서 신경망 개발을 지원하는방법으로 시작되었습니다. 딥 러닝이 발전함에 따라 후속 프레임워크는 대규모 AI .....

[8] (Naver) Computer Use
https://namu.wiki/w/Computer%20Use
등)를 AI가 직접 컨트롤하여 조종할 수 있는 시대가 된 것이다. 이제는 코딩뿐만 아니라 업무 자동화를 위한 에이전트인 Claude Cowork, ChatGPT Work에서도 AI가 텍스트 크롤링... 컴퓨터 사용 에이전트의 인기 2025년 11월, 오스트리아 출신의 유명 개발자 피터 스타인버거(Peter Steinberger)가 Claude API를 활용해 컴퓨터 백그라운드에서 자율적으로 업무를...

[9] (Naver) 2025년 웹 개발 핵심 트렌드 5가지 | 인포그랩 기술 블로그
https://insight.infograb.net/blog/2025/02/05/2025-devtrends/
이 글은 2025년 웹 개발의 핵심 트렌드 5가지를 소개합니다. AI 개발 도구의 확장, JAMstack의 입지 강화, Utility-First CSS 프레임워크의 인기, WebAssembly 활용 확대, 음성 사용자 인터페이스(VUI)의 구현 용이가 그 내용입니다. 각 트렌드의 올해 동향과 전망을 확인하세요.

[10] (Naver) 지금 전 세계에서 가장 인기 있는 에이전트 스킬 Top5는 뭘까?
https://yozm.wishket.com/magazine/detail/3895/
GitHub 스타 수로 가장 인기 있는 AI 스킬 레포 5개(superpowers·ECC 등)를 비교한 가이드입니다. -->

## English summary

Combines Google Korea and Naver search results, with an optional Korean summary and numbered citations via Anthropic.
Create a Python virtual environment, install requirements, and configure SERPAPI_KEY plus optional ANTHROPIC_API_KEY and LLM_MODEL.
Set MOCK=1 and clear the LLM variables to run offline with saved fixtures; sample output will be added by Theresa.
