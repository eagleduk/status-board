import { styled } from "styled-components";

const FooterStyled = styled.footer`
  width: 100%;
  height: 50px;
`;

function Footer() {
  return <FooterStyled>&copy; SJ.LEE</FooterStyled>;
}

export default Footer;
