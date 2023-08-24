import ScheduleItem from "./ScheduleItem";
import {
  ScheduleStyled,
  ScheduleItemsStyled,
  ScheduleItemRowsStyled,
  ScheduleItemTitleStyled,
  ScheduleItemStyled,
} from "./style/schedule.style";
import { TSchedules } from "./type/schedule.type";

const datas: TSchedules = {
  1692370800000: [
    {
      time: 10,
      hour: 2,
      place: "마루공원",
      title: "title1",
      location:
        "https://map.kakao.com/?w3w=%ED%87%B4%EA%B7%BC.%EC%84%B1%EB%AA%85.%ED%99%98%ED%9D%AC&urlLevel=1",
      team: undefined,
      isHome: true,
    },
    {
      time: 12,
      hour: 2,
      place: "마루공원",
      title: "title2",
      location:
        "https://map.kakao.com/?w3w=%ED%87%B4%EA%B7%BC.%EC%84%B1%EB%AA%85.%ED%99%98%ED%9D%AC&urlLevel=1",
      team: "B",
      isHome: true,
    },
  ],
  1693010800000: [
    {
      time: 10,
      hour: 2,
      place: "마루공원",
      title: "title1",
      location:
        "https://map.kakao.com/?w3w=%ED%87%B4%EA%B7%BC.%EC%84%B1%EB%AA%85.%ED%99%98%ED%9D%AC&urlLevel=1",
      team: undefined,
      isHome: true,
    },
    {
      time: 12,
      hour: 2,
      place: "마루공원",
      title: "title2",
      location:
        "https://map.kakao.com/?w3w=%ED%87%B4%EA%B7%BC.%EC%84%B1%EB%AA%85.%ED%99%98%ED%9D%AC&urlLevel=1",
      team: "B",
      isHome: true,
    },
  ],
  1693610800000: [
    {
      time: 10,
      hour: 2,
      place: "마루공원",
      title: "title1",
      location:
        "https://map.kakao.com/?w3w=%ED%87%B4%EA%B7%BC.%EC%84%B1%EB%AA%85.%ED%99%98%ED%9D%AC&urlLevel=1",
      team: undefined,
      isHome: true,
    },
    {
      time: 12,
      hour: 2,
      place: "마루공원",
      title: "title2",
      location:
        "https://map.kakao.com/?w3w=%ED%87%B4%EA%B7%BC.%EC%84%B1%EB%AA%85.%ED%99%98%ED%9D%AC&urlLevel=1",
      team: "B",
      isHome: true,
    },
    {
      time: 14,
      hour: 2,
      place: "마루공원",
      title: "title2",
      location:
        "https://map.kakao.com/?w3w=%ED%87%B4%EA%B7%BC.%EC%84%B1%EB%AA%85.%ED%99%98%ED%9D%AC&urlLevel=1",
      team: "B",
      isHome: true,
    },
  ],
};

function Schedule() {
  const now = Date.now();
  return (
    <ScheduleStyled>
      {Object.entries(datas).map(([key, values]) => {
        const text = new Date(+key);
        return (
          <ScheduleItemsStyled key={key}>
            <ScheduleItemTitleStyled>
              {text.toLocaleDateString()}
            </ScheduleItemTitleStyled>
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
