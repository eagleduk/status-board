import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

const MainStyled = styled.main`
  max-width: 100%;
  height: 100%;
  padding: 20px 8px;
  box-sizing: border-box;
  overflow-y: auto;
`;

function Main() {
  return (
    <MainStyled>
      <Outlet />
    </MainStyled>
  );
}

export default Main;
