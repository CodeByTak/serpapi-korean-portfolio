content/docs-ko.md



Naver Search API
API endpoint는 다음과 같아요.
https://serpapi.com/search?engine=naver
실시간으로 직접 실행해 보고 싶다면 Playground를 이용해 보세요.
검색 쿼리
- 검색어: Coffee
- 실행: 검색
도구
- 출력 형식: JSON 또는 Markdown
- 결과 내 검색
- HTML 크기 확인
- 텍스트 크기 확인
- X-Ray 테두리 표시
- JSON 경로 표시
- 원본 JSON 표시
- JSON 트리 접기
- 출력 복사
- 설정 초기화
- 전체 접기 또는 펼치기
- JSON 경로 복사
JSON 응답 예제
아래 내용은 API에서 반환된 원본 JSON 예제예요. 응답 구조와 필드명을 정확하게 보여주기 위해 JSON의 키와 값은 번역하지 않았어요.
{
"search_metadata":
{
"id":
"6aa3276f877a919fd220dd85",
"status":
"Success",
"json_endpoint":
"https://serpapi.com/searches/Jwn_73JjTchOJvap-ibNOCjWAQUhwU8tHJhStX6OuK4/6aa3276f877a919fd220dd85.json",
"markdown_endpoint":
"https://serpapi.com/searches/Jwn_73JjTchOJvap-ibNOCjWAQUhwU8tHJhStX6OuK4/6aa3276f877a919fd220dd85.md",
"created_at":
"2026-09-10 21:55:59 UTC",
"processed_at":
"2026-09-10 21:55:59 UTC",
"naver_url":
"https://search.naver.com/search.naver?query=Coffee",
"raw_html_file":
"https://serpapi.com/searches/Jwn_73JjTchOJvap-ibNOCjWAQUhwU8tHJhStX6OuK4/6aa3276f877a919fd220dd85.html",
"total_time_taken":
0.82
},
"search_parameters":
{
"query":
"Coffee",
"engine":
"naver",
"device":
"desktop"
},
"ads_results":
[
{
"title":
"NEW 돌체구스토 네오",
"sub_title":
"추석 선물 추천",
"description":
"매일 마시는 아메리카노, 네스카페 돌체구스토 네오와 함께 집에서도 간편하게",
"site":
"brand.naver.com/nestlestore",
"link":
"https://ader.naver.com/v1/D5ltBD55SAK4mKsLYqvuhvMDUZmYYeUHYY3MbGheAkqYHurtBFEPw7CpMvCuu5jFEFG8driHp9riiifgIbqjOx82_j5ZN1dQaQXMU0havsQMr205dQAUR0TEQsxqX9sRsMlEoRlA7n2CDdXUqVrVh1JjnoeliDi9bZ4OCv9xZDOYxc-elrStz7dbAd7CFaZHlJTbnVk0nEpUZ48fkIQlvzw8Q7KseN7LjnIlldoNGNaaB15e01bi8ONOOxvCpd-pOnMpDeyLUPYFumNNcHRCeR4iw_geqtYYxBPWohEopw0-ZV5zI7bdsqKm4wjilKl0qrefFYdEYgPkwLZkRfOfEw==?c=naver.search.pc.plsearch&t=0",
"thumbnail":
"https://searchad-phinf.pstatic.net/MjAyNjA1MjRfNTYg/MDAxNzc5NjMyMTQyOTc2.P6cRnhsZfm7kMmytJx8ZTFjsMsg0XvqTnt61rOstkjkg.6iyU5mJwgBxiciLhCnNP6lKixw-vW-GJZMnkrgvTTqkg.JPEG/3374500-c87eda95-83b5-4be8-a50a-f7c529ba327a.jpg?type=f160_160"
},
{
"title":
"네스프레소 공식스토어",
"description":
"추석 맞이 기간 한정, 지금 공식 스토어 단독 커피 최대 9% 할인+사은품 증정 멤버십 등급별 추가 쿠폰 증정",
"link_list":
[
{
"title":
"오리지널커피",
"link":
"https://ader.naver.com/v1/wKlQKYXNH3itbciR171urQoIEnm3jN-LnhdczEQhk2TLXpwmF3OdoCtq4cp7WoDex3TtDdHRA7rGXiVpozz7kU_R1thMi7cc_yS3ybobxADe2B8uy0FpVq2ph_H95N1xo24vysHSMMyfdCMG1UeX3nUAqgXyC6VM1_VKmex0kTXxNVttOldqEw5FwKyINVC0mWp7hqdGK9UF69NOc3QbUU_69zAbCav3xypHqyJZWhOPVCyjxwaejuH8UbNN8Av-yDkSXmSI4jkkSFQcbuB04fYAuwfU6BamL8DcvFWxBK-R1FQOzCwFR_wzlTpze4FcsVL8_7PHM-eAPyT7E20LAFzO3USFjbC52KUfbjmMfqbT6n_JisQOcVxT9fV5IZHTFUZIFZe7rdgKSRlhbSz4eNetT5CEfc-B3SSr0hwY_8BydYFy95aChctyZM5CHOFxkzbz1LmCY53kSUsPGq-ihT--_XjEXQe7B-5kPbFVGI0=?c=naver.search.pc.plsearch&t=0"
},
{
"title":
"버츄오커피",
"link":
"https://ader.naver.com/v1/wsXGINrUFMuMpYFSuDsLQNu1QYa6aU7z9zj0MomRKtSiHcvFEBOijFzvNr4kukqEvXi_KuPcXZ0Ty3NNiWKWUWSUTItdA6j-B0Ygk36f2KpC3ch-oEy1RHquI_7FWS3Gc_TXsuN8I-kiFR1x5tTL__HtbWXX4cQHgrwhJSK0Sd80EPiWKntO7XrPjoMg43So2yQiSM2Jg4aQllgXP5pgLXDhAEptCPvoxt-mt-Lk-nBPYZERQuG6UG4x8BEW_Oq9L3Ph1FIiM0aF9nLeaq6nB8zDa72XpfP6qnONYH-EW8aTjMrvEbSVklEQqAFIA52POTbJWEf4wWiE3ngZV5n_KBvpzcdNF_gDNJpphUfcRbkfdNwZiziFK-zU7YJT1TsiQCeoQ4cOMBXocPOEUpZjMFu6CKS3cMwn-Eff-DcupvM4NQLof7dPvjZ8menyFiaD_pZRi6GXwGUmhqMt-cGPM-QTURsgskT1Yd6ptvbjyqQ=?c=naver.search.pc.plsearch&t=0"
},
{
"title":
"머신최대혜택",
"link":
"https://ader.naver.com/v1/HIT4blx7fIJP1ODYVEWHy6DsiyWh93hQ-lgt-awg02xaiGjVDRg4uLK_GGieEBwAoEG-0ImSuYLNlYnhGl7dv_mCGhdk0GO5fbft5ynNXhEa8a_8E6xNOx5pN9ILsRPucjsZFqL00XUd5ydzvmSSCZ90hLHo2A7J9v-YELO8Zt3nZSv2W_b8Y3407VlgU2WMnCEeD7AcvU1bWAc_uuG1riUno6kI01C6kXDWJ3fWpxDl3IrOuzzoW8_ZPSfq7yQjDrpxrZd_NQk06Z_DAOALJNehJ_URRUbQ7hP9E8ui5Y3uIb58Ndsp_M5FQlq9xvsgQBzrbfa1DEH8FGNfePfpaRuo51I2KE3jYbOGv-hlr44NYOCtvX24dva5jCN9FubEAhCziMNRqBGtJ7QSvhcufAW7_x4DeuVDRvjfOnrzWWf-zJVDDsVc0DwK0vXiwC0QA5I2wRgz5UbsIWC31HrcAQ==?c=naver.search.pc.plsearch&t=0"
},
{
"title":
"라운지 혜택",
"link":
"https://ader.naver.com/v1/9SHS5feHhOLMLteQoU7crqLQuMQCrN3Vs_g1jxNnBpUCzix5lZA7laV1PURrmudPzz_RbrRtNsUvlFnIvoeTEfV5GHPJOBqkT3G7avFtN4ENGfHGS__HFui3TEQ1fc0fb9Us6dnQCj8mMiokbkOjalwhnyL2Of57rlF9ydstROgZuWpOM91MvwruAJd6onNwFOS2LBMOYp3LfxKK1agUzWHSRAX3lfBtIJSv5Y3XNhDxb5GOhh5JGPlOMuBBXRxJ7J3-wkfA_cVDlbJuuMMS8hFANRqOZnBKyUzZzSExECaLjHw4Ko0FC7vnWUjVkwTLK8bO-BgNgg6S4JXqHM83fvM8c637pdd96qT4r8-UpcHdPHAJraKb6mDkzvQFCR7P5WsHn_9LA8CKfN8pJ_PhGDAmKbNvlPJ8d7QW0dtwX--tRg2tmgaxV4fNWm1Fnyb2I0T6UX0M5CnwHfUGVaWbVw==?c=naver.search.pc.plsearch&t=0"
}
],
"site":
"brand.naver.com/nespressokorea",
"link":
"https://ader.naver.com/v1/_so0rm5AhFdalKpYNvab8mm6TNfr3H4Cff-J6qS6IVESfZTXlZQJ1rYCYb1iseoNSR9z97qhBO9nQy9IfHCHl-Fyv4Nc4XfJieMgxw4Xqdx349_rgOcPUwztSO714Ck4S5XrLyK5QH7nJ6PooDhmZi5IoxUcyIwSnrtQ4GbpRDxAZPeaZDE7eHe5PwL9SArzlMxfgSNHIw93dJxJrP9E-eTq3Pdqvp4HUgqHY-5WX0sGrC5FI0fjUkyt1wJQCOdev4Kj9m_jGD2o2BLdkJ6S-F6JCbuhZuPZtTKqKpbpF3zm28lXS3JLBKEk9TEtVFJGOWf9Nqul6htllP-ltYc-Qm61ui9mlabyPwZE0e9zmZT9aNysI5sdi2XWu1XwpJdB1TiZx-Z-kiuGb9ceuV6Kr1wg1sRvN1Ew2S-t-vjJiiunZheiiW781RZa_Hcgqzb-?c=naver.search.pc.plsearch&t=0",
"thumbnail":
"https://searchad-phinf.pstatic.net/MjAyNjA5MDdfMTQ0/MDAxNzg4NzQ3NjIwNzEx.gs5aY26z5WXU65E8ZZhRkjc-7Wc37quklcHvV2ATRRkg.Rr9XrFBZHlpsV5hG0iRPpCWnDJ4Vz-HDezClt-DF6z0g.PNG/380937-ef194626-bd6f-4c5e-9c7f-99759d68f0ee.png?type=f160_160"
},
{
"title":
"맛이 일품인 싱글오리진",
"sub_title":
"차원이 다른 향과 맛 입안 가득 퍼지는 부드러움",
"description":
"고객님의 커피콩을 정성스럽게 볶는 곳",
"link_list":
[
{
"title":
"드립백",
"link":
"https://ader.naver.com/v1/XLw7b198uDbpouUqFkqKjqH5d-QbR8kft7qtP9XeG4oVSMxCQlCEpNBBrl5eOwbNPYzStVxJV3PIEqlNRH4ZhLObaLxpdRgIuGri6j7aqYrwmL1a7FhzakNdlMreiJAUa1yo_VYPpryUwlhFCY3T1GMmLsoAGtmsantAViUUeFLwKsxNP5rwYTSrMJ7OkhGTv4rT7QCs4-7hXfsrbU7LMiyp-ZjHRnzJfODH5-EQc2nRKX2Ys1BCRO68ViefrTJa7usHgGCSswarWgaOxLyo-eP1sblo7cOa_vy7rEkyIGoj_dxcA_bMkMSDL8h24hdJHkkW6tft3VB9dJKCH7SGvWLLlpjvUlRLcSMgxJw2ljc=?c=naver.search.pc.plsearch&t=0"
},
{
"title":
"200g",
"link":
"https://ader.naver.com/v1/P5Cu0nP7w7ijseCBL1vLav1K6dg9rHWhfPXmFpcDlCQiqxCoyRfQ5ybphT7q2Dm4_-FKCseyBz5pR0VG9ASYRechu1ZOYwsU61ZVrrmuwEL0E-YpV8acK6mE3w0oiEFSm134G_7Y7lxWSXVI2xcEndWZxVeOZkNqmLJavvAzy_2cQM8GSwEdqjA46tMA8HHUJHpyP-UeJx24VOiSO-qA9mZ5ZdtjCVaPx42bhuSWybmOFbAJBRjuQT8DZL0ibwZvURKafAqJ7PwLl3t72Ze0cJhx0Wsa5TuWIPD4ATQN50eHxg82dGCAYWuMDjuUqg1rxx6Lyi-QK94kuhVKvbFQ0i1nr18H2db-EVtRSLoZhWo=?c=naver.search.pc.plsearch&t=0"
},
{
"title":
"500g",
"link":
"https://ader.naver.com/v1/9U4Ab5QRarFvzQ6UVb5rVmfpwBwVTtrrpYq4SK0y7TgXdVUDlF3uECrJRlkxdDljPNxjQCfQk_64ElT0rvyXBb-mzq6-S3kguG3J3-ywAIQ-FdhoBPVVabdedEmI2i02U58PwEpRbxv89nIjYi1qwt2ykJk6j6iW6SeBNbDxihO265d5Gz35AQKhPiQZUhpMZ4TSw2NK_iUONPLjYaYZ1B0q3A_YT3VEVdXLxF4PpRv6AJBNoWcBba-qagaTZTHrqiPhYqN2Et7yT471TODR7YNRwVVaIGHyvEdzwK6dR91WGSYc1RXG5LP49VI__df8ysCoVgRDZhcWo0U9nWUFbLhfKy5CoBnQ482zyRstt_o=?c=naver.search.pc.plsearch&t=0"
},
{
"title":
"1kg",
"link":
"https://ader.naver.com/v1/ToukP7N_4K-4L8sC6Ng_xWveXKbebZ8zoIkVIjciO9FsEHw00Bz4EBxRxlC6fcx1hRhJ7YTw36u-I--w5djH0Pn7jWOEjTSClp8kTK0lZjto7uQIxwDJkZvxhkBgq_iz9gAFEAWaOU2el9_MlHDHCOjiGjjpmekG3yFw71q7kg81l7IFTE7M0TUZRcsxxgrMMpJ45Pk264QNJc2TrwEV4_1CJ6c7vnQ23uPETu--e57Ytyo_XLL_4YwOkTM92NQBfm96C_gDs0vcl5PlyGf3st4TgNIBOxgM_V9LOhdSBSJKGU4-Yc17o_Ki0qFVhG-FKoNbDq5xKoaOf2QpuJuXsncwBB1jIObzO0U72dN8xSk=?c=naver.search.pc.plsearch&t=0"
}
],
"site":
"smartstore.naver.com/rombean",
"link":
"https://ader.naver.com/v1/gTD5678vSJlDKlrNz0KwPsFAwSQ18OacM6o_7KIeqpWVx7ZPK0em2r_Hk6ja6CqtO9WkwdVyBsjoB8ott6idcQCYfs6Apskh1V_PPUC2iyCaXy8lx1C3cwrvmjk1Z1sclscnLwRK9syIutED_u5tyT80wtqarCfWx2TswRepTEKSe9ezodrTpgx5HkuM4dZYwleVN7JjHf25b6bXaJ_LeoyS6a6gEuZTzRgt_k-bI9klri2_ued79HuGCLRT6j_Um_7_0YAiR6DBq9lYNmq8PunOUjnL2v8GsswErB359cw=?c=naver.search.pc.plsearch&t=0",
"thumbnail":
"https://searchad-phinf.pstatic.net/MjAyNjA0MTZfMTc4/MDAxNzc2MzA2ODI5MTgw.NsTkGjLiBLO4g-d2yu7hJB-ot-K8fyi_gq3hxtGDvNIg.6Z5kmx0J2ZnzvHOKipsdMn2s7mmLjHQa9adBy32GNLgg.JPEG/4183133-a3b0e22d-ca27-42c0-9945-41e9ca6981fe.jpg?type=f160_160"
},
{
"title":
"고급스러운 풍미 가득 느껴봐",
"description":
"사무실 원두 교체 계획 중? 맛좋은 틈커피 추천해요",
"site":
"smartstore.naver.com/teumcoffee",
"link":
"https://ader.naver.com/v1/DIYZEJwItxU3yWmpxYZiMDuhgmI2OM9Lq1afA-_PEEsly0erT_z0EOsq6Nn40CMRyr1cRfNJQl59lkpho5lom0dxn5EOoKpbY_F7WMVBlFBoJWeNdcEVBlf33y4Ujq40UhcwSJ_3r9-DwxeZ-eP4EUOggi7cdWh0FSDXuijuaocmCJztSNBtD8eAUsAlHVTVh1-kFjiFvDufg32Z03EDEpuglBq-Q0oQzYKW8xPVymbTlYH6wY_bdrkiDNYsq9TE0kVsfxbBbIvr4psBL9L_jm5TL41p0T05jgc55QFrpLjS-ITfHNOTVKLAVFM6sX61r3_Qgz1rzflKqLJiQENPdJfqQH_8GzxaKir6O0tk6scj2r2CfNLzXrELkosy17LHaD0VKhUdEluEh59yK9cUCTEBuzVpIW5uCI26cXrWX-T0IdvwuKqbnqbjFmQQlHbeHJLrlPtWz_qla76YblFYyQ==?c=naver.search.pc.plsearch&t=0",
"thumbnail":
"https://searchad-phinf.pstatic.net/MjAyNjA0MjVfMjMg/MDAxNzc3MTIyODkyMzAx.a9VuAS_wC99uaYMy2ll8u-6X72OcRn8j4-Cmn5MXuxog.1imCPPci9weZayARJ8MNd-8BCn4gpXvQRnsDf0WjZXkg.JPEG/1176258-22178c3d-b786-4391-ac97-24df1c50703f.jpg?type=f160_160"
},
{
"title":
"맛있는 커피원두 찾으시나요?",
"sub_title":
"소이로커피공장 매일 오전 신선한 원두를 당일로스팅",
"description":
"당일로스팅 원두가 아니면 절대 배송하지 않습니다! 재주문률이 높은 단 한가지 이유, 탄맛 없는 프리미엄 로스팅!",
"site":
"smartstore.naver.com/soirocoffee",
"link":
"https://ader.naver.com/v1/MfiCryMkF-JtZEhQNPAB4v9Q7DXfOuqG4D2I7HZdjJMPMz2AMeeIZlNtZ9tFo7gQ_KVSqGsq-E4ZOALqVwjiMf6qCeiYm0U5LNgFjzpRUiD3gMdrIkK4E9Yq-3wXEQ7jqroh8AbatPepZ2NYg576rs7hc3hRDQp4qGNZRhY0LyWLLcUqkFPaJ34kyQSHqs0Zb9U7h2Qd55D2DuFiuqNRRQ5wFwkEsjHs3JdXJnOsuD0635x2XjJ-m0uwFFdU5NsyYncUw83v7z9lUzzT520eMv2BxoDT7yllt1ACpoYk804YI6PuErPbZ_ii2kvHq0N_qVh4pBuXUlzKvmninm-Uonu2vDLnQHgs2IDyFFB8NHGl3VwGYUcNvwv6a-gMi2VGhB6FlIJmKkStMuvzyyWQPyhfvtSHFFEw8d_zmsgmxvjtTSCkUZGgZphJfGe62LXE?c=naver.search.pc.plsearch&t=0",
"thumbnail":
"https://searchad-phinf.pstatic.net/MjAyNjAxMDZfMjI1/MDAxNzY3Njk5MTg0NTkw.5-F--O3mB3GPv_gNFKedmS8UlZ8aa-FGpDfPXXTtyuog.zOkBklAhEBIamIncGBXZAWmUKE-WCRVt0JFDgq91BEUg.PNG/4143027-45804685-d319-4ff9-b106-bd025f3606c7.png?type=f160_160"
},
{
"title":
"쟈뎅 공식 스토어",
"description":
"아워티, 말차라떼, 청보리차 등 쟈뎅의 인기 상품을 만나보세요! 특별가! 로켓배송!",
"link_list":
[
{
"title":
"대용량커피",
"link":
"https://ader.naver.com/v1/r47nweLxIOCMtPRvoS-HvDLL3NQ--eSuOZfcCqEPetAB2cxcAvNSFF7dz9BgZ3SM_06Os6vHiFJFfkBxkNywsklJXcNq6d19McxzJQNVVD23VjcuV_36ZQMbcpZgxW-ECZcQxyf3MvB0cPyPeGKCx00rdlApvbTJaftLTDkKCuREy_nL4F-t-r05h-qPnmmPgAjuv2gvWbownyLci0nTowi_bfdT_BlzIWsiumS2wti-7iIQjCmwTSMfDfvew4kE3hDeqyc3mmdJqXOjMWevpODTHqmljKAiI3VykY39Xaw670J1cz8wNQ9jNhdPQHW8MWSzPseuaj5nBKbT5gPf6iFvoW5mqkoMjjy241TproR726RSKaJpXNsuYqt2mNp7?c=naver.search.pc.plsearch&t=0"
},
{
"title":
"커피",
"link":
"https://ader.naver.com/v1/6A0xLFtX45Nag_LgGSXzZIFEugyE_d2MQM7pIDVwP-TOD-lszysxpDnmUbmgqD0HNkMwQwej3ddZ533dzzBMTAO9cfZoyBIZJiDe2lpbRZvGkd6ofYSZu_ou1I2FU5zO0YuGcrJywuP9DBYGjjUzX9nuJ-Id-hGIep5J9r12uYbOvQQH5ek9VuwCzJeMZzIN-jOzlBTYL6sw4zB_QEHPHQNBS-y6UNgMK9MXWtu6wFBkJVpnT-PhFgiqV7outzbptayvlSpzkrZ_gO4Z7qMq8MYCe9Pr8zcQlfULjFQblbLFzz8BKv6-K4AkeKYlPnC2At7dd46i1qo1xtFiBeNxbw==?c=naver.search.pc.plsearch&t=0"
},
{
"title":
"브랜드몰",
"link":
"https://ader.naver.com/v1/6A0xLFtX45Nag_LgGSXzZHsIprroT7zLcDWSlpaSP-kpIrcA04L_byqKFdHp8qj30mfH57sT1YN2gdQZWy0ajPKaav-E4uU15zId2pbUz-VQYanQWaczWlWejW3VPPjxxQQ4EYNDnqGToJ4Vd0h0O0P5nt5k2xOQDGVxWhRnn1uK2Ru446sjjq8Llt0siA9nO7g2KwITDu16b9Sk2MmYqajZjfIuZmyAWsIeu1sk7HI_2hukFgCgOL84Ik9T4oYNnsVS1IhZapKX2pf6LZkGaOpG0HmLGuLbhBUvJnEVdUKLHFcDYKF3BoSktr6so7y3?c=naver.search.pc.plsearch&t=0"
}
],
"site":
"brand.naver.com/jardin",
"link":
"https://ader.naver.com/v1/3c4axWnQAH-JCVoaNyqIhaR-YvmV2fmMz3LVy8krouVVaafhNUem3hcnWgI1GAoZAB6nMPXCLM7rdg0gIXdLdsxwoHnZUgJIZRI0mOFLb2en9-qCe5OxEk_pQEGsgENEQEAdopcAxqwHZqmNcGF6FcVOSlr1wkBO1GL7dG1UXRSZGKuZSE624z8Iu1KFS1kIBVUhifmW2xc205Y8COmK1KPgiLN_y-RIw1EO3QO4djxL0v6hsl2wVCh5WeN27TdgtGJNsa-ZQHU7gP7lz4LuTxlzBoXeYjh8Sdvxf_1Rr80=?c=naver.search.pc.plsearch&t=0"
},
{
"title":
"감성을 더하다! 블러드커피",
"sub_title":
"당신에게 딱맞는 원두솔루션",
"description":
"갓볶은 원두커피 / 유명 브랜드별 원두 / 홈카페 원두 / 원두선택 솔루션",
"site":
"bloodcoffee.kr",
"link":
"https://ader.naver.com/v1/MfiCryMkF-JtZEhQNPAB4p8jD3938IOFnbCkklISzvP_amvrqvH25JS8jV9cIA_KPdjHugVfPp4DCE1uZQCmRC8G3byziqgcElgD1KCFr2IavWJdkPK1Da_sA59yAI3tN-zXbMNoeofbStIAmf5422gbrsG8bx4cuG9_h-_65ubtmB34wT0BF_2xOnbXka5y_9D2o2oWOMp-JkViYPq9pr1OPYB9WQtUbgUyc2XbY_LNdaS04Z0yxIScOwE-GeUZC7QlU9Zx6yKHWHFIrLsjvtE6OTvOqXlph2E6Yov6hwoelewWnFP1Y_drzu0h-45N_lQJpENexWWPnmAqdtz7Y2-LvFGbuXEv-KruIsUCnjSO96L_8Y1JXF0uQcftxiIHZf-Avj9iHzpJqR2a0T1sukSTrdrmq1tl1ZDDSM2NUb8=?c=naver.search.pc.plsearch&t=0",
"thumbnail":
"https://searchad-phinf.pstatic.net/MjAxOTAxMDNfMTQg/MDAxNTQ2NDc3MzA5MTA3.VUppwN3PHWeYwENGtkbZLU0pv6VrgEY1bvBIH82nLKsg.XpFngYw1d5762uWreaN7KTwRMT_Hyhs0A54O9LWdc3sg.JPEG/1469835-ec63b11e-7895-41df-98cb-70e11e7115c5.jpg?type=f160_160"
},
{
"title":
"죠커피에서 대용량 원두기획전",
"sub_title":
"고품질 커피, 합리적인 가격 대용량 원두 3kg 파격특가",
"description":
"한번도 안 마셔본 사람은 있어도 한번만 마셔본 사람은 없다는 그 커피 카페 사장님들도 믿고 맡기는 직화로스팅 맛집, 죠커피",
"site":
"smartstore.naver.com/joecoffee",
"link":
"https://ader.naver.com/v1/jHqqzEbwSZunOuHBFRFpX136cpdYIlO--Az7ukjWXT6FB2W-d7rbP76MrP1PQFDNmx7Wtk4SAzkETx5vFPXb5G-D_F7BPl8GYmOOOpN9uGcfvFBsKwtSzKr7FynpL58VQVomlslIqHelN-lZsm2evoL7ySI4LV3RIP0mtzArM-lMchCnOcVpptJd35eqXizsKOCoR2Z56VHzFOlfPl0mbxAVEfICoS5xOKn3fBXNzHoYW7becbMrC3nBUz0c4MC_iW-yehDV3vNnROwf-67dz7iMHqXwC-EBRQ12gj5Fy8qi5bwHwycdWfaW2kW3Nugi?c=naver.search.pc.plsearch&t=0"
},
{
"title":
"초대형 정원카페",
"sub_title":
"부산 낙동강뷰 정원카페",
"description":
"부산 낙동강뷰가 보이는 초대형 정원카페입니다",
"site":
"instagram.com/viaggio_in_busan/",
"link":
"https://ader.naver.com/v1/stsFaDJH-uNJ9OHDpwkW6xaSa2Cxa5qEH_VWkyMCpQtJftgPNSrMwlDIY4TiAdjp7O8LLi3lkDa9JFgS9OqPR8Jo8LX3d7qX7YMg86VsYyJvQHwbA5xws3d3FoEhyFF46Abj-GBvvp8ln-r2HrUVnBy9_t283cMujHkVz_TVaEX6AqZEx5jQUZ6cIIcn3o1OqR1CdpaVo6VTc4NUbkEFlqNrHonWtH0pQwQOYSY27jirmhzzVRrhJ7LmOiIQ0rK6RLHVpDWPLhQxu7R6rcR1p2i2QzupAtsCxdfGi7K9_KnidUBOtwX3-duZ_zQnZJgJ?c=naver.search.pc.plsearch&t=0"
},
{
"title":
"에티오피아 예가체프원두커피",
"sub_title":
"갓볶아신선한에티오피아원두커피",
"description":
"19년전통 매일신선한 생두를 큐그레이더와 국제조향사가 선별 로스팅하여 발송합니다",
"site":
"cafebogner.co.kr",
"link":
"https://ader.naver.com/v1/oLCu_k4_B7Aq-4MG-XW-YT3Z2F2sqgrzm535gPGQZSqxlS0HpIXW7e2DtW7SogIerVKjMnTO2WNWzeFMpOdW3k5J7PJ_fAUI32I1izS4ukXvwoRpOn-nVR2sFV9Yjrqs2xefI68cCBEgkL9nrrH6nGRQQTWvXhe5pROR9PZhyaHNEDyOjgxTFocay-62m-76Jmd0xVMa0hHZo360ZcwJNoSe5HnBih8EcGwR_g0V7MiZjO8nJwmS6uhhRUSzjqH5dG6At1fAoBS-OQ6dqdxIz3rDcllgAGeZswT7yP4dlI5SbRgHi3hk6DqFELt6HIjBNijxtI0PeYzpvlZMV4kA4Ohjk7lc9y4AoSbSswoqtIWNV_hE2eytxwiY3yCZDGdLYFUNq9luUltD-KI7i7qUcUjV53Z9ohtzTlNT7KfFK9qOygzpqOQ4tUZ8eCtkOPtyV-mqgd3kvGJYFEmyRMECn67RQv4pANtttDNAfu-FH2pmyVHM5gVic7iU7aI_D-efUYzShTwrF6He7jIzpVzdZ3iYQO3dE1B9dzwKjPkcBpU=?c=naver.search.pc.plsearch&t=0"
}
],
"dictionary_result":
{
"title":
"coffee새 창 열림",
"link":
"https://en.dict.naver.com/#/entry/enko/cd608510128445c8aa7da62f6f168345",
"pronunciations":
[
{
"text":
"미국식 [│kɔːfi; │kɑːfi]"
},
{
"text":
"영국식 [│kɒfi]"
}
],
"definitions":
[
{
"position":
1,
"description":
"커피(콩이나 가루)"
},
{
"position":
2,
"description":
"커피(음료)"
},
{
"position":
3,
"description":
"커피 한 잔"
}
],
"other_meanings":
{
"title":
"영어사전 다른 뜻 1새 창 열림",
"link":
"https://en.dict.naver.com/#/search?range=word&query=coffee"
}
},
"place_results":
[
{
"position":
1,
"name":
"부스틴 광화문점",
"type":
"카페",
"link":
"https://map.naver.com/p/search/coffee/place/1652129756?placePath=%2Fphoto%3Fbk_query%3Dcoffee%26entry%3Dpll%26from%3Dnx%26fromNxList%3Dtrue&placeSearchOption=bk_query%3Dcoffee%26entry%3Dpll%26fromNxList%3Dtrue%26originalQuery%3DCoffee%26x%3D%26y%3D&searchType=place"
},
{
"position":
2,
"name":
"스타벅스 한국프레스센터점",
"type":
"카페",
"link":
"https://map.naver.com/p/search/coffee/place/37749845?placePath=%2Fphoto%3Fbk_query%3Dcoffee%26entry%3Dpll%26from%3Dnx%26fromNxList%3Dtrue&placeSearchOption=bk_query%3Dcoffee%26entry%3Dpll%26fromNxList%3Dtrue%26originalQuery%3DCoffee%26x%3D%26y%3D&searchType=place"
},
{
"position":
3,
"name":
"카페다락",
"type":
"카페",
"link":
"https://map.naver.com/p/search/coffee/place/479911735?placePath=%2Fphoto%3Fbk_query%3Dcoffee%26entry%3Dpll%26from%3Dnx%26fromNxList%3Dtrue&placeSearchOption=bk_query%3Dcoffee%26entry%3Dpll%26fromNxList%3Dtrue%26originalQuery%3DCoffee%26x%3D%26y%3D&searchType=place"
},
{
"position":
4,
"name":
"카페이마",
"type":
"카페",
"link":
"https://map.naver.com/p/search/coffee/place/11678597?placePath=%2Fphoto%3Fbk_query%3Dcoffee%26entry%3Dpll%26from%3Dnx%26fromNxList%3Dtrue&placeSearchOption=bk_query%3Dcoffee%26entry%3Dpll%26fromNxList%3Dtrue%26originalQuery%3DCoffee%26x%3D%26y%3D&searchType=place"
},
{
"position":
5,
"name":
"폴 바셋 코리아나호텔점",
"type":
"카페",
"link":
"https://map.naver.com/p/search/coffee/place/33879733?placePath=%2Fphoto%3Fbk_query%3Dcoffee%26entry%3Dpll%26from%3Dnx%26fromNxList%3Dtrue&placeSearchOption=bk_query%3Dcoffee%26entry%3Dpll%26fromNxList%3Dtrue%26originalQuery%3DCoffee%26x%3D%26y%3D&searchType=place"
},
{
"position":
6,
"name":
"알레그리아 광화문 케이스퀘어시티점",
"type":
"카페",
"link":
"https://map.naver.com/p/search/coffee/place/1052955898?placePath=%2Fphoto%3Fbk_query%3Dcoffee%26entry%3Dpll%26from%3Dnx%26fromNxList%3Dtrue&placeSearchOption=bk_query%3Dcoffee%26entry%3Dpll%26fromNxList%3Dtrue%26originalQuery%3DCoffee%26x%3D%26y%3D&searchType=place"
}
],
"news_results":
[
{
"position":
1,
"title":
"The Born Korea to launch coffee brand in Taiwan next year",
"link":
"https://en.yna.co.kr/view/AEN20260908002900320?input=2106m",
"thumbnail":
"https://search.pstatic.net/common/?src=https%3A%2F%2Fimgnews.pstatic.net%2Fimage%2Forigin%2F001%2F2026%2F09%2F08%2F16296469.jpg&type=fface200_200&expire=2&refresh=true",
"news_info":
{
"name":
"연합뉴스새 창 열림",
"icon":
"https://search.pstatic.net/common/?src=https%3A%2F%2Fmimgnews.pstatic.net%2Fimage%2Fupload%2Foffice_logo%2F001%2F2025%2F03%2F07%2Flogo_001_100_20250307145612.png&type=f54_54&expire=24&refresh=true",
"date":
"3일 전"
},
"snippet":
"The Born Korea-Taiwan The Born Korea to launch coffee brand in Taiwan next year SEOUL, Sept. 8 (Yonhap) -- South Korean food franchise operator The Born Korea Co. said Tuesday it will enter Taiwan with its coffee brand, Paik's DABANG Coffee, in the first half of next year as... 새 창 열림",
"related_news":
[
{
"position":
1,
"title":
"Paik’s Dabang accelerates global push with Taiwan franchise deal새 창 열림",
"link":
"https://www.koreatimes.co.kr/path/A2026090813060003482",
"news_info":
{
"name":
"코리아타임스",
"date":
"3일 전"
}
}
]
},
{
"position":
2,
"title":
"게임피아 'Coffee Talk' 개발진의 신작 'Afterlove EP' 패키지 제품 출시",
"link":
"https://gamefocus.co.kr/detail.php?number=178937",
"thumbnail":
"https://search.pstatic.net/common/?src=https%3A%2F%2Fimgnews.pstatic.net%2Fimage%2Forigin%2F5351%2F2026%2F09%2F10%2F138893.jpg&type=fface200_200&expire=2&refresh=true",
"news_info":
{
"name":
"게임포커스새 창 열림",
"icon":
"https://search.pstatic.net/common/?src=https%3A%2F%2Fmimgnews.pstatic.net%2Fimage%2Fupload%2Foffice_logo%2F5351%2F2024%2F05%2F31%2Flogo_5351_18_20240531141846.png&type=f54_54&expire=24&refresh=true",
"date":
"15시간 전"
},
"snippet":
"『Afterlove EP』는 명작 인디 게임 『Coffee Talk』와 『What Comes After』 제작진이 선보이는 신작 어드벤처 게임이다. 인도네시아의 수도 자카르타를 배경으로 펼쳐지며, 비주얼 노벨, 스토리가 중심이 되는 어드벤처, 그리고 리듬 게임의 요소가 독창적으로 결합되어 새로운 게임 플레이 경험을... 새 창 열림"
},
{
"position":
3,
"title":
"‘커피를 마시는 이유’ 탐구한다…월드커피포럼, 15년 만에 새롭게 도...",
"link":
"https://www.megaeconomy.co.kr/news/newsview.php?ncode=1065591160193121",
"thumbnail":
"https://search.pstatic.net/common/?src=https%3A%2F%2Fimgnews.pstatic.net%2Fimage%2Forigin%2F5770%2F2026%2F09%2F10%2F93669.jpg&type=fface200_200&expire=2&refresh=true",
"news_info":
{
"name":
"메가경제새 창 열림",
"icon":
"https://search.pstatic.net/common/?src=https%3A%2F%2Fmimgnews.pstatic.net%2Fimage%2Fupload%2Foffice_logo%2F5770%2F2024%2F05%2F30%2Flogo_5770_18_20240530183631.png&type=f54_54&expire=24&refresh=true",
"date":
"16시간 전"
},
"snippet":
"‘제15회 월드커피포럼 2026(The 15th World Coffee Forum 2026·월드커피포럼)’은 오는 11월 11일부터 14일까지 나흘간 서울 삼성동 코엑스에서 개최된다.... ‘커피 퓨처스 챌린지(Coffee Futures Challenge)’를 통해 커피산업의 미래를 이끌 청년들이 혁신적인 아이디어와 제안을 공유하고 산업의 새로운 가능성을... 새 창 열림",
"related_news":
[
{
"position":
1,
"title":
"제15회 월드커피포럼 2026, 11월 삼성 코엑스서 개최새 창 열림",
"link":
"https://sports.hankooki.com/news/articleView.html?idxno=6939486",
"news_info":
{
"name":
"스포츠한국",
"date":
"12시간 전"
}
},
{
"position":
2,
"title":
"[리얼푸드] 커피 지식의 장이 열린다…월드커피포럼 2026, 11월 코엑스 개...새 창 열림",
"link":
"https://www.realfoods.co.kr/article/10868789?ref=naver",
"news_info":
{
"name":
"리얼푸드",
"date":
"20시간 전"
}
}
]
},
{
"position":
4,
"title":
"김윤아, 단독 콘서트 무대서 빛난 'Coffee and Cigarette' 라이브",
"link":
"https://www.topstarnews.net/news/articleView.html?idxno=16186913",
"thumbnail":
"https://search.pstatic.net/common/?src=https%3A%2F%2Fimgnews.pstatic.net%2Fimage%2Forigin%2F5353%2F2026%2F09%2F08%2F1305049.jpg&type=fface200_200&expire=2&refresh=true",
"news_info":
{
"name":
"톱스타뉴스새 창 열림",
"icon":
"https://search.pstatic.net/common/?src=https%3A%2F%2Fmimgnews.pstatic.net%2Fimage%2Fupload%2Foffice_logo%2F5353%2F2024%2F05%2F31%2Flogo_5353_18_20240531141929.png&type=f54_54&expire=24&refresh=true",
"date":
"3일 전"
},
"snippet":
"한편, 김윤아는 9월 단독 콘서트 'Coffee and Cigarette'을 통해 팬들과 만났다. 이번 공연은 9월 5일과 6일, 12일과 13일 서울 성신여자대학교 운정그린캠퍼스 대강당에서 총 4회에 걸쳐 진행됐다. 지난해 4월 단독 콘서트 이후 약 1년 5개월 만에 선보이는 공연으로, 재즈곡과 가을 분위기에 어울리는 곡들을... 새 창 열림",
"related_news":
[
{
"position":
1,
"title":
"김윤아, 'Coffee and Cigarette' 무대서 붉은 실루엣…살롱 콘서트 열기 ...새 창 열림",
"link":
"https://www.topstarnews.net/news/articleView.html?idxno=16186906",
"news_info":
{
"name":
"톱스타뉴스",
"date":
"3일 전"
}
}
]
}
],
"inline_images_results":
[
{
"image_id":
"image_sas:web_7934048e603a253673ed3baf06f6f1ba",
"title":
"Coffee Beans :: Behance Coffee Beans",
"source":
"behance.net",
"where":
"웹",
"date":
"2022.10.07.",
"thumbnail":
"https://search.pstatic.net/sunny/?src=https://mir-s3-cdn-cf.behance.net/project_modules/1400/59b640141340367.6251e75167d73.png&type=a340",
"original":
"https://mir-s3-cdn-cf.behance.net/project_modules/1400/59b640141340367.6251e75167d73.png",
"link":
"https://www.behance.net/gallery/141340367/Coffee-Beans",
"color":
"#E1B785",
"tld":
"behance.net",
"article_id":
"webhttps://www.behance.net/gallery/141340367/Coffee-Beans",
"width":
1400,
"height":
1800,
"thumbnail_width":
340,
"thumbnail_height":
437,
"rank":
1,
"is_gif":
false
},
{
"image_id":
"image_sas:web_c49f4d5701e727e71b6b8cbde9436d10",
"title":
"Coffee | Stock image | Colourbox",
"source":
"colourbox.com",
"where":
"웹",
"date":
"2016.12.09.",
"thumbnail":
"https://search.pstatic.net/sunny/?src=https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX2090943.jpg&type=a340",
"original":
"https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX2090943.jpg",
"link":
"https://www.colourbox.com/image/coffee-image-2090943",
"color":
"#DB9D8F",
"tld":
"colourbox.com",
"article_id":
"webhttps://www.colourbox.com/image/coffee-image-2090943",
"width":
799,
"height":
800,
"thumbnail_width":
340,
"thumbnail_height":
340,
"rank":
2,
"is_gif":
false
},
{
"image_id":
"image_sas:web_2ed30efc1c9f55c7c001db2483c8dea5",
"title":
"Coffee Beans Roasted - Free photo on Pixabay",
"source":
"pixabay.com",
"where":
"웹",
"date":
"2022.09.04.",
"thumbnail":
"https://search.pstatic.net/sunny/?src=https://cdn.pixabay.com/photo/2022/07/09/19/33/coffee-beans-7311628_1280.jpg&type=a340",
"original":
"https://cdn.pixabay.com/photo/2022/07/09/19/33/coffee-beans-7311628_1280.jpg",
"link":
"https://pixabay.com/photos/coffee-beans-roasted-coffee-beans-7311628/",
"color":
"#BDB8CE",
"tld":
"pixabay.com",
"article_id":
"webhttps://pixabay.com/photos/coffee-beans-roasted-coffee-beans-7311628/",
"width":
1280,
"height":
853,
"thumbnail_width":
340,
"thumbnail_height":
227,
"rank":
3,
"is_gif":
false
},
{
"image_id":
"image_sas:web_2fdd7f7e9ba67f13184c79ebab0d5f06",
"title":
"Coffee cup and coffee beans on old wooden table 이미지... 게티이미지뱅크 Coffee cup and coffee beans on old wooden table",
"source":
"gettyimagesbank.com",
"where":
"웹",
"date":
"2016.10.11.",
"thumbnail":
"https://search.pstatic.net/sunny/?src=http://imagescdn.gettyimagesbank.com/500/15/446/161/0/477428810.jpg&type=a340",
"original":
"http://imagescdn.gettyimagesbank.com/500/15/446/161/0/477428810.jpg",
"link":
"http://www.gettyimagesbank.com/i/477428810",
"color":
"#C2C7CC",
"tld":
"gettyimagesbank.com",
"article_id":
"webhttp://www.gettyimagesbank.com/i/477428810",
"width":
509,
"height":
339,
"thumbnail_width":
340,
"thumbnail_height":
226,
"rank":
4,
"is_gif":
false
},
{
"image_id":
"image_sas:web_78802c3468a6b02b93bc8c57ed970449",
"title":
"Cup of coffee sitting on piled coffe beans 이미지 (177039110) - 게티이미지뱅크 Cup of coffee sitting on piled coffe beans",
"source":
"gettyimagesbank.com",
"where":
"웹",
"date":
"2016.09.29.",
"thumbnail":
"https://search.pstatic.net/sunny/?src=http://imagescdn.gettyimagesbank.com/500/12/299/241/0/177039110.jpg&type=a340",
"original":
"http://imagescdn.gettyimagesbank.com/500/12/299/241/0/177039110.jpg",
"link":
"http://www.gettyimagesbank.com/i/177039110",
"color":
"#B5B68F",
"tld":
"gettyimagesbank.com",
"article_id":
"webhttp://www.gettyimagesbank.com/i/177039110",
"width":
509,
"height":
337,
"thumbnail_width":
340,
"thumbnail_height":
225,
"rank":
5,
"is_gif":
false
},
{
"image_id":
"image_sas:web_a05237b18de558375eb73f7111b45895",
"title":
"Cup of coffee on grunge table 이미지 (450586405) - 게티이미지뱅크 Cup of coffee on grunge table",
"source":
"gettyimagesbank.com",
"where":
"웹",
"date":
"2016.10.06.",
"thumbnail":
"https://search.pstatic.net/sunny/?src=http://imagescdn.gettyimagesbank.com/500/13/916/144/0/450586405.jpg&type=a340",
"original":
"http://imagescdn.gettyimagesbank.com/500/13/916/144/0/450586405.jpg",
"link":
"http://www.gettyimagesbank.com/i/450586405",
"color":
"#AAbDD0",
"tld":
"gettyimagesbank.com",
"article_id":
"webhttp://www.gettyimagesbank.com/i/450586405",
"width":
507,
"height":
338,
"thumbnail_width":
340,
"thumbnail_height":
227,
"rank":
6,
"is_gif":
false
},
{
"image_id":
"image_sas:blog_84c6b05189eba90559ee3e47e8f3c7d7",
"title":
"☕️ 커피에 관한 명언 (Coffee Qoutes)",
"source":
"korpott님의블로그",
"where":
"네이버 블로그",
"date":
"2024.09.18.",
"thumbnail":
"https://search.pstatic.net/common/?src=http://blogfiles.naver.net/MjAyNDA5MThfNzcg/MDAxNzI2NjU3Mjc5NDI1.gv4s_zgrO6pEIw-foyMqegRwf_1cmrPh_wV-zGbY-PAg.KRm8HVzKy79ffuJjOslQKQMNO2IMd3NfNxIsrC2lHwUg.JPEG/FB_IMG_1726319979581_resized.jpg&type=a340",
"original":
"http://blogfiles.naver.net/MjAyNDA5MThfNzcg/MDAxNzI2NjU3Mjc5NDI1.gv4s_zgrO6pEIw-foyMqegRwf_1cmrPh_wV-zGbY-PAg.KRm8HVzKy79ffuJjOslQKQMNO2IMd3NfNxIsrC2lHwUg.JPEG/FB_IMG_1726319979581_resized.jpg",
"link":
"https://blog.naver.com/korpott/223587739665",
"color":
"#C2C7CC",
"tld":
"blog.naver.com",
"article_id":
"blog123476969|1|223587739665",
"width":
1072,
"height":
1043,
"thumbnail_width":
340,
"thumbnail_height":
331,
"rank":
7,
"is_gif":
false
},
{
"image_id":
"image_sas:blog_8b291cf53ebf1395236af32d68f9d803",
"title":
"런던카페 Tap Coffee",
"source":
"CafeCurator",
"where":
"네이버 블로그",
"date":
"2018.03.06.",
"profile_image":
"https://search.pstatic.net/common/?src=http://blogpfthumb.phinf.naver.net/20120720_147/cafecurator_1342767550244_r0q8a8_JPG/크기변환_IMG_1805.JPG&type=f80_80",
"thumbnail":
"https://search.pstatic.net/common/?src=http://blogfiles.naver.net/MjAxODAxMThfMjM1/MDAxNTE2MjY3MzM2MDUx.nfYqNuH_smSknPYJaeCiRxzE4c9-2ghjHn3ixkmFxvMg.6uf5FJauIEiQZas6Alo3MrSZRWMuOjpIulQW9KLDzZMg.JPEG.cafecurator/P20180113_130822159_0DCD4E60-00D9-47AB-B11C-BDABD65ACA4F.JPG&type=a340",
"original":
"http://blogfiles.naver.net/MjAxODAxMThfMjM1/MDAxNTE2MjY3MzM2MDUx.nfYqNuH_smSknPYJaeCiRxzE4c9-2ghjHn3ixkmFxvMg.6uf5FJauIEiQZas6Alo3MrSZRWMuOjpIulQW9KLDzZMg.JPEG.cafecurator/P20180113_130822159_0DCD4E60-00D9-47AB-B11C-BDABD65ACA4F.JPG",
"link":
"https://blog.naver.com/cafecurator/221223152966",
"color":
"#C2C7CC",
"tld":
"blog.naver.com",
"article_id":
"blog58898756|9|221223152966",
"width":
4032,
"height":
3024,
"thumbnail_width":
340,
"thumbnail_height":
255,
"rank":
8,
"is_gif":
false
},
{
"image_id":
"image_sas:web_30bb29364b43b3889960ce2197eecff0",
"title":
"White cup on the background of coffee beans | 유토이미지 | 상세페이지 | 베이직샵 | 사진 | 19822232",
"source":
"utoimage.com",
"where":
"웹",
"date":
"2023.06.21.",
"thumbnail":
"https://search.pstatic.net/sunny/?src=https://image.utoimage.com/preview/cp864374/2016/03/201603007009_500.jpg&type=a340",
"original":
"https://image.utoimage.com/preview/cp864374/2016/03/201603007009_500.jpg",
"link":
"https://www.utoimage.com/?m=goods.photo_view&idx=19822232",
"color":
"#E1B785",
"tld":
"utoimage.com",
"article_id":
"webhttps://www.utoimage.com/?m=goods.photo_view&idx=19822232",
"width":
500,
"height":
753,
"thumbnail_width":
340,
"thumbnail_height":
512,
"rank":
9,
"is_gif":
false
},
{
"image_id":
"image_sas:web_f3c4c8629d1444eaa938791749226fa4",
"title":
"morning coffee | Express.co.uk Scientist names the time you should be drinking your morning coffee",
"source":
"express.co.uk",
"where":
"웹",
"date":
"2025.03.17.",
"thumbnail":
"https://search.pstatic.net/sunny/?src=https://cdn.images.express.co.uk/img/dynamic/14/1200x630/6027520.jpg&type=l340_165",
"original":
"https://cdn.images.express.co.uk/img/dynamic/14/1200x630/6027520.jpg",
"link":
"https://www.express.co.uk/life-style/food/2028142/scientist-names-time-you-should-drinking-your-morning-coffee",
"color":
"#DB9D8F",
"tld":
"express.co.uk",
"article_id":
"webhttps://www.express.co.uk/life-style/food/2028142/scientist-names-time-you-should-drinking-your-morning-coffee",
"width":
1200,
"height":
630,
"thumbnail_width":
340,
"thumbnail_height":
165,
"rank":
10,
"is_gif":
false
},
{
"image_id":
"image_sas:web_d45ca189a48a9e8b85b7ef070394f09f",
"title":
"Good morning - coffee | 음료",
"source":
"pinterest.com",
"where":
"웹",
"date":
"2020.03.17.",
"thumbnail":
"https://search.pstatic.net/sunny/?src=https://i.pinimg.com/originals/21/72/0b/21720b2f36b7d440859ed6b3351df97b.jpg&type=a340",
"original":
"https://i.pinimg.com/originals/21/72/0b/21720b2f36b7d440859ed6b3351df97b.jpg",
"link":
"https://www.pinterest.com/pin/746542075705419348/",
"color":
"#AAbDD0",
"tld":
"pinterest.com",
"article_id":
"webhttps://www.pinterest.com/pin/746542075705419348/",
"width":
736,
"height":
1104,
"thumbnail_width":
340,
"thumbnail_height":
510,
"rank":
11,
"is_gif":
false
},
{
"image_id":
"image_sas:web_ea7f47c39fe66d4cebf989e3ade870d5",
"title":
"6 Must-Try Saint Louis Coffee Shops | The Odyssey Online 6 Must-Try Saint Louis Coffee Shops",
"source":
"theodysseyonline.com",
"where":
"웹",
"date":
"2025.05.27.",
"thumbnail":
"https://search.pstatic.net/sunny/?src=https://www.theodysseyonline.com/media-library/image.jpg?id=14579719&width=700&quality=80&type=a340",
"original":
"https://www.theodysseyonline.com/media-library/image.jpg?id=14579719&width=700&quality=80",
"link":
"https://www.theodysseyonline.com/6-saint-louis-coffee-shops",
"color":
"#AAbDD0",
"tld":
"theodysseyonline.com",
"article_id":
"webhttps://www.theodysseyonline.com/6-saint-louis-coffee-shops",
"width":
700,
"height":
700,
"thumbnail_width":
340,
"thumbnail_height":
340,
"rank":
12,
"is_gif":
false
},
{
"image_id":
"image_sas:web_efb69e1771c5f0a72a6ab2b3437fcfd1",
"title":
"Amazing Coffee (Ginger fever) by Tian Jiaying | Burpple Read Tian Jiaying's review of The Hangar",
"source":
"burpple.com",
"where":
"웹",
"date":
"2018.08.21.",
"thumbnail":
"https://search.pstatic.net/sunny/?src=https://burpple-2.imgix.net/foods/2f6940fba7b848b142601662840_original.?w=645&dpr=1&fit=crop&q=80&type=a340",
"original":
"https://burpple-2.imgix.net/foods/2f6940fba7b848b142601662840_original.?w=645&dpr=1&fit=crop&q=80",
"link":
"https://www.burpple.com/f/Wk-GBV9d",
"color":
"#B5B68F",
"tld":
"burpple.com",
"article_id":
"webhttps://www.burpple.com/f/Wk-GBV9d",
"width":
645,
"height":
645,
"thumbnail_width":
340,
"thumbnail_height":
340,
"rank":
13,
"is_gif":
false
},
{
"image_id":
"image_sas:web_0289bd54eb45d551b03c080dcfa0021b",
"title":
"Cup of coffee with roasted beans — Stock Photo © belchonock #150323420 Cup of coffee with roasted beans",
"source":
"depositphotos.com",
"where":
"웹",
"date":
"2020.04.18.",
"thumbnail":
"https://search.pstatic.net/sunny/?src=https://st3.depositphotos.com/1177973/15032/i/950/depositphotos_150323420-stock-photo-cup-of-coffee-with-roasted.jpg&type=a340",
"original":
"https://st3.depositphotos.com/1177973/15032/i/950/depositphotos_150323420-stock-photo-cup-of-coffee-with-roasted.jpg",
"link":
"https://depositphotos.com/150323420/stock-photo-cup-of-coffee-with-roasted.html",
"color":
"#BDB8CE",
"tld":
"depositphotos.com",
"article_id":
"webhttps://depositphotos.com/150323420/stock-photo-cup-of-coffee-with-roasted.html",
"width":
1023,
"height":
682,
"thumbnail_width":
340,
"thumbnail_height":
227,
"rank":
14,
"is_gif":
false
},
{
"image_id":
"image_sas:web_62f804c19ea04d333c6f93a028944a15",
"title":
"Coffee 5k Retina Ultra HD Wallpaper | Background Image... Abyss Coffee 5k Retina Ultra HD Wallpaper | Background Image...",
"source":
"wall.alphacoders.com",
"where":
"웹",
"date":
"2019.03.19.",
"thumbnail":
"https://search.pstatic.net/sunny/?src=https://images7.alphacoders.com/999/thumb-1920-999594.jpg&type=a340",
"original":
"https://images7.alphacoders.com/999/thumb-1920-999594.jpg",
"link":
"https://wall.alphacoders.com/big.php?i=999594",
"color":
"#DB9D8F",
"tld":
"wall.alphacoders.com",
"article_id":
"webhttps://wall.alphacoders.com/big.php?i=999594",
"width":
1920,
"height":
1369,
"thumbnail_width":
340,
"thumbnail_height":
242,
"rank":
15,
"is_gif":
false
},
{
"image_id":
"image_sas:web_3a229fbd961d2c82892af522e7872626",
"title":
"Red cup with hot coffee and roasted coffee beans 이미지... 게티이미지뱅크 Red cup with hot coffee and roasted coffee beans",
"source":
"gettyimagesbank.com",
"where":
"웹",
"date":
"2016.11.01.",
"thumbnail":
"https://search.pstatic.net/sunny/?src=http://imagescdn.gettyimagesbank.com/500/15/199/451/0/501578790.jpg&type=a340",
"original":
"http://imagescdn.gettyimagesbank.com/500/15/199/451/0/501578790.jpg",
"link":
"http://www.gettyimagesbank.com/i/501578790",
"color":
"#C2C7CC",
"tld":
"gettyimagesbank.com",
"article_id":
"webhttp://www.gettyimagesbank.com/i/501578790",
"width":
508,
"height":
339,
"thumbnail_width":
340,
"thumbnail_height":
227,
"rank":
16,
"is_gif":
false
},
{
"image_id":
"image_sas:web_f48f749053cb20c06bff88ecfa880b23",
"title":
"380,033 Latte Coffee Stock Photos - Free & Royalty-Free Stock Photos from Dreamstime",
"source":
"dreamstime.com",
"where":
"웹",
"date":
"2016.07.09.",
"thumbnail":
"https://search.pstatic.net/sunny/?src=https://thumbs.dreamstime.com/b/cup-hot-latte-art-coffee-close-up-96129572.jpg&type=a340",
"original":
"https://thumbs.dreamstime.com/b/cup-hot-latte-art-coffee-close-up-96129572.jpg",
"link":
"https://www.dreamstime.com/photos-images/latte-coffee.html",
"color":
"#DB9D8F",
"tld":
"dreamstime.com",
"article_id":
"webhttps://www.dreamstime.com/photos-images/latte-coffee.html",
"width":
800,
"height":
534,
"thumbnail_width":
340,
"thumbnail_height":
227,
"rank":
17,
"is_gif":
false
},
{
"image_id":
"image_sas:news_a62849431b05d6e5b69ededcb6d77705",
"title":
"Creative Ways to Celebrate National Coffee Day 2024 at Home: Brewing Tips, Tasting Ideas, and More",
"source":
"econotimes.com",
"where":
"포토뉴스",
"date":
"2024.09.27.",
"thumbnail":
"https://search.pstatic.net/common/?src=http://imgnews.naver.net/image/5831/2024/09/27/0000030362_001_20240927065213160.jpeg&type=a340",
"original":
"http://imgnews.naver.net/image/5831/2024/09/27/0000030362_001_20240927065213160.jpeg",
"link":
"https://www.econotimes.com/Creative-Ways-to-Celebrate-National-Coffee-Day-2024-at-Home-Brewing-Tips-Tasting-Ideas-and-More-1688716",
"color":
"#E1B785",
"tld":
"econotimes.com",
"article_id":
"news58310000030362",
"width":
1024,
"height":
614,
"thumbnail_width":
340,
"thumbnail_height":
204,
"rank":
18,
"is_gif":
false
},
{
"image_id":
"image_sas:web_98ab8dc5f184f66131f4904505225404",
"title":
"A White Cup on Coffee Beans from a Knitted Bag with a Burnt Wooden Background. Vertical Stock Image - Image of gourmet, drink...",
"source":
"dreamstime.com",
"where":
"웹",
"date":
"2026.06.08.",
"thumbnail":
"https://search.pstatic.net/sunny/?src=https://thumbs.dreamstime.com/b/white-cup-coffee-beans-knitted-bag-burnt-wooden-background-vertical-toned-close-up-171378641.jpg&type=a340",
"original":
"https://thumbs.dreamstime.com/b/white-cup-coffee-beans-knitted-bag-burnt-wooden-background-vertical-toned-close-up-171378641.jpg",
"link":
"https://www.dreamstime.com/white-cup-coffee-beans-knitted-bag-burnt-wooden-background-vertical-toned-close-up-image171378641",
"color":
"#C2C7CC",
"tld":
"dreamstime.com",
"article_id":
"webhttps://www.dreamstime.com/white-cup-coffee-beans-knitted-bag-burnt-wooden-background-vertical-toned-close-up-image171378641",
"width":
600,
"height":
900,
"thumbnail_width":
340,
"thumbnail_height":
510,
"rank":
19,
"is_gif":
false
},
{
"image_id":
"image_sas:web_f22c1ab9d35335b20b03cd4e181ae8ce",
"title":
"Fresh Roasted Coffee Beans Background Stock Photo - Image: 98048315 Fresh Roasted Coffee Beans Background",
"source":
"dreamstime.com",
"where":
"웹",
"date":
"2017.08.22.",
"thumbnail":
"https://search.pstatic.net/sunny/?src=https://thumbs.dreamstime.com/b/fresh-roasted-coffee-beans-background-photo-image-food-beverage-98048315.jpg&type=a340",
"original":
"https://thumbs.dreamstime.com/b/fresh-roasted-coffee-beans-background-photo-image-food-beverage-98048315.jpg",
"link":
"https://www.dreamstime.com/stock-photo-fresh-roasted-coffee-beans-background-photo-image-food-beverage-image98048315",
"color":
"#AAbDD0",
"tld":
"dreamstime.com",
"article_id":
"webhttps://www.dreamstime.com/stock-photo-fresh-roasted-coffee-beans-background-photo-image-food-beverage-image98048315",
"width":
600,
"height":
900,
"thumbnail_width":
340,
"thumbnail_height":
510,
"rank":
20,
"is_gif":
false
}
],
"web_results":
[
{
"position":
1,
"title":
"커피 - 나무위키",
"source_icon":
"https://search.pstatic.net/sunny?src=https%3A%2F%2Fnamu.wiki%2Ffavicon.svg&type=f30_30_png_expire24",
"source":
"나무위키",
"link":
"https://namu.wiki/w/%EC%BB%A4%ED%94%BC",
"displayed_link":
"namu.wiki",
"snippet":
"Coffee 커피나무 열매의 씨앗(원두)을 볶아 향을 내고, 딱딱한 씨앗의 성분이 물에 잘 우러나오도록 갈은 뒤, 물에 타서 마시는 음료다.",
"thumbnail":
"https://search.pstatic.net/sunny?src=https%3A%2F%2Fi.namu.wiki%2Fi%2FTJ2S7OjGghZz9-weVWcfWMStWAnmfwETnPV_vL1NnmkUBqUiDQvKOJ0XtbLF3Fo7-MF7LKNSCjn35PrdMXklaw.webp&type=fff208_208_ar",
"related_results":
[
{
"position":
1,
"title":
"개요새 창 열림",
"link":
"https://namu.wiki/w/%EC%BB%A4%ED%94%BC#s-1"
},
{
"position":
2,
"title":
"커피 품종새 창 열림",
"link":
"https://namu.wiki/w/%EC%BB%A4%ED%94%BC#s-2"
},
{
"position":
3,
"title":
"역사새 창 열림",
"link":
"https://namu.wiki/w/%EC%BB%A4%ED%94%BC#s-3"
},
{
"position":
4,
"title":
"특징새 창 열림",
"link":
"https://namu.wiki/w/%EC%BB%A4%ED%94%BC#s-4"
},
{
"position":
5,
"title":
"생산지새 창 열림",
"link":
"https://namu.wiki/w/%EC%BB%A4%ED%94%BC#s-5"
},
{
"position":
6,
"title":
"맛있는 원두의 기준새 창 열림",
"link":
"https://namu.wiki/w/%EC%BB%A4%ED%94%BC#s-6"
},
{
"position":
7,
"title":
"싱글 오리진 vs. 블렌딩새 창 열림",
"link":
"https://namu.wiki/w/%EC%BB%A4%ED%94%BC#s-7"
},
{
"position":
8,
"title":
"가공 및 제조새 창 열림",
"link":
"https://namu.wiki/w/%EC%BB%A4%ED%94%BC#s-8"
},
{
"position":
9,
"title":
"향미새 창 열림",
"link":
"https://namu.wiki/w/%EC%BB%A4%ED%94%BC#s-9"
},
{
"position":
10,
"title":
"추출 방법새 창 열림",
"link":
"https://namu.wiki/w/%EC%BB%A4%ED%94%BC#s-10"
}
],
"related_documents":
[
{
"position":
1,
"title":
"커피 & 바닐라 - 나무위키새 창 열림",
"link":
"https://namu.wiki/w/%EC%BB%A4%ED%94%BC%20%26%20%EB%B0%94%EB%8B%90%EB%9D%BC",
"snippet":
"2019년7월 4일부터 2019년9월 5일까지 방영된 MBS 드라마특구 드라마.",
"thumbnail":
"https://search.pstatic.net/sunny?src=https%3A%2F%2Fi.namu.wiki%2Fi%2F4vwKeZPTcrW-2QHjzwfF-OAltaP30Hy4sq2iuPP-LlzfwZkZUY_W7-BBjN4ar5Ngm-OUQQNzfoWW99w6oV5BBA.webp&type=fff174_174"
}
]
},
{
"position":
2,
"title":
"커피 - 위키백과 한국어",
"source_icon":
"https://search.pstatic.net/sunny?src=https%3A%2F%2Fko.wikipedia.org%2Ffavicon.ico&type=f30_30_png_expire24",
"source":
"위키백과 한국어",
"link":
"https://ko.wikipedia.org/wiki/%EC%BB%A4%ED%94%BC",
"displayed_link":
"ko.wikipedia.org",
"snippet":
"커피 ( 영어: coffee , 咖啡, 珈琲, 가배, 문화어: 흑차, 검은차), 커피차 또는 커피음료 ( 영어: coffee beverage )는 커피 나무 열매의 씨(커피콩)를 볶아 가루로 낸 것을 따뜻한 물과 차가운 물 또는 증기로 우려내어 마시는, 쓴맛이 나는 짙은 갈색의 음료이다. 색이 어둡고 쓴맛이 있으며 약산성인 커피는 주로 카페인 함량으로 인해 인간에게 자극 효과를 준다. 전세계 뜨거운 음료 시장....",
"additional":
[
{
"position":
1,
"title":
"원산지",
"value":
"예멘 (음료), 에티오피아 (식물)"
},
{
"position":
2,
"title":
"종류",
"value":
"핫(hot) 또는, 콜드(cold). 보통은 핫."
},
{
"position":
3,
"title":
"출시 연도",
"value":
"15세기"
}
],
"related_results":
[
{
"position":
1,
"title":
"재배 지역새 창 열림",
"link":
"https://ko.wikipedia.org/wiki/%EC%BB%A4%ED%94%BC#%EC%9E%AC%EB%B0%B0_%EC%A7%80%EC%97%AD"
},
{
"position":
2,
"title":
"어원새 창 열림",
"link":
"https://ko.wikipedia.org/wiki/%EC%BB%A4%ED%94%BC#%EC%96%B4%EC%9B%90"
},
{
"position":
3,
"title":
"역사새 창 열림",
"link":
"https://ko.wikipedia.org/wiki/%EC%BB%A4%ED%94%BC#%EC%97%AD%EC%82%AC"
},
{
"position":
4,
"title":
"커피 작물새 창 열림",
"link":
"https://ko.wikipedia.org/wiki/%EC%BB%A4%ED%94%BC#%EC%BB%A4%ED%94%BC_%EC%9E%91%EB%AC%BC"
},
{
"position":
5,
"title":
"커피 하위품종새 창 열림",
"link":
"https://ko.wikipedia.org/wiki/%EC%BB%A4%ED%94%BC#%EC%BB%A4%ED%94%BC_%ED%95%98%EC%9C%84%ED%92%88%EC%A2%85"
},
{
"position":
6,
"title":
"가공새 창 열림",
"link":
"https://ko.wikipedia.org/wiki/%EC%BB%A4%ED%94%BC#%EA%B0%80%EA%B3%B5"
},
{
"position":
7,
"title":
"추출 방식에 따른 커피 분류새 창 열림",
"link":
"https://ko.wikipedia.org/wiki/%EC%BB%A4%ED%94%BC#%EC%B6%94%EC%B6%9C_%EB%B0%A9%EC%8B%9D%EC%97%90_%EB%94%B0%EB%A5%B8_%EC%BB%A4%ED%94%BC_%EB%B6%84%EB%A5%98"
},
{
"position":
8,
"title":
"바리에이션 커피새 창 열림",
"link":
"https://ko.wikipedia.org/wiki/%EC%BB%A4%ED%94%BC#%EB%B0%94%EB%A6%AC%EC%97%90%EC%9D%B4%EC%85%98_%EC%BB%A4%ED%94%BC"
},
{
"position":
9,
"title":
"커피와 사회새 창 열림",
"link":
"https://ko.wikipedia.org/wiki/%EC%BB%A4%ED%94%BC#%EC%BB%A4%ED%94%BC%EC%99%80_%EC%82%AC%ED%9A%8C"
},
{
"position":
10,
"title":
"커피 관련 직업새 창 열림",
"link":
"https://ko.wikipedia.org/wiki/%EC%BB%A4%ED%94%BC#%EC%BB%A4%ED%94%BC_%EA%B4%80%EB%A0%A8_%EC%A7%81%EC%97%85"
}
]
},
{
"position":
3,
"title":
"coffee - 교양영어사전2",
"source_icon":
"https://search.pstatic.net/sunny?src=https%3A%2F%2Fssl.pstatic.net%2Fstatic%2Fterms%2Fcommon%2Ffavicon.png&type=f30_30_png_expire24",
"source":
"네이버 지식백과",
"link":
"https://terms.naver.com/entry.naver?docId=2076503&cid=41810&categoryId=41812",
"displayed_link":
"terms.naver.com",
"snippet":
"'커피'라는 말의 어원에는 여러 설이 있으나, 영어의 coffee, 불어의 cafe는 커피를 의미하는 아랍어의 '까흐와(qahwah)'에서 유래했다는 설과 커피의 원산지인 에티오피아의 커피 재배 지역인 카파(Kaffa)에서 유래했다는 설이 유력하다. 오늘날 커피는 세계 70여 개국에서 재배되는데, 2011년 세계시장 점유율 기준으로 커피(green coffee) 생산을 가장 많이...",
"thumbnail":
"https://search.pstatic.net/common?src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2474_000_1%2F20140527122006718_M6BRTOZM4.jpg%2Fhb12_98_i1.jpg%3Ftype%3Dw450_fst_n&type=fff208_208_ar"
},
{
"position":
4,
"title":
"Coffee - 위키피디아 영어",
"source_icon":
"https://search.pstatic.net/sunny?src=https%3A%2F%2Fen.wikipedia.org%2Ffavicon.ico&type=f30_30_png_expire24",
"source":
"위키피디아 영어",
"link":
"https://en.wikipedia.org/wiki/Coffee",
"displayed_link":
"en.wikipedia.org",
"snippet":
"Coffee is a beverage brewed from roasted, ground coffee beans . Dark-colored and bitter , coffee has a stimulating effect on humans due to its caffeine content; however decaffeinated coffee is also commercially available. There are also various coffee substitutes . Coffee production begins when the seeds from coffee cherries, the Coffea plant's fruits, are separated to produce unroasted green coff...",
"additional":
[
{
"position":
1,
"title":
"Type",
"value":
"Usually hot; can be iced"
},
{
"position":
2,
"title":
"Origin",
"value":
"Yemen"
},
{
"position":
3,
"title":
"Introduced",
"value":
"15th century"
},
{
"position":
4,
"title":
"Color",
"value":
"Black, dark brown, light brown, beige"
}
],
"related_results":
[
{
"position":
1,
"title":
"Etymology새 창 열림",
"link":
"https://en.wikipedia.org/wiki/Coffee#Etymology"
},
{
"position":
2,
"title":
"History새 창 열림",
"link":
"https://en.wikipedia.org/wiki/Coffee#History"
},
{
"position":
3,
"title":
"Biology새 창 열림",
"link":
"https://en.wikipedia.org/wiki/Coffee#Biology"
},
{
"position":
4,
"title":
"Cultivation and production새 창 열림",
"link":
"https://en.wikipedia.org/wiki/Coffee#Cultivation_and_production"
},
{
"position":
5,
"title":
"Processing새 창 열림",
"link":
"https://en.wikipedia.org/wiki/Coffee#Processing"
},
{
"position":
6,
"title":
"Preparation새 창 열림",
"link":
"https://en.wikipedia.org/wiki/Coffee#Preparation"
},
{
"position":
7,
"title":
"Economics새 창 열림",
"link":
"https://en.wikipedia.org/wiki/Coffee#Economics"
},
{
"position":
8,
"title":
"Composition새 창 열림",
"link":
"https://en.wikipedia.org/wiki/Coffee#Composition"
},
{
"position":
9,
"title":
"Research새 창 열림",
"link":
"https://en.wikipedia.org/wiki/Coffee#Research"
},
{
"position":
10,
"title":
"Society and culture새 창 열림",
"link":
"https://en.wikipedia.org/wiki/Coffee#Society_and_culture"
}
]
},
{
"position":
5,
"title":
"메가커피 신메뉴!!",
"source_icon":
"https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAxODEyMTBfMTQw%2FMDAxNTQ0NDE4MjY3MDQ0.waUnFMWomn703lYz063fGIwnOmdUQUiNEB_GFIED_wwg.fazmIbyAuA8XOHX-URk_vAFdl4HCp5MS6xc-MsLhSowg.JPEG.jhangel3%2F5_side.jpg&type=f54_54",
"source":
"맘이베베 (핫딜, 육아, 놀이)새 창 열림",
"link":
"https://cafe.naver.com/skybluezw4rh/14866161?art=ZXh0ZXJuYWwtc2VydmljZS1uYXZlci1zZWFyY2gtY2FmZS1wcg.REDACTED",
"snippet":
"하우스밀크라테??? 새로 나와서 넘 맛있어 보여서 먹어봤어요 아 후기에 샷추가 하면 더 맛있다고 하던데 그게 맞는거같아요!!! 기본은 좀 밍밍해요 근데 우유가 뭔 우유인지 달콤하면서 생크림 맛도 나고 고소한맛이 많이나는게 다음엔 샷추가 해서 먹어봐야겠아요!!",
"thumbnail":
"https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAyNjA5MDZfMjUg%2FMDAxNzg4NjcxMTUwNTE0.dL_FRB1IE6oxBY7QdVCkatOtMtMuOqBD6tQXVdKaV-Mg.r65aU41WGAdFO9go_a82MQA63uiWi7qG7GG8sgcqEoMg.JPEG%2FIMG%EF%BC%BF2673.jpg%7C3024x4032&type=ff192_192"
},
{
"position":
6,
"title":
"Kyoto 1 : 교토 우메코지 카덴쇼 • WEEKENDERS COFFEE ROASTERY • 가모 강 • 야키니쿠 문야 • 츠지야 우메....",
"source_icon":
"https://search.pstatic.net/common/?src=https%3A%2F%2Fblogpfthumb-phinf.pstatic.net%2FMjAyMzAxMzFfMzAg%2FMDAxNjc1MTcwMTg0NTM1.kU6B7NjXtf3lX5gcnnokPiwEGDBV0nDwZPQIBJbxAjUg.pYXj2BXP9OZ9LKyo3BR0-ktny25GsruOcnG8IRgN9Hgg.PNG.byorista%2FprofileImage.png&type=f54_54",
"source":
"byorista새 창 열림",
"link":
"https://blog.naver.com/byorista/224393245462",
"snippet":
"@WEEKENDERS COFFEE ROASTERY 교토에서 제일 와보고 싶었던 위캔더스 커피에 왔어요. 커피가 그렇게 맛있다고 소문이 자자하더라구요. 아이스커피로 두 잔 주문했습니다. 분위기 너무 좋은데 우리는 너무 더웠고, 남편이 이거 맞냐고 묻는데 아니 나도 몰랐어 ㅋ 봄, 가을에 오면 너무 좋을 것 같아요. 경험자로서 한여름은 반대입니다아.. 근데 커피는 진짜 맛있었어요-! 남편이...",
"thumbnail":
"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNjA4MjdfMjg1%2FMDAxNzg3ODEwNTI2MzIy.xfzDcXUIMmS5NNplN-YWyteSiSCRgN2Dc7VBp_Ro_4Ug.qaQAJ-AcLwfVvbsbmOugPqGCO4zGx-vtyUBJwModHZUg.JPEG%2FIMG%25A3%25DF5778.jpg%23900x1200&type=ff192_192"
},
{
"position":
7,
"title":
"대구 혁신도시 카페 오오커피클럽(Oh!Oh! Coffee Club) | 직접 만드는 디저트까지",
"source_icon":
"https://search.pstatic.net/common/?src=https%3A%2F%2Fblogpfthumb-phinf.pstatic.net%2FMjAyNjA2MzBfMTIz%2FMDAxNzgyODA4MjAyNjM1.sxCr8wVtWLrvPYD9rnTNuWEnjgEadPNqFqNU5NBb5tog.iPQ5Bz0HayZFrm0sZcFELX8hwxGOeWwnTGZSXtUxwksg.JPEG%2FprofileImage.jpg&type=f54_54",
"source":
"my kind of day새 창 열림",
"link":
"https://blog.naver.com/choijinlim/224380976312",
"snippet":
"오오커피클럽(Oh!Oh! Coffee Club) 대구 동구 첨단로8길 15 1층 107호 (대구 동구 신서동 1147-4) 토-일 정기휴무 월-금 8:30-17:00 주차장 없음(주변 골목주차) 대구 혁신도시 쪽에서 카페를 찾다가 다녀온 오오커피클럽(Oh!Oh! Coffee Club) 범어점에서 오래 하시다가 혁신도시로 재오픈 하셨다고 해요!! 밖에서 봤을 때부터 일반적인 카페와는 조금 다른 분위기라 눈에 들어왔는데요....",
"thumbnail":
"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNjA4MTdfMTIy%2FMDAxNzg2OTMwNjI4MDgy.7qdeEiYGI8sv3BeT-KUVowj-PUDQs5teiCNu1l_6m38g.ElCRNtfkNDLkUcksWp8eLRmoMpQ3CuHeJHiV--DIWAgg.JPEG%2FIMG%25A3%25DF6077.jpg%23900x1200&type=ff192_192"
},
{
"position":
8,
"title":
"후쿠오카 텐진 카페 추천 | REC COFFEE 렉커피 텐진미나미점 | 대형 카페 | 메뉴, 가격, 찾아가는 법 총....",
"source_icon":
"https://search.pstatic.net/common/?src=https%3A%2F%2Fblogpfthumb-phinf.pstatic.net%2FMjAyNjA2MzBfMjYx%2FMDAxNzgyODA2OTIxMjE3.vvJx2ZM2Mtd7daW-79cGjEhGZTXyEvy1Y693HiaxBNcg.ujizglWtqyQ8NvVKNbrCqqTUB7n6_dZpuRWe9ZfTaPIg.JPEG%2FprofileImage.jpg&type=f54_54",
"source":
"유띠 YOUTHI’s log새 창 열림",
"link":
"https://blog.naver.com/youthi_/224399035910",
"snippet":
"소파석도 많아서 오래 앉아있기 너무 좋았어요️ 여행하다 지칠 때 잠깐 들러서 쉬어가기 찐 추천드려요 저희도 여행 중에 여기서 쉬었다 갔거든요ㅋㅋ 메뉴 및 가격 정보 BREWED COFFEE 콜드브루 커피 R ¥590 / L ¥690 REC'S SPECIALTY R ¥650 / L ¥800 ESPRESSO 에스프레소 Single ¥510 / Double ¥610 아메리카노 R ¥630 / L ¥730 카페라떼 R ¥650 / L ¥800...",
"thumbnail":
"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNjA5MDJfMTgy%2FMDAxNzg4MzQ0NTg3MTQ0.K53wi4p02Or58YZM2yOJDQ__hrGC8E3fnXhlfnnxae0g.NxKmVmPBC10yK05Dr0r3F0FDeLeUWQDoyYcTr2uIdGIg.JPEG%2FIMG%25A3%25DF9767.jpg%23900x1200&type=ff192_192"
},
{
"position":
9,
"title":
"매장에서 커피를 팔기 시작했다 | 닥터커피 Coffee Express(커피익스프레스) 전자동 에스프레소 머신 ....",
"source_icon":
"https://search.pstatic.net/common/?src=https%3A%2F%2Fblogpfthumb-phinf.pstatic.net%2FMjAyNTA0MDVfNjUg%2FMDAxNzQzNzgxMDM4NDky.oBnWNYANwsUSKVk3lef99rzmkwj83ORmWCrsnxZ8_g8g.ebqUh5UsdrRBOCxX1qzMx6DLztOoM8QRPEp2T5Vdk_gg.PNG%2FprofileImage.png&type=f54_54",
"source":
"하고싶은거 다 하는 사람새 창 열림",
"link":
"https://blog.naver.com/ttottoyuz_/224398675566",
"snippet":
"백화점 매장은 애초에 음료메뉴는 없는 매장이고, 병원 매장은 무조건 커피랑 음료 메뉴를 해야겠다 생각했었다. 여러가지 계약, 기타등등의 문제로 계약/입점 후 8개월정도를 커피메뉴를 팔 수 없었당. 커피들어가는 메뉴들도 커피 빼고 팔았었다. 이번에 드디어 드디어 ! 커피메뉴 협의가 잘 되어서 8월1일부터 커피를 판매중이다. 하루에 커피 4잔도 마시는 커피...",
"thumbnail":
"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNjA5MDJfMjg2%2FMDAxNzg4MzM2MDE0OTcz.gM5aAX8kgmb5eFVIEGeWTwu_mn6PnwzvPASPq9yNbXkg.-J0ZCOAC6MjH9WMHu-JXATAKg1CpsVGYkXSIuI8qSfUg.JPEG%2FIMG_7708.jpg%233072x3072&type=ff192_192"
},
{
"position":
10,
"title":
"[청주 운천동 신상카페]파우와우 POWWOW COFFEE,독특한 분위기와 시가 롤 티라미수",
"source_icon":
"https://search.pstatic.net/common/?src=https%3A%2F%2Fblogpfthumb-phinf.pstatic.net%2FMjAyNjAzMThfMjA1%2FMDAxNzczODQxODE2NjUz.-AHtrf-hTTlJEpSaUUYvzz8cu1jNJdtNQXLoXAxVc9cg.nIozWWUCKWLpZO4fcIfnsZRFfnMOpjh7pMKkn8iQEHwg.JPEG%2FprofileImage.jpg&type=f54_54",
"source":
"˗ˏˋ ♡ ˎˊ˗바쁘다 바빠새 창 열림",
"link":
"https://blog.naver.com/abovealll/224397484026",
"snippet":
"POWWOW COFFEE (파우와우커피) 주소 : 충북 청주시 흥덕구 흥덕로 141 1층 영업시간 : 월-일 11:00 - 21:00 라스트오더 : 20:00 이날은 근처 플루이드팩토리에서 밥 먹고 친구랑 수다 떨 카페를 찾던 중이었어요. 운천동에 카페가 꽤 많은데 파우와우는 밖에서 봤을 때부터 평소 자주 가던 카페들이랑 느낌이 조금 달라서 궁금했습니다. 주차는 전용 주차장이 아니라 운천동...",
"thumbnail":
"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNjA4MzFfMTQw%2FMDAxNzg4MTc1MjcxNzI1.379Qm6No3g4aJcIJYuPMOCN4FVxGABtckpHNieijj5kg.QttBvGST497C-lIkaW42SC9MFYkmgjqSAvg-Lj8omBMg.JPEG%2FIMG%25A3%25DF8350.JPG%23900x1200&type=ff192_192"
},
{
"position":
11,
"title":
"엘스토어 망고커피 > 아이스 망고라떼 변신~!!",
"source_icon":
"https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAyMzExMTZfMTQg%2FMDAxNzAwMTA2MjQ0MTU3.BNdfmy6QQgzkFuZKi7IvGtzpYTrNbYs7JxZpyV_bzcEg.IhGua6OQ8K71Bb0-H7sGDLcH6VCIVDJ0x0usxoHqUbsg.PNG%2FexternalFile.png&type=f54_54",
"source":
"다낭 도깨비 - 베트남 다낭자유여행 ,다낭여행,맛집,호텔리조트새 창 열림",
"link":
"https://cafe.naver.com/happyibook/6275256?art=ZXh0ZXJuYWwtc2VydmljZS1uYXZlci1zZWFyY2gtY2FmZS1wcg.REDACTED",
"snippet":
"아침을 먹고 티비를 보다가 아이스라떼 한잔 해야겠다 싶어 커피를 내리려다가 아껴뒀던 엘스토어 망고커피가 생각나요! 준비물 : 망고커피, 우유, 얼음 (뒷면 방법을 뜯고 난 후 찍었네요) 1. 커피를 컵에 붓는다. 2. 우유를 조금 넣는다. 3. 잘 녹게 전자렌지에 30초 돌린다. 4. 쉐킷쉐킷~ 잘 녹여준다. 5. 우유를 채우고 얼음을 넣는다. 아이스 망고라떼 완성 망고 향도 많이...",
"thumbnail":
"https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAyNjA5MDZfNDYg%2FMDAxNzg4NjYzMTY5Mzgy.SeptK9pVNdROKcFyKAc0ebcl3QFcBsftPsbKMpQ-zQ8g.plq0Rz9ZWMErRG755-s7WTD9TV2rxQgcLDM3qw3C5TYg.JPEG%2F1280_20260906_113653.jpg%7C1280x1707&type=ff192_192",
"related_results":
[
{
"position":
1,
"title":
"RE유통기한에 크게 민감하지 않아서 가끔 혹시 아직 된장일까? 싶은 맘에 그냥 먹기도 하지만, 그래도 건강을 위해 지켜야죠.새 창 열림",
"link":
"https://cafe.naver.com/happyibook/6275256?art=ZXh0ZXJuYWwtc2VydmljZS1uYXZlci1zZWFyY2gtY2FmZS1wcg.REDACTED"
},
{
"position":
2,
"title":
"RE마자요!!!! 오늘 점심은 쌀밥 고봉밥으로 준비해서 샹궈 뿌시기입니다ㅋㅋㅋ 쪼아님두 맛난 점심 드세요새 창 열림",
"link":
"https://cafe.naver.com/happyibook/6275256?art=ZXh0ZXJuYWwtc2VydmljZS1uYXZlci1zZWFyY2gtY2FmZS1wcg.REDACTED"
},
{
"position":
3,
"title":
"RE쪼아님 여기 한잔이요ㅋㅋ 못 마셔도 향이라도 맡고 싶네요새 창 열림",
"link":
"https://cafe.naver.com/happyibook/6275256?art=ZXh0ZXJuYWwtc2VydmljZS1uYXZlci1zZWFyY2gtY2FmZS1wcg.REDACTED"
},
{
"position":
4,
"title":
"RE집안에 카페가 생기셨군요~~ 잔도 빨대도 귀염뽀짝~~☕️새 창 열림",
"link":
"https://cafe.naver.com/happyibook/6275256?art=ZXh0ZXJuYWwtc2VydmljZS1uYXZlci1zZWFyY2gtY2FmZS1wcg.REDACTED"
},
{
"position":
5,
"title":
"RE히히 네넹❣️ 빨간날은 다 쉽니다 오랜만에 늦잠도 여유롭게 잤어용새 창 열림",
"link":
"https://cafe.naver.com/happyibook/6275256?art=ZXh0ZXJuYWwtc2VydmljZS1uYXZlci1zZWFyY2gtY2FmZS1wcg.REDACTED"
}
]
},
{
"position":
12,
"title":
"9 Health Benefits of Coffee: What the Science Says",
"source_icon":
"https://search.pstatic.net/sunny?src=https%3A%2F%2Fimages-prod.healthline.com%2Fhlcmsresource%2Fimages%2Ffrontend-static%2Ffavicon%2Fhl-logo-logomark-circle-black.ico&type=f30_30_png_expire24",
"source":
"Healthline",
"link":
"https://www.healthline.com/nutrition/top-evidence-based-health-benefits-of-coffee",
"displayed_link":
"www.healthline.com",
"snippet":
"Coffee is a major source of antioxidants. It's health benefits may include improved brain function and a lower risk of several diseases.",
"thumbnail":
"https://search.pstatic.net/sunny?src=https%3A%2F%2Fi.ytimg.com%2Fvi%2FYCiSnK3DAzA%2Fmaxresdefault.jpg&type=f368_208"
},
{
"position":
13,
"title":
"커피 : 알라딘",
"source_icon":
"https://search.pstatic.net/sunny?src=https%3A%2F%2Fimage.aladin.co.kr%2Fimg%2Fhome%2Faladin.ico&type=f30_30_png_expire24",
"source":
"알라딘",
"link":
"https://www.aladin.co.kr/home/wcoffeemain.aspx",
"displayed_link":
"www.aladin.co.kr",
"snippet":
"인터넷 서점. 종이책과 ebook, 중고상품, 음반, 블루레이, 굿즈, 커피를 판매합니다. 전국 각지에 중고매장을 운영 중입니다.",
"thumbnail":
"https://search.pstatic.net/sunny?src=https%3A%2F%2Fimage.aladin.co.kr%2Fimg%2Fbn%2Fcoffee%2F2024%2F01%2Fntale_main2.jpg&type=fff208_208_ar"
},
{
"position":
14,
"title":
"커피 - 옥션",
"source_icon":
"https://search.pstatic.net/sunny?src=https%3A%2F%2Frealpics.auction.co.kr%2Fcommon%2Fstatic%2Ffavicon_2011.ico&type=f30_30_png_expire24",
"source":
"옥션",
"link":
"https://www.auction.co.kr/n/list?category=38250000",
"displayed_link":
"www.auction.co.kr",
"snippet":
"필더컵커피생두 1Kg 뉴크롭 30여종 베트남G1외 · 15,800원 · 최대 790원 적립 · 후기 61"
},
{
"position":
15,
"title":
"커피가 몸에 좋은 이유, 그리고 맛과 멋의 세계",
"source_icon":
"https://search.pstatic.net/sunny?src=https%3A%2F%2Fgradium.co.kr%2Ffavicon.ico&type=f30_30_png_expire24",
"source":
"그라디움",
"link":
"https://gradium.co.kr/coffee-benefits/",
"displayed_link":
"gradium.co.kr",
"snippet":
"2022.01.21.",
"thumbnail":
"https://search.pstatic.net/sunny?src=https%3A%2F%2Fgradium.co.kr%2Fwp-content%2Fuploads%2Fcoffee-3-1.jpg&type=fff208_208_ar"
},
{
"position":
16,
"title":
"미국 커피 C 가격",
"source_icon":
"https://search.pstatic.net/sunny?src=https%3A%2F%2Fkr.investing.com%2Ffavicon.ico&type=f30_30_png_expire24",
"source":
"인베스팅닷컴",
"link":
"https://kr.investing.com/commodities/us-coffee-c",
"displayed_link":
"kr.investing.com",
"snippet":
"전일 종가 : 292.05, 금일 시가 : 285.9, 거래량 : 8,527, 1년 변동률 : -26.6994%, 결제일 : 2026-12-18, 결제 방식 : 실물인수도, 만기월 : 2026년 12월, 최종 롤오버일 : 2026-09-18, 계약 단위 : 37,500파운드, 틱 크기 : 0.05, 틱 가치 : 18.75, 티커 : KC, 포인트가치 : 1=$375, 개월 : HKNUZ"
},
{
"position":
17,
"title":
"[생후19개월]아빠와 둘만의 시간, 커피도 만들어 주고, 장난감도 치워 주고, 아빠도 잘 챙겨주는 하....",
"source_icon":
"https://search.pstatic.net/sunny/?src=https%3A%2F%2Fyt3.ggpht.com%2Fh2Dd1mXjYLoGJ-Bqv0mrZZ2kZYZz8uQu6xhl-taVTz7D06e_yl1j30t7lLHahwE3IQ8f3wthENU%3Ds800-c-k-c0x00ffffff-no-rj&type=f70_70",
"source":
"형탁 사야의 하루 ヒョンタクサヤの1日새 창 열림",
"link":
"https://www.youtube.com/watch?v=FG6ZTbmto0c",
"snippet":
"남자 둘이 뭘 하고 있는지 궁금했더니 친하게 놀아줘서 안심했어요ㅎㅎ 심 씨가 장난감을 좋아해서 다행이라고 다시 한 번 느꼈습니다ㅎㅎ 하루도 지난번에 비해 할 수 있는 것이 늘어나고 카트를 끌거나, 커피를 만들거나, 장난감을 정리하거나, 가르쳐 주지 않았는데도 잘 보고 공부하고 있다는 것에 감동했습니다! 심 씨도 수고하셨습니다. 두 사람 덕분에 친구들과...",
"thumbnail":
"https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.ytimg.com%2Fvi%2FFG6ZTbmto0c%2Fmaxresdefault.jpg&type=f368_208"
},
{
"position":
18,
"title":
"성신여대 카페 추천｜카페온더플랜(Stained Coffee Roasters) 공부하기 좋은 카페 후기",
"source_icon":
"https://search.pstatic.net/common/?src=https%3A%2F%2Fblogpfthumb-phinf.pstatic.net%2FMjAyNTEwMTNfMTk0%2FMDAxNzYwMzIzMjIzMDgx.6oauK0bXywUhRy2Q15Ktp7dE2I0FKdCjULXZuXYKWKkg.FJqIPpv8tr6OdkYi6Xc7U3qkBTQN4HMqgWH5II6de-0g.JPEG%2FprofileImage.jpg&type=f54_54",
"source":
"융서 RECORD새 창 열림",
"link":
"https://blog.naver.com/hys30333/224396963959",
"snippet":
"“Cafe on the plan” * 지금은 Stained Coffee Roasters 이름으로 운영중입니다! 제가 고등학생때부터 다닌 단골 카공카페를 공유합니다.... ꒰ა᭜꛰ᩝ ᭜꛰ᩝ໒꒱ (사용못한 쿠폰만 7... 좋게 커피부터 논커피, 다양한 음료까지 준비되어 있어요 !! 특히 로스팅을 전문적으로 하는 곳이라 여러 원두종류를 즐기기에도 좋은 곳입니다-! 원두마다 설명이 자세해서...",
"thumbnail":
"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNjA4MTlfMTMz%2FMDAxNzg3MDcwMTg5NjI2.fJ0OQhHn79HpaTeAMBHSyABrcgkTw9gd1ZLMa_hM53Ug.dTi4uhsWe7RIUj3cyFWO8uuss9coxb5Udgh510WHdvMg.JPEG%2FIMG%25A3%25DF0270.jpg%23900x1200&type=ff192_192"
}
],
"shopping_results":
[
{
"position":
1,
"title":
"[NEW] G7커피 퓨어블랙 라이트 0.9g X 160개입",
"link":
"https://ader.naver.com/v1/HRDy0BW6ivzs5sa1N6vcjuRZRhpdDSdWHiQR2fLjK9eCn9AtZ1Gr3HVWRp6cdxPOFDcVOYkl_GFOtjzZVI0opT6vXP9UPrjGIb5_TM4LWbXBZG6hYGj2MiN1jhmla4Tzg_3KyhbxghUmDVD8MwpgMVviUOMDA8wrHNFrrlH0qB8WTXlnxPjpwhplrhcF_yhCmmWCwui8L0A8vWfN-8cdbkpM9NEHaBT20WeeNx33LhDnXbsOX3IA6_D-m8llQ8CxqQA98UmzJ3GHqoRyYm8ZgQqn2nR6vUEI8sSc5pAJdg6nQdU5GtxO_vAjiI3H9jaCniOqHCnxqYtBYPwGp-24k7cQYe1dELz-ECfvtmvUr8Yw8meL0s3xLxPHY8RtUefNTP_T0e5J4Zqzba6thKj-g-gvViRC7gPQqUR29e1RbS-ofVtgNlmDqDSL-rIM8P8ATrp_5UI9NLH9SoUC5ysOSA==?c=naver.search.pc.npla&t=0&ui=GUIDE",
"thumbnail":
"https://shopping-phinf.pstatic.net/main_8988746/89887469957.5.jpg?type=f300",
"price":
23900,
"coupon_price":
22220,
"free_shipping":
true,
"stores":
"G7커피공식쭝웬레전드코리아"
},
{
"position":
2,
"title":
"당일로스팅 원두 커피콩 1kg 고소한 산미없는 카페원두 맛있는 다크 홀빈 흑당블렌딩",
"link":
"https://ader.naver.com/v1/V5-iSYhV2FnvyrHgLeJjzbgeTIAfGP_gG1Qwbayi_jMWohsNj0n3q4mr_0sgT-YAMw7n55zXkcrPuOh6vE6IG9Wi8vbDQzBqIdvmmp9R2gkp5FlDhqI6xj1sI_KBhbLgt76YNPwlnV19ENzshhEDP5y8F15JQo5bPJQUV9Og4vpWbYvxdrliX8gQ2Qq08BXBq4t2iVXuUXiqWBE57jV_DDVxzdYqUOxSSb09Hg6gpQQ2mNnuai9QWuDNvjnwZOgagVY9yq1vxjAJj3l0onVheyU1JioIim3x4rbwXWFlhLqn_wZjlyyhAwk2OH9h06b5IjmM8scQ7gi0Lt2n9dmKA7UWDLPoHEfF0zfH-Ix68H6c78GsfZwCvlNVoMBvFOKi6IAwjrWLRU-Nz4lw5PX_EgQ3jol1G_RaZvMexUzNsdWuymXcksPx2bhdRGc_kF2xePc49uszDt-P4sM617oG-A==?c=naver.search.pc.npla&t=0&ui=GUIDE",
"thumbnail":
"https://shopping-phinf.pstatic.net/main_8649660/86496601171.11.jpg?type=f300",
"old_price":
44100,
"price":
25100,
"coupon_price":
24500,
"shipping":
3000,
"rating":
4.84,
"reviews":
15000,
"stores":
"백당커피공장"
},
{
"position":
3,
"title":
"파주커피오빠 커피원두 1kg 10+1",
"link":
"https://ader.naver.com/v1/rQeRmE_bKfGn1c5fWl83Wq-OZPz4BzKePxmPtZkihCr5xqU0_BDOJOs7UM3QLebPM1I8fjDlHDYmc45ayEntMJzAjmVPBFXPSBnCUZ0eolMJzmVQqiySRowSDvDzuaILRfKiD3YWxtTqLtVAohRc6sL87QG0Kjhn0kYgmQzLlehb_qhSk8mtsK7K7jfubJG-o1g22TqEsxnmtr2nxKXCZImS-R7I9PK8WlaeLaS7V8W7uIOC6lasStjtRLBDNV7ps5cIUTXHJxVU4LqUGjSpgyKFP5Fq5D3yvWNmvGMp1Rp_8YSv7D9aQQPLbg3weIU3DO6Xu0dQG8aaeatN9BqjzurLI5BQ6mu5sqyKj4o1R3mST6gTeCd77207PnrruHqOBmaBksZOqE7NwIGZipUpHaMwbaiWpbGuW0HvgNcV9SqqAm9UBOS0511H8bRPInwLxwaQSKjZOWd49R5Vs00S0w==?c=naver.search.pc.npla&t=0&ui=GUIDE",
"thumbnail":
"https://shopping-phinf.pstatic.net/main_8213639/82136395340.12.jpg?type=f300",
"old_price":
28100,
"price":
14900,
"shipping":
3000,
"rating":
4.84,
"reviews":
16000,
"stores":
"파주커피오빠"
},
{
"position":
4,
"title":
"커피상사 원두1kg 10봉 구매시 1kg 증정",
"link":
"https://ader.naver.com/v1/XoXbn_1TKvMuhTH6fwpIPA-V6sarOij2SMC0j715hlyatadQhP0FgSqz1hD5TCIVghr0Yf5nQxmTvq-ryTRODKOnkd5piLHhcD1ExfaGReMl5WVtTjAXBLRlkLvdPkIFpHSOPdVNjrQlWfwI2AR402jmR6wd9p2FBpWWOhgcgInM5QYZr7j1r3wARYdIpPXADsrd8gX8g-Uw9dJSj025Azcy90K9ECyImGvsa5MAouRzkahRSZgeTWjowQ04ENl-rxQjVFawYGEAcZDggJ8A1QlDqEJd2H_bp2P51K2uwIutqWY5x4Ezu6VIFlWDH_hCroSHEGoX9SHmulN-AJWqRaiMogizJx8r23iE3HOp9GaLjEB3_lkjHMU3jzACHEXcHFkOE1rl9V6506qL1Z1Sb4i51QIEmlTEO9xerGHhdEjttcJOH8RvogHZ9XRObs2M3DaDBf9iKtp0Sv86fyNDhQ==?c=naver.search.pc.npla&t=0&ui=GUIDE",
"thumbnail":
"https://shopping-phinf.pstatic.net/main_8316425/83164252118.13.jpg?type=f300",
"old_price":
30100,
"price":
15800,
"shipping":
3000,
"rating":
4.87,
"reviews":
9491,
"stores":
"커피상사"
},
{
"position":
5,
"title":
"[슈퍼적립] 카누 미니 아메리카노 다크로스트, 150개입, 1개",
"link":
"https://cr3.shopping.naver.com/v2/bridge/searchGate?nv_mid=84869580821&cat_id=50002606&query=Coffee&t=mtw2guh1&h=c876e7046bf08864bffa824d693860b3661efe28&frm=NVSCSPN",
"thumbnail":
"https://shopping-phinf.pstatic.net/main_8486958/84869580821.11.jpg?type=f300",
"old_price":
41980,
"price":
37980,
"coupon_price":
36980,
"free_shipping":
true,
"rating":
4.93,
"reviews":
42000,
"stores":
"카누 공식 브랜드스토어"
},
{
"position":
6,
"title":
"일리 캡슐 커피 인텐소 18캡슐 팩 외 38종",
"link":
"https://cr3.shopping.naver.com/v2/bridge/searchGate?nv_mid=85797914253&cat_id=50009600&query=Coffee&t=mtw2gugt&h=c9adde299972350ffdf9bc5b596130b417d50e68&frm=NVSCPRO",
"thumbnail":
"https://shopping-phinf.pstatic.net/main_8579791/85797914253.23.jpg?type=f300",
"old_price":
18800,
"price":
11900,
"coupon_price":
10300,
"shipping":
3000,
"rating":
4.93,
"reviews":
79000,
"stores":
"illy store"
},
{
"position":
7,
"title":
"동서식품 카누 미니 마일드로스트 아메리카노 0.9g, 150개입, 1개",
"link":
"https://cr3.shopping.naver.com/v2/bridge/searchGate?nv_mid=59856887548&cat_id=50002606&query=Coffee&t=mtw2gugt&h=2c55313ca01262d496e2c9efe8f6496344c66194&frm=NVSCPRO",
"thumbnail":
"https://shopping-phinf.pstatic.net/main_5985688/59856887548.20260615172328.jpg?type=f300",
"price":
25900,
"free_shipping":
true,
"rating":
4.88,
"reviews":
92000,
"stores":
"판매처 3,707"
},
{
"position":
8,
"title":
"동서식품 맥심 모카골드 마일드 12g , 200개입, 1개",
"link":
"https://cr3.shopping.naver.com/v2/bridge/searchGate?nv_mid=59845338200&cat_id=50002606&query=Coffee&t=mtw2gugu&h=ee1195affb2144bd01202d55f49f7989c640af77&frm=NVSCPRO",
"thumbnail":
"https://shopping-phinf.pstatic.net/main_5984533/59845338200.20260429173556.jpg?type=f300",
"price":
24790,
"shipping":
27740,
"rating":
4.87,
"reviews":
210000,
"stores":
"판매처 11,473"
}
],
"books_results":
[
{
"position":
1,
"title":
"Coffee",
"author":
"Jim Stovall",
"publisher":
"2026.09.02.",
"link":
"https://cr3.shopping.naver.com/v2/bridge/book/searchGate?cat_id=50011100&frm=PBOKMOD&h=f09ed51aeff4eef28f93e706a186468f3c974dd4&nv_mid=61558372059&query=Coffee&t=MTW2GUB9",
"thumbnail":
"https://search.pstatic.net/common/?src=https%3A%2F%2Fshopping-phinf.pstatic.net%2Fmain_6155837%2F61558372059.20260906091925.jpg&type=w276",
"shop_area":
[
{
"store":
"도서",
"seller":
"판매처 1",
"price":
"최저 22,240원",
"extracted_price":
22240,
"shipping":
"무료",
"link":
"https://cr3.shopping.naver.com/v2/bridge/book/searchGate?cat_id=50011100&frm=PBOKMOD&h=f09ed51aeff4eef28f93e706a186468f3c974dd4&nv_mid=61558372059&query=Coffee&t=MTW2GUB9"
}
]
}
],
"ai_mode":
{
"serpapi_link":
"https://serpapi.com/search.json?engine=naver_ai_mode&query=Coffee"
},
"pagination":
{
"next":
"https://search.naver.com/search.naver?nso=&page=2&qdt=0&query=Coffee&sm=tab_pge&ssc=tab.ur.all&start=1",
"other_pages":
{
}
},
"serpapi_pagination":
{
"next_link":
"https://serpapi.com/search.json?device=desktop&engine=naver&page=2&query=Coffee&start=1",
"next":
"https://serpapi.com/search.json?device=desktop&engine=naver&page=2&query=Coffee&start=1"
}
}
GET 요청
GET https://serpapi.com/search.json?engine=naver&query=Coffee
연동 코드
Ruby
require "serpapi"

