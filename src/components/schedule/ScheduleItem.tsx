import { ScheduleItemStyled } from "./style/schedule.style";
import { TScheduleItem } from "./type/schedule.type";

function ScheduleItem({
  item: { time, hour, team, location, place },
}: TScheduleItem) {
  return (
    <ScheduleItemStyled>
      <h4>
        {time}:00 ~ {time + hour}:00
      </h4>
      <div>
        <p>
          <span>A</span>
          vs
          <span>{team}</span>
        </p>
        <p>
          <a
            href={`https://map.kakao.com/?w3w=${location}`}
            target="_black"
            title={place}
          >
            <span>🚻</span>
          </a>
        </p>
      </div>
    </ScheduleItemStyled>
  );
}

export default ScheduleItem;
