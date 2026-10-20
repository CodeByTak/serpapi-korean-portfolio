<!-- DRAFT -->
# Naver vs Google 검색 결과 비교기

Project made for my SerpApi application.

## 무엇을 하는 앱인가요?

같은 한국어 검색어로 Naver와 Google Korea의 웹 검색 결과를 나란히 비교하는 React + Vite 앱입니다. 각 엔진의 상위 5개 결과에서 제목, 도메인, 요약을 보여 줍니다. 실제 결과 수는 5개보다 적을 수 있습니다.

- Naver는 왼쪽, Google은 오른쪽에 표시됩니다. 휴대폰에서는 한 열로 배치됩니다.
- 두 엔진에 같은 도메인이 있으면 `양쪽 모두` 태그와 겹치는 도메인 수를 표시합니다. `www.`만 제거한 호스트 이름으로 비교하며, 다른 하위 도메인은 별도로 취급합니다.
- 예시 검색어 5개는 저장된 JSON을 사용합니다. 직접 입력한 검색어도 예시 검색어와 일치하면 저장된 결과를 사용합니다.
- 그 밖의 검색어는 `GET /api/search?q=<검색어>`로 전달됩니다. 서버가 SerpApi의 Google Korea와 Naver 검색을 병렬 실행합니다.
- 로딩, 결과 없음, 엔진별 오류 상태와 시스템 설정에 따른 다크 모드를 지원합니다.

## 로컬 실행

### 1. 준비

저장소 루트에서 시작합니다. Node.js 22.12 이상인 22.x와 npm을 권장합니다. 프로젝트의 설치된 Vite 버전과 호환되는 Node.js를 사용하세요.

```sh
cd app
npm ci
```

### 2. 저장된 예시만 보기: API 키 불필요

```sh
npm run dev
```

터미널에 출력된 주소를 엽니다. 기본 포트는 보통 `5173`입니다. `vite.config.js`의 개발 전용 플러그인이 `/api/search`도 기존 서버 핸들러로 연결합니다. 프리셋에는 키가 필요 없지만 직접 입력한 새 검색어에는 다음 설정이 필요합니다.

### 3. 본인의 SERPAPI_KEY로 실제 검색하기


`app/.env.local`을 편집기로 만들고 본인의 키를 넣습니다. 실제 키는 문서, 소스 코드, 커밋, 채팅에 붙여 넣지 마세요. 아래 값은 형식 설명용입니다.

```dotenv
SERPAPI_KEY=YOUR_OWN_SERPAPI_KEY
```

`.env.local`은 기존 `.gitignore`의 `.env.*` 규칙으로 제외됩니다. 개발 설정은 저장소 루트와 `app/`의 환경 파일에서 `SERPAPI_KEY`만 서버의 `process.env`로 읽습니다. `app/` 설정이 루트보다 우선하며 기존 프로세스 환경 변수는 덮어쓰지 않습니다. 키를 바꾸면 개발 서버를 재시작하세요. `MOCK`는 프로세스 환경에서 설정하지 않거나 `0`으로 두세요. `VITE_SERPAPI_KEY`는 만들지 마세요. 브라우저에 키를 전달하는 `define` 설정은 사용하지 않습니다.

`app/`에서 실행합니다. 별도 CLI나 패키지는 필요하지 않습니다.

```sh
npm run dev
```

`http://localhost:5173` 또는 터미널에 출력된 주소를 열고 예시 목록에 없는 검색어를 입력하면 실제 검색을 테스트할 수 있습니다. 이때 새 검색어 한 번은 Google과 Naver 각각 한 번, 최대 두 번의 SerpApi 검색 요청을 만듭니다. 예시 클릭만으로는 실제 검색 연결 여부를 확인할 수 없습니다.

개발 전용 연결은 프로덕션 빌드에 포함되지 않습니다. Vercel 배포에서는 `api/search.js`가 함수로 실행됩니다. Vercel 환경을 별도로 재현하려면 Vercel CLI의 `vercel dev`를 사용할 수도 있습니다.[2]

