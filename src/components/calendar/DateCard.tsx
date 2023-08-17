import { TDateCard } from "./type/calendar.type";
import { DateStyled } from "./style/calendar.style";

function DateCard({ date, day, schedule, viewMonth = false }: TDateCard) {
  return (
    <DateStyled $day={day} $viewMonth={viewMonth}>
      <p>
        <span>{date}</span>
      </p>
      {schedule?.map(({ title, time, hour, team, location, place }) => {
        return (
          <a key={time} href={location} target="_blank" rel="noreferrer">
            <h1>
              {place} {time}h +{hour}h
            </h1>
          </a>
        );
      })}
    </DateStyled>
  );
}

export default DateCard;