client = SerpApi::Client.new(
  engine: "naver",
  query: "Coffee",
  api_key: ENV.fetch("SERPAPI_KEY")
)

results = client.search
web_results = results[:web_results]
API 키는 코드에 직접 입력하지 않고 환경 변수로 관리하는 것이 좋아요.
API 파라미터
검색 쿼리
query
필수
검색어를 지정하는 파라미터예요. 일반적인 Naver 검색에서 사용하는 모든 검색 표현을 사용할 수 있어요. 예를 들어 일반 검색어와 함께 NOT, OR, site:, filetype:, near:, ip:, loc:, feed: 등을 사용할 수 있어요.
페이지네이션
start
선택 사항
검색 결과의 시작 위치인 offset을 조정하는 파라미터예요. 웹 검색을 제외하면 기본값은 1이에요.
웹 검색을 제외한 검색에서는 다음 공식을 사용해요.
start = (페이지 번호 × 10) - 9
예를 들어 3페이지의 시작 위치는 (3 × 10) - 9 = 21이에요.
웹 검색에서는 다음 공식을 사용해요.
start = (페이지 번호 × 15) - 29
예를 들어 웹 검색 3페이지의 시작 위치는 (3 × 15) - 29 = 16이에요.
page
선택 사항
page 파라미터를 사용하면 start 값을 직접 계산하지 않아도 돼요. 원하는 페이지 번호만 지정하면 되고, 페이지 번호는 1부터 시작해요.
num
선택 사항
반환할 검색 결과의 최대 개수를 지정해요. 기본값은 50이고, 최댓값은 100이에요.
이 파라미터는 Naver Images API에서만 사용할 수 있어요.
검색 유형
where
선택 사항
검색 유형을 지정하는 파라미터예요. 기본값은 nexearch예요.
사용할 수 있는 값은 다음과 같아요.
- nexearch: 일반 Naver 검색
- web: Naver 웹 자연 검색 결과
- video: Naver 동영상 검색 결과
- news: Naver 뉴스 검색 결과
- image: Naver Images API
고급 필터
sort_by
선택 사항
검색 결과를 정렬하는 방식을 지정해요. Naver 뉴스 검색 결과에서는 기본값이 0이고, 다른 검색 유형에서는 r이에요.
Naver 뉴스 검색에서는 다음 값을 사용할 수 있어요.
- 0: 관련도순(기본값)
- 1: 최신순
- 2: 오래된순(뉴스 검색에서만 지원해요)
그 밖의 검색 유형에서는 다음 값을 사용할 수 있어요.
- r: 관련도순(기본값)
- dd: 최신순
period
선택 사항
검색 결과의 기간을 지정해요. 기본값은 all이에요.
사용할 수 있는 값은 다음과 같아요.
- all: 기간 제한 없이 검색(기본값)
- 1h: 최근 1시간
- 1d: 최근 1일
- 1w: 최근 1주
- 1m: 최근 1개월
- 3m: 최근 3개월
- 6m: 최근 6개월
- 1y: 최근 1년
- fromYYYYMMDDtoYYYYMMDD: 사용자 지정 기간. 예: from20250801to20250830
Naver 뉴스 검색에서는 다음 값도 사용할 수 있어요.
- 2h: 최근 2시간
- 3h: 최근 3시간
- 4h: 최근 4시간
- 5h: 최근 5시간
- 6h: 최근 6시간
SerpApi 파라미터
engine
필수
Naver API engine을 사용하려면 값을 naver로 설정해요.
device
선택 사항
검색 결과를 가져올 때 사용할 기기를 지정해요.
- desktop: 일반 데스크톱 브라우저를 사용해요. 기본값이에요.
- tablet: 태블릿 브라우저를 사용해요. 현재는 iPad를 사용해요.
- mobile: 모바일 브라우저를 사용해요.
no_cache
선택 사항
캐시된 결과가 있더라도 SerpApi가 Naver 검색 결과를 새로 가져오도록 설정해요. 쿼리와 모든 파라미터가 완전히 같은 경우에만 캐시된 결과를 사용해요. 캐시는 1시간 후 만료돼요.
캐시된 검색은 무료이며 월별 검색 사용량에 포함되지 않아요. 기본값인 false로 설정하면 캐시 결과를 사용할 수 있고, true로 설정하면 캐시 결과를 사용하지 않아요.
no_cache와 async 파라미터는 함께 사용하면 안 돼요.
async
선택 사항
SerpApi에 검색 요청을 제출하는 방식을 지정해요.
기본값인 false로 설정하면 HTTP 연결을 열고 검색 결과를 받을 때까지 연결을 유지해요. true로 설정하면 검색 요청만 먼저 제출하고 결과는 나중에 가져와요. 이 경우 Searches Archive API를 사용해 결과를 조회해야 해요.
async와 no_cache 파라미터는 함께 사용하면 안 돼요. Ludicrous Speed가 활성화된 계정에서도 async를 사용하면 안 돼요.
zero_trace
선택 사항 · Enterprise 전용
ZeroTrace 모드를 활성화하는 파라미터예요. 기본값인 false 또는 true로 설정할 수 있어요.
이 모드를 활성화하면 SerpApi 서버에 검색 파라미터, 검색 파일, 검색 메타데이터를 저장하지 않아요. 대신 문제를 디버깅하기가 더 어려워질 수 있어요.
api_key
필수
사용할 SerpApi 비공개 키를 지정해요.
output
선택 사항
결과 형식을 지정해요.
- json: 구조화된 JSON 결과를 반환해요. 기본값이에요.
- html: 가져온 원본 HTML을 반환해요.
- md: LLM과 AI agent에 최적화된 Markdown 형식을 반환해요.
json_restrictor
선택 사항
출력에 포함할 필드를 지정해요. 필요한 필드만 선택하면 payload 크기가 줄어들어 응답을 더 빠르게 받을 수 있어요. 자세한 내용은 JSON Restrictor 문서를 참고하세요.
API 결과
JSON 결과
JSON 출력에는 광고 결과, Knowledge Graph, 뉴스 결과, 동영상 결과 등 여러 유형의 구조화된 데이터가 포함돼요.
검색 상태는 search_metadata.status에서 확인할 수 있어요. 상태는 다음 순서로 변경돼요.
Processing → Success 또는 Error
검색에 실패하면 error 필드에 오류 메시지가 들어 있어요. search_metadata.id는 SerpApi 내부에서 사용하는 검색 ID예요.
HTML 결과
HTML 출력은 JSON 결과를 디버깅하거나 SerpApi에서 아직 지원하지 않는 기능을 확인할 때 유용해요. Naver에서 가져온 원본 HTML을 제공해요.
Markdown 결과
Markdown 출력은 LLM과 AI agent에 맞게 최적화되어 있어요. 표, Markdown 링크, YAML frontmatter를 사용해 JSON과 거의 같은 정보를 더 적은 token으로 제공해요.