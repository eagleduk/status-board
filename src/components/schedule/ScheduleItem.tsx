import { ScheduleItemStyled } from "./style/schedule.style";
import { TScheduleItem } from "./type/schedule.type";
import { IoLocationOutline } from "react-icons/io5";

function ScheduleItem({
  item: { time, hour, team, location, place, isHome },
}: TScheduleItem) {
  const VersusText = (team: string | undefined, isHome: boolean) => {
    if (isHome) {
      return (
        <>
          <span>A</span>
          vs
          <span></span>
        </>
      );
    } else {
      return (
        <>
          <span></span>
          vs
          <span>A</span>
        </>
      );
    }
  };

  return (
    <ScheduleItemStyled>
      <h4>
        {time}:00 ~ {time + hour}:00
      </h4>
      <div>
        <p>{VersusText(team, isHome)}</p>
        <p>
          <a
            href={`https://map.kakao.com/?w3w=${location}`}
            target="_black"
            title={place}
          >
            <span>
              <IoLocationOutline />
            </span>
          </a>
        </p>
      </div>
    </ScheduleItemStyled>
  );
}

export default ScheduleItem;
