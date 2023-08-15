import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

const MainStyled = styled.main`
  width: 100%;
  height: 100%;
  min-width: 400px;
`;

function Main() {
  return (
    <MainStyled>
      <Outlet />
    </MainStyled>
  );
}

export default Main;
