<!-- DRAFT -->
# 한국어 검색 에이전트

Unofficial project made for my SerpApi application.

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

<!-- Theresa: 실행 결과를 확인한 뒤 이곳에 샘플 출력을 추가하세요. -->

## English summary

Combines Google Korea and Naver search results, with an optional Korean summary and numbered citations via Anthropic.
Create a Python virtual environment, install requirements, and configure SERPAPI_KEY plus optional ANTHROPIC_API_KEY and LLM_MODEL.
Set MOCK=1 and clear the LLM variables to run offline with saved fixtures; sample output will be added by Theresa.
