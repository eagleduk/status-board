import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { styled } from "styled-components";
import Dates from "./Dates";

const schedule = [
  {
    date: new Date(2023, 7, 19),
    time: 10,
    hour: 2,
    place: "마루공원",
    title: "title",
    location: "",
    team: "",
  },
];

const CalendarWarpper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CalendarHeader = styled.div`
  width: 100%;
  height: 80px;
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;

const CalendarBody = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(auto-fill, 1fr);
  grid-template-columns: repeat(7, 1fr);
  border-width: 1px;
  border-style: solid;
  border-color: "black";
  box-sizing: border-box;
`;

type typeOfDates = {
  time: number;
  date: number;
  day: number;
};

function Calendar() {
  const { year = new Date().getFullYear(), month = new Date().getMonth() } =
    useParams();

  const [prevDates, setPrevDates] = useState<typeOfDates[]>([]);
  const [currentDates, setCurrentDates] = useState<typeOfDates[]>([]);
  const [nextDates, setNextDates] = useState<typeOfDates[]>([]);

  useEffect(() => {
    const viewDate = new Date(+year, +month - 1, 1);

    const startDay = new Date(
      viewDate.getFullYear(),
      viewDate.getMonth(),
      1
    ).getDay();

    setPrevDates([]);
    for (let i = 0; i < startDay; i++) {
      let date = new Date(viewDate.getFullYear(), viewDate.getMonth(), 0 - i);
      setPrevDates((current) => [
        { time: date.getTime(), date: date.getDate(), day: date.getDay() },
        ...current,
      ]);
    }

    const currentMonth = viewDate.getMonth();
    const nextMonth = currentMonth + 1;

    const currentEndDate = new Date(viewDate.getFullYear(), nextMonth, 0);

    setCurrentDates([]);
    for (let i = 1; i <= currentEndDate.getDate(); i++) {
      let date = new Date(viewDate.getFullYear(), viewDate.getMonth(), i);
      setCurrentDates((current) => [
        ...current,
        { time: date.getTime(), date: date.getDate(), day: date.getDay() },
      ]);
    }

    const endDay = currentEndDate.getDay();

    setNextDates([]);
    for (let i = 0; i < 7 - endDay - 1; i++) {
      let date = new Date(
        viewDate.getFullYear(),
        viewDate.getMonth() + 1,
        1 + i
      );
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
          return <Dates key={time} date={date} day={day} />;
        })}

        {currentDates.map(({ time, date, day }) => {
          return <Dates key={time} date={date} day={day} />;
        })}

        {nextDates.map(({ time, date, day }) => {
          return <Dates key={time} date={date} day={day} />;
        })}
      </CalendarBody>
    </CalendarWarpper>
  );
}

export default Calendar;
