import { styled } from "styled-components";

export const CalendarWarpper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const CalendarHeader = styled.div`
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

export const CalendarBody = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(100px, 1fr));
  grid-template-columns: repeat(7, 1fr);
  border-width: 1px;
  border-style: solid;
  border-color: black;
  box-sizing: border-box;
`;

export const DateStyled = styled.div<{ $day: number }>`
  height: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: black;
  box-sizing: border-box;
  p {
    color: white;
    span {
      display: flex;
      width: 24px;
      height: 24px;
      background-color: ${(props) =>
        props.$day === 0 ? "red" : props.$day === 6 ? "blue" : "black"};
      border-radius: 50%;
      justify-content: center;
      align-items: center;
    }
  }
`;
