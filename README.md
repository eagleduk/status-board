1. 소개
2. 캘린더
3. 스케줄
4. 연락처?

Database : mongoDB, firebase, notion 중 택 1
table: info, calendar, address

info

- 회장: chairman
- 부회장: vice chairman
- 감독: director
- 코치: coach
- 총무: General Affairs

calendar, schedule

- 날자: date
- 시작 시간: time
- 시간: hour
- 제목: title
- 장소: place
- 위치: location
- 팀: null
- 홈: isHome

address

- 이름: name
- 연락처: phone
- 비고: etc

1. 커스텀 훅 으로
   1. development 일 떄,
   2. production 일 때,
   3. 나누어서 데이터 가져올 수 있도록
