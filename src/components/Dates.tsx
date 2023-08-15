import { styled } from "styled-components";

const DatesStyled = styled.div<{ $day: number }>`
  color: ${(props) =>
    props.$day === 0 ? "red" : props.$day === 6 ? "blue" : "black"};
  border-width: 1px;
  border-style: solid;
  border-color: black;
  box-sizing: border-box;
`;

function Dates({ date, day }: { date: number; day: number }) {
  return <DatesStyled $day={day}>{date}</DatesStyled>;
}

export default Dates;
