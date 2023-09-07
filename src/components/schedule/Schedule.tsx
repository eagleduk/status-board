import ScheduleItem from "./ScheduleItem";
import {
  ScheduleStyled,
  ScheduleItemsStyled,
  ScheduleItemRowsStyled,
  ScheduleItemTitleStyled,
} from "./style/schedule.style";
import { useScheduleData } from "./hooks/schedule.hooks";
import Loading from "../common/Loading";
import { useEffect, useRef } from "react";

function Schedule() {
  const now = Date.now();
  const datas = useScheduleData();
  const items = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    let flag = false;
    for (let i = 0; !flag && i < items.current.length; i++) {
      let key = items.current[i].dataset.date;
      if (new Date(String(key)).getTime() > now) {
        flag = true;
        items.current[i].scrollIntoView();
      }
    }
  }, [datas, items, now]);

  if (!datas) return <Loading />;

  return (
    <ScheduleStyled>
      {Object.entries(datas).map(([key, value], index) => {
        return (
          <ScheduleItemsStyled
            key={key}
            $status={value.passed ? "passed" : "ready"}
            ref={(el: HTMLDivElement) => (items.current[index] = el)}
            data-date={key}
          >
            <ScheduleItemTitleStyled>{key}</ScheduleItemTitleStyled>
            <ScheduleItemRowsStyled>
              {value.data.map((item, index) => {
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
