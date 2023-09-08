import Emblem from "../common/Emblem";
import { ScheduleItemStyled } from "./style/schedule.style";
import { TScheduleItem } from "./type/schedule.type";
import { IoLocationOutline } from "react-icons/io5";
import { BsFillBellFill, BsFillLightningChargeFill } from "react-icons/bs";

function ScheduleItem({
  item: { time, hour, team, location, place, isHome, standard },
}: TScheduleItem) {
  const VersusText = (team: string | null, isHome: boolean) => {
    if (isHome) {
      return (
        <>
          <Emblem />
          vs
          <span></span>
        </>
      );
    } else {
      return (
        <>
          <span></span>
          vs
          <Emblem />
        </>
      );
    }
  };

  return (
    <ScheduleItemStyled>
      <div>
        <h4>{time && hour ? `${time}:00 ~ ${time + hour}:00` : ""}</h4>
        <h4>{standard ? <BsFillBellFill /> : <BsFillLightningChargeFill />}</h4>
      </div>
      <div>
        <p>{VersusText(team, isHome)}</p>
        <p>
          {location && (
            <a
              href={`https://map.kakao.com/?w3w=${location}`}
              target="_black"
              title={place ? place : ""}
            >
              <span>
                <IoLocationOutline />
              </span>
            </a>
          )}
        </p>
      </div>
    </ScheduleItemStyled>
  );
}

export default ScheduleItem;
