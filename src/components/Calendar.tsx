import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { styled } from "styled-components";

const CalendarWarpper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CalendarHeader = styled.p`
  width: 100%;
  height: 80px;
`;

const CalendarBody = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: repeat(7, 1fr);
`;
function Calendar() {
  let { month } = useParams();
  if (!month) month = String(new Date().getMonth());

  const [viewDate, setViewDate] = useState(
    new Date(new Date().setMonth(+month - 1))
  );

  console.log(month, "viewDate", viewDate);

  const [prevDates, setPrevDates] = useState<number[]>([]);
  const [nextDates, setNextDates] = useState<number[]>([]);
  const [endDate, setEndDate] = useState(0);

  useEffect(() => {
    console.log(viewDate);
    const startDay = new Date(
      viewDate.getFullYear(),
      viewDate.getMonth(),
      1
    ).getDay();

    console.log(startDay);

    setPrevDates([]);
    for (let i = 0; i < startDay; i++) {
      let date = new Date(viewDate.getFullYear(), viewDate.getMonth(), 0 - i);
      console.log(i, "++++++", date);
      setPrevDates((current) => [date.getDate(), ...current]);
    }

    const currentMonth = viewDate.getMonth();
    const nextMonth = currentMonth + 1;

    const currentEndDate = new Date(viewDate.getFullYear(), nextMonth, 0);

    // setMonth(currentMonth);
    setEndDate(currentEndDate.getDate());

    const endDay = currentEndDate.getDay();

    setNextDates([]);
    for (let i = endDay; i < 7; i++) {
      let date = new Date(
        viewDate.getFullYear(),
        viewDate.getMonth() + 1,
        1 + i
      );
      setNextDates((current) => [date.getDate(), ...current]);
    }
  }, [viewDate]);

  console.log(viewDate, prevDates);
  return (
    <CalendarWarpper>
      <CalendarHeader> {viewDate.getMonth() + 1} 월</CalendarHeader>
      <CalendarBody>
        {prevDates.map((date) => {
          return <div key={date}>{date}</div>;
        })}
        {Array(endDate)
          .fill(0)
          .map((arr, index) => {
            return <div key={index}>{index + 1}</div>;
          })}
        {nextDates.map((date) => {
          return <div key={date}>{date}</div>;
        })}
      </CalendarBody>
    </CalendarWarpper>
  );
}

export default Calendar;
