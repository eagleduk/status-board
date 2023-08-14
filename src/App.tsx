import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Main from "./layouts/Main";
import { styled } from "styled-components";

const BodyStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <BodyStyled>
      <Header />
      <Main />
      <Footer />
    </BodyStyled>
  );
}

export default App;
