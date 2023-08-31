import ScheduleItem from "./ScheduleItem";
import {
  ScheduleStyled,
  ScheduleItemsStyled,
  ScheduleItemRowsStyled,
  ScheduleItemTitleStyled,
} from "./style/schedule.style";
import { useScheduleData } from "./hooks/schedule.hooks";

// const datas: TSchedules = {
//   1692370800000: [
//     {
//       time: 10,
//       hour: 2,
//       place: "마루공원",
//       title: "title1",
//       location:
//         "https://map.kakao.com/?w3w=%ED%87%B4%EA%B7%BC.%EC%84%B1%EB%AA%85.%ED%99%98%ED%9D%AC&urlLevel=1",
//       team: undefined,
//       isHome: true,
//     },
//     {
//       time: 12,
//       hour: 2,
//       place: "마루공원",
//       title: "title2",
//       location:
//         "https://map.kakao.com/?w3w=%ED%87%B4%EA%B7%BC.%EC%84%B1%EB%AA%85.%ED%99%98%ED%9D%AC&urlLevel=1",
//       team: "B",
//       isHome: true,
//     },
//   ],
//   1693010800000: [
//     {
//       time: 10,
//       hour: 2,
//       place: "마루공원",
//       title: "title1",
//       location:
//         "https://map.kakao.com/?w3w=%ED%87%B4%EA%B7%BC.%EC%84%B1%EB%AA%85.%ED%99%98%ED%9D%AC&urlLevel=1",
//       team: undefined,
//       isHome: true,
//     },
//     {
//       time: 12,
//       hour: 2,
//       place: "마루공원",
//       title: "title2",
//       location:
//         "https://map.kakao.com/?w3w=%ED%87%B4%EA%B7%BC.%EC%84%B1%EB%AA%85.%ED%99%98%ED%9D%AC&urlLevel=1",
//       team: "B",
//       isHome: true,
//     },
//   ],
//   1693610800000: [
//     {
//       time: 10,
//       hour: 2,
//       place: "마루공원",
//       title: "title1",
//       location:
//         "https://map.kakao.com/?w3w=%ED%87%B4%EA%B7%BC.%EC%84%B1%EB%AA%85.%ED%99%98%ED%9D%AC&urlLevel=1",
//       team: undefined,
//       isHome: true,
//     },
//     {
//       time: 12,
//       hour: 2,
//       place: "마루공원",
//       title: "title2",
//       location:
//         "https://map.kakao.com/?w3w=%ED%87%B4%EA%B7%BC.%EC%84%B1%EB%AA%85.%ED%99%98%ED%9D%AC&urlLevel=1",
//       team: "B",
//       isHome: true,
//     },
//     {
//       time: 14,
//       hour: 2,
//       place: "마루공원",
//       title: "title2",
//       location:
//         "https://map.kakao.com/?w3w=%ED%87%B4%EA%B7%BC.%EC%84%B1%EB%AA%85.%ED%99%98%ED%9D%AC&urlLevel=1",
//       team: "B",
//       isHome: true,
//     },
//   ],
// };

function Schedule() {
  const now = Date.now();
  const datas = useScheduleData();
  // useEffect(() => {
  //   const baseURL = "https://cors-anywhere.herokuapp.com/";
  //   const url =
  //     "https://api.notion.com/v1/databases/7399d5faac7b4ff3b4dc64a0eb40bf81/query";

  //   (async () => {
  //     const client = new Client({
  //       auth: process.env.REACT_APP_NOTION_KEY,
  //       notionVersion: "2022-06-28",
  //       baseUrl: baseURL + "https://api.notion.com",
  //     });
  //     const response = await client.databases.query({
  //       database_id: "7399d5faac7b4ff3b4dc64a0eb40bf81",
  //     });
  //   })();
  // });
  // console.log(datas);
  return (
    <ScheduleStyled>
      {/* {datas &&
        datas.results.map(
          ({
            id,
            properties: {
              date: {
                date: { start: date },
              },
              home: { checkbox: isHome },
              hour: { number: hour },
              location: {
                rich_text: [
                  {
                    text: { content: location },
                  },
                ],
              },
              place: {
                rich_text: [
                  {
                    text: { content: place },
                  },
                ],
              },
              time: { number: time },
              team: {
                rich_text: [],
              },
            },
          }) => {
            const title = "",
              team = "";
            return (
              <ScheduleItemsStyled key={id}>
                <ScheduleItemTitleStyled>{date}</ScheduleItemTitleStyled>
                <ScheduleItemRowsStyled>
                  <ScheduleItem
                    item={{ isHome, hour, location, place, time, title, team }}
                  />
                </ScheduleItemRowsStyled>
              </ScheduleItemsStyled>
            );
          }
        )} */}
      {Object.entries(datas).map(([key, values]) => {
        return (
          <ScheduleItemsStyled key={key}>
            <ScheduleItemTitleStyled>{key}</ScheduleItemTitleStyled>
            <ScheduleItemRowsStyled>
              {values.map((item, index) => {
                return <ScheduleItem key={index} item={item} />;
              })}
            </ScheduleItemRowsStyled>
          </ScheduleItemsStyled>
        );
      })}
    </ScheduleStyled>
  );
}

export default Schedule;
