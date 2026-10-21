<!-- DRAFT -->
# SerpApi로 Naver와 Google 검색 결과 비교하기 (JavaScript)

Unofficial project made for my SerpApi application.

## 왜 비교하나요

같은 검색어라도 Google과 Naver가 보여주는 페이지는 다를 수 있어요. 제목과 링크, 짧은 설명인 `snippet`을 나란히 읽으면 어떤 정보를 찾았는지 비교하기 쉬워요.

이 글에서는 `app/api/search.js`의 요청 방식과 `app/public/presets/jeju-travel.json`의 저장 결과만 사용해요. 저장 결과를 현재 검색 순위나 검색 엔진 전체의 특성으로 단정하지는 않아요.

## 준비물

- JavaScript의 변수, 배열, `async`와 `await`를 읽을 수 있으면 돼요.
- 아래 예제는 browser가 아니라 server에서 실행해요. `fetch`, `URLSearchParams`, `process.env`를 사용할 수 있는 JavaScript 실행 환경이 필요해요.
- 실제 검색에는 SerpApi API 키가 필요해요. 저장된 preset을 읽고 비교할 때는 API 키 없이 시작할 수 있어요.

## API 키 설정

server의 환경 변수 `SERPAPI_KEY`에 본인의 API 키를 설정해요. `app/api/search.js`는 `process.env.SERPAPI_KEY`에서 값을 읽고, 값이 없으면 실제 검색 대신 설정 오류를 반환해요.

API 키를 JavaScript 파일에 직접 쓰거나 browser에 보내지 마세요. 아래 코드도 server에서만 실행해야 해요. 요청 URL에는 키가 들어가므로 URL 전체를 출력하지 마세요.

## 코드

SerpApi endpoint는 `https://serpapi.com/search.json`이에요. Google은 검색어를 `q`로, Naver는 `query`로 보내요. Google 요청에는 한국 지역과 한국어 설정인 `gl=kr`, `hl=ko`, 그리고 `location=Seoul, South Korea`를 넣어요.

다음은 두 `fetch` 요청과 JSON 결과 추출에 집중한 예제예요.

```javascript
async function compare(query) {
  const key = process.env.SERPAPI_KEY;
  if (!key) throw new Error('SERPAPI_KEY가 필요해요.');
  const endpoint = 'https://serpapi.com/search.json';
  const google = new URLSearchParams({
    engine: 'google', api_key: key, q: query,
    gl: 'kr', hl: 'ko', location: 'Seoul, South Korea',
  });
  const naver = new URLSearchParams({
    engine: 'naver', api_key: key, query,
  });
  const responses = await Promise.all([
    fetch(`${endpoint}?${google}`),
    fetch(`${endpoint}?${naver}`),
  ]);
  if (responses.some(r => !r.ok)) throw new Error('HTTP 오류예요.');
  const [g, n] = await Promise.all(responses.map(r => r.json()));
  if (Object.hasOwn(g, 'error') || Object.hasOwn(n, 'error'))
    throw new Error('SerpApi 오류예요.');
  return { google: g.organic_results, naver: n.web_results };
}
```

server 코드에서 `await compare('제주도 여행')`으로 호출해요. JSON에서 Google 결과는 `organic_results`, Naver 결과는 `web_results`에 있어요. HTTP 응답이 성공해도 JSON에 `error`가 있는지 확인해요.

실제 `app/api/search.js`에는 timeout과 응답 형태 검사도 있어요. 또 각 검색 엔진의 결과를 최대 5개까지 골라 `title`, `link`, `snippet`만 남겨요. 위 예제는 이 처리 전체를 복사한 코드는 아니에요.

## 결과 비교

`app/public/presets/jeju-travel.json`의 `query`는 `제주도 여행`이에요. 이 파일의 `google`, `naver` 배열을 기준으로 다음 차이를 볼 수 있어요.

- 첫 결과가 달라요. Google은 나무위키의 `제주도` 페이지가 먼저 나오고, Naver는 한국관광공사의 `섭지코지` 여행지 페이지가 먼저 나와요. 이 저장 결과에서는 섬 자체의 설명과 특정 여행지 안내로 시작점이 달라요.
- 포함된 페이지의 성격이 달라요. Google에는 제주도청과 위키백과, 제주도 기자협회가 있어요. Naver에는 Tripadvisor의 관광명소 페이지, Expedia의 항공권·호텔 페이지, 비짓제주가 있어요. Naver 쪽 목록에서는 여행 계획에 쓸 만한 페이지를 더 쉽게 찾을 수 있어요.
- `snippet`의 내용도 달라요. Google의 제주도청 결과에는 `이 페이지에 관한 정보가 없습니다.`라고 적혀 있어요. Naver의 비짓제주 결과에는 관광지, 음식점, 숙박, 교통 등의 여행정보를 제공한다는 설명이 있어요. 제목만 보지 말고 설명도 함께 읽어봐요.

이 차이는 해당 preset 안에서 관찰한 내용이에요. 다른 검색어에서도 같은 차이가 날 거라고 일반화하지 마세요.

## 다음 단계

다른 preset을 골라 같은 방식으로 제목과 링크를 비교해봐요. 직접 검색을 붙일 때는 `app/api/search.js`의 결과 정리와 오류 처리를 함께 살펴봐요.

이 handler는 같은 검색어의 Promise와 응답을 `Map`에 저장해서 중복 요청을 합쳐요. 영구 저장은 아니므로 실행 환경이 달라져도 계속 보관된다고 생각하면 안 돼요. 또한 이 파일에서 `MOCK=1`은 preset을 선택하는 기능이 아니라 별도의 fixture를 읽는 분기예요.

## English summary

Send server-side fetch requests to SerpApi using q for Google and query for Naver, with SERPAPI_KEY kept in the server environment.
Read organic_results for Google and web_results for Naver, and check both HTTP status and the JSON error field.
The saved 제주도 여행 preset shows different first results, page types, and snippets; these observations do not establish general engine behavior.
