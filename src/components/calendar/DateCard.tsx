import { TDateCard } from "./type/calendar.type";
import { DateStyled } from "./style/calendar.style";

function DateCard({ date, day, schedule }: TDateCard) {
  return (
    <DateStyled $day={day}>
      <p>
        <span>{date}</span>
      </p>
      {schedule?.map(({ title, time, hour, team, location, place }) => {
        return (
          <h1 key={time}>
            {place} {time}h +{hour}hour
          </h1>
        );
      })}
    </DateStyled>
  );
}

export default DateCard;