## 캐시와 프리셋으로 검색 요청 줄이기

### 저장된 프리셋

| 검색어 | 정적 파일 |
| --- | --- |
| 카페 추천 강남 | `/presets/gangnam-cafes.json` |
| 파이썬 강의 | `/presets/python-courses.json` |
| AI 스타트업 | `/presets/ai-startups.json` |
| 제주도 여행 | `/presets/jeju-travel.json` |
| 아이폰 17 리뷰 | `/presets/iphone-17-review.json` |

파일은 `public/presets/`에 있습니다. 프리셋은 `/api/search`를 거치지 않으므로 SerpApi 검색 요청을 쓰지 않습니다. 저장 시점의 결과이지 실시간 결과는 아닙니다. 화면에 저장된 예시임을 표시합니다.

### 브라우저 캐시

`src/comparison.js`는 앞뒤 공백을 제거한 검색어를 키로 요청 Promise와 응답을 메모리에 저장합니다. 같은 페이지에서 같은 검색어를 다시 선택하면 추가 HTTP 요청 없이 재사용합니다. HTTP 실패나 잘못된 응답 형식은 캐시에서 제거하지만, 정상 JSON으로 받은 엔진별 오류는 캐시에 남습니다. 새로고침하면 이 캐시는 사라집니다.

### 서버 캐시

`api/search.js`는 전달받은 검색어 문자열을 키로 Promise를 저장해, 같은 함수 인스턴스에서 같은 검색어의 동시/반복 요청을 합칩니다. 대소문자나 공백이 다른 API 요청은 서로 다른 키입니다. TTL이나 영구 저장소는 없고, 엔진별 오류도 캐시됩니다.

이 캐시는 함수 프로세스 내부에만 있습니다. 재시작, 재배포 또는 다른 함수 인스턴스에서는 재사용을 보장하지 않습니다. 따라서 서비스 전체에서 검색어당 한 번만 과금된다는 보장은 없습니다. 공개 API에는 인증이나 사용량 제한이 없으므로 키를 숨기는 것만으로 남용을 막을 수 없습니다. 공개 배포 전 SerpApi 사용량을 확인하고 별도의 접근 제한을 검토하세요.

### 오프라인 테스트와 캡처

```sh
npm test
npm run build
```

`npm test`는 `MOCK=1 node --test`를 실행합니다. 테스트는 저장된 `../fixtures/` 또는 가짜 fetch 응답을 사용하며 실제 검색을 하지 않습니다. `MOCK=1`을 직접 사용한 API 호출은 검색어와 관계없이 같은 엔진 fixture를 반환하므로 품질 비교용으로는 적합하지 않습니다.

실제 캡처 스크립트는 저장소 루트의 `scripts/capture.js`입니다. 키는 환경 변수 또는 루트의 `.env`에서 읽습니다. `app/.env.local`을 자동으로 읽지 않습니다. 캡처는 실제 검색 요청을 쓰므로 테스트/빌드/배포 과정에서 실행하지 않습니다. 배포용 파일은 이미 저장되어 있습니다.

운영 배포에서는 `MOCK`를 설정하지 마세요. Vercel Root Directory를 `app`으로 설정할 때 루트 밖의 `fixtures/` 배포를 전제로 하지 않습니다.

## Vercel 배포: GitHub에서 가져오기

Vercel은 Vite 프로젝트를 지원하며, 저장소의 Root Directory와 빌드 설정을 지정할 수 있습니다.[1][4]

