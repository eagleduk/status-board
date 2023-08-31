import ScheduleItem from "./ScheduleItem";
import {
  ScheduleStyled,
  ScheduleItemsStyled,
  ScheduleItemRowsStyled,
  ScheduleItemTitleStyled,
} from "./style/schedule.style";
import { useScheduleData } from "./hooks/schedule.hooks";
import Loading from "../common/Loading";

function Schedule() {
  const datas = useScheduleData();
  if (!datas) return <Loading />;
  return (
    <ScheduleStyled>
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
