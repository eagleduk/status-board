import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import DateCard from "./DateCard";
import { TSchedules, TDate } from "./type/calendar.type";
import {
  CalendarBody,
  CalendarHeader,
  CalendarWarpper,
} from "./style/calendar.style";

const schedule: TSchedules = {
  1692370800000: [
    {
      time: 10,
      hour: 2,
      place: "마루공원",
      title: "title1",
      location: "",
      team: "",
    },
    {
      time: 12,
      hour: 2,
      place: "마루공원",
      title: "title2",
      location: "",
      team: "",
    },
  ],
};

function Calendar() {
  const { year = new Date().getFullYear(), month = new Date().getMonth() } =
    useParams();

  const [prevDates, setPrevDates] = useState<TDate[]>([]);
  const [currentDates, setCurrentDates] = useState<TDate[]>([]);
  const [nextDates, setNextDates] = useState<TDate[]>([]);

  useEffect(() => {
    const viewDate = new Date(+year, +month - 1, 1);
    const viewYear = viewDate.getFullYear();
    const viewMonth = viewDate.getMonth();

    const startDay = new Date(viewYear, viewMonth, 1).getDay();

    setPrevDates([]);
    for (let i = 0; i < startDay; i++) {
      let date = new Date(viewYear, viewMonth, 0 - i);
      setPrevDates((current) => [
        { time: date.getTime(), date: date.getDate(), day: date.getDay() },
        ...current,
      ]);
    }

    const currentMonth = viewMonth;
    const nextMonth = currentMonth + 1;

    const currentEndDate = new Date(viewYear, nextMonth, 0);

    setCurrentDates([]);
    for (let i = 1; i <= currentEndDate.getDate(); i++) {
      let date = new Date(viewYear, viewMonth, i);
      setCurrentDates((current) => [
        ...current,
        { time: date.getTime(), date: date.getDate(), day: date.getDay() },
      ]);
    }

    const endDay = currentEndDate.getDay();

    setNextDates([]);
    for (let i = 0; i < 7 - endDay - 1; i++) {
      let date = new Date(viewYear, viewMonth + 1, 1 + i);
      setNextDates((current) => [
        ...current,
        { time: date.getTime(), date: date.getDate(), day: date.getDay() },
      ]);
    }
  }, [year, month]);

  const prevLinkPath = () => {
    return `/calendar/${+month === 1 ? +year - 1 : year}/${
      +month === 1 ? 12 : +month - 1
    }`;
  };
  const nextLinkPath = () => {
    return `/calendar/${+month === 12 ? +year + 1 : year}/${
      +month === 12 ? 1 : +month + 1
    }`;
  };
  return (
    <CalendarWarpper>
      <CalendarHeader>
        <ul>
          <li>
            <Link to={prevLinkPath()}>
              <span>{"<"}</span>
            </Link>
          </li>
          <li>{month} 월</li>
          <li>
            <Link to={nextLinkPath()}>
              <span>{">"}</span>{" "}
            </Link>
          </li>
        </ul>
      </CalendarHeader>
      <CalendarBody>
        {prevDates.map(({ time, date, day }) => {
          return <DateCard key={time} date={date} day={day} />;
        })}

        {currentDates.map(({ time, date, day }) => {
          return (
            <DateCard
              key={time}
              date={date}
              day={day}
              schedule={schedule[time]}
            />
          );
        })}

        {nextDates.map(({ time, date, day }) => {
          return <DateCard key={time} date={date} day={day} />;
        })}
      </CalendarBody>
    </CalendarWarpper>
  );
}

export default Calendar;
