import {
  TSchedule,
  TScheduleItems,
  TScheduleItemRows,
  TScheduleItemTitle,
  TScheduleItem,
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
      team: "",
    },
    {
      time: 12,
      hour: 2,
      place: "마루공원",
      title: "title2",
      location:
        "https://map.kakao.com/?w3w=%ED%87%B4%EA%B7%BC.%EC%84%B1%EB%AA%85.%ED%99%98%ED%9D%AC&urlLevel=1",
      team: "",
    },
  ],
};

function Schedule() {
  const now = Date.now();
  return (
    <TSchedule>
      {Object.entries(datas).map(([key, values]) => {
        const text = new Date(+key);
        return (
          <TScheduleItems key={key}>
            <TScheduleItemTitle>{text.toLocaleDateString()}</TScheduleItemTitle>
            <TScheduleItemRows>
              {values.map(({ title, location, place }, index) => {
                return (
                  <TScheduleItem key={index}>
                    <h4>{title}</h4>
                    <p>
                      <a href={location} target="_black">
                        {place}
                      </a>
                    </p>
                  </TScheduleItem>
                );
              })}
            </TScheduleItemRows>
          </TScheduleItems>
        );
      })}
    </TSchedule>
  );
}

export default Schedule;