1. 이 저장소를 본인의 GitHub 저장소로 올립니다. `app/public/presets/`, `app/api/search.js`, `app/package-lock.json`, `app/vercel.json`을 포함하세요. `.env`, `.env.local`, `node_modules/`, `.vercel/`은 올리지 않습니다.
2. Vercel 대시보드에서 **Add New → Project**를 선택합니다. GitHub를 연결하고 해당 저장소를 **Import**합니다.
3. **Root Directory**에서 `app`을 선택합니다. 저장소 루트 `.`가 아닙니다.[4]
4. **Framework Preset**은 `Vite`입니다. `app/vercel.json`이 Install Command `npm ci`, Build Command `npm run build`, Output Directory `dist`를 명시합니다. `app/dist`가 아니라 `dist`입니다. 불필요한 대시보드 override는 추가하지 않습니다.[4]
5. 배포 전 **Environment Variables**에 이름 `SERPAPI_KEY`, 값 본인의 SerpApi 키를 추가합니다. **Production**을 선택하고, 미리보기 배포에서도 실제 검색이 필요하면 **Preview**도 선택합니다. 로컬 환경 변수 동기화가 필요하면 **Development**에도 추가할 수 있습니다.[3]
6. `MOCK=1`과 `VITE_SERPAPI_KEY`는 추가하지 않습니다. 키를 `vercel.json`에 쓰지 않습니다. **Deploy**를 누릅니다.
7. 배포된 주소를 열고 `카페 추천 강남`을 선택합니다. 저장된 예시가 표시되는지 확인합니다. 프리셋만 확인하면 검색 요청은 발생하지 않습니다.
8. 실제 API도 확인하려면 예시 목록에 없는 검색어를 한 번 입력합니다. Google과 Naver가 각각 최대 5개 표시되는지 확인하세요. 이 확인은 실제 검색 요청을 최대 두 번 씁니다.
9. 나중에 키를 변경할 때는 프로젝트 **Settings → Environment Variables**에서 `SERPAPI_KEY`를 수정한 뒤 새로 배포합니다. 환경 변수 변경은 기존 배포에 소급 적용되지 않습니다.[3]

`app/vercel.json`은 `api/search.js`의 최대 실행 시간을 60초로 설정합니다. 코드의 엔진별 30초 AbortController 타임아웃이 먼저 끝날 여유를 둡니다. 두 엔진은 병렬 실행됩니다. 함수별 `maxDuration`은 `vercel.json`의 `functions`에서 설정할 수 있습니다.[5] 현재 앱은 `/`만 사용하므로 SPA 전체 경로 rewrite는 필요하지 않으며 `/api/search`나 정적 JSON 경로를 덮어쓰지 않습니다.

### 배포 후 문제 확인

- 프리셋은 보이는데 실제 검색이 실패하면 Root Directory `app`, 함수 `/api/search`, 배포 대상 환경의 `SERPAPI_KEY`, `MOCK` 설정을 먼저 확인합니다.
- API의 `errors.google`과 `errors.naver`는 `timeout`, `http <status>`, `serpapi error: <안전하게 정리한 오류 텍스트>`, `parse error`, `network error` 등으로 구분합니다. 키가 없으면 설정 오류를 반환합니다.
- 함수 로그나 브라우저 콘솔에 키 또는 SerpApi 요청 URL을 추가로 출력하지 마세요.
- 푸터의 GitHub 링크는 현재 일반 GitHub 홈페이지입니다. 저장소 주소가 정해지면 `src/App.jsx`에서 실제 저장소 링크로 교체하세요.

## English summary

Compare the top five Naver and Google Korea results for the same Korean query, with shared-domain highlights.
Run npm run dev with your own server-only SERPAPI_KEY for live searches; saved presets require no key.
Deploy with app as the Vercel Root Directory; presets and per-instance caches reduce requests but do not guarantee global deduplication.

## Sources

[1] https://vercel.com/docs/frameworks/frontend/vite
[2] https://vercel.com/docs/cli/dev
[3] https://vercel.com/docs/environment-variables
[4] https://vercel.com/docs/deployments/configure-a-build
[5] https://vercel.com/docs/functions/configuring-functions/duration
