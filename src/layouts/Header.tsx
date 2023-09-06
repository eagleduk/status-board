import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const HeaderStyled = styled.header`
  width: 100%;
  height: 35px;
  nav {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
  }

  ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    li {
      margin-right: 15px;
    }

    a {
      padding: 10px 5px;
      text-decoration: none;

      &:hover {
        background-color: red;
      }
    }
  }
`;

function Header() {
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);

  useEffect(() => {
    const date = new Date();

    setYear(date.getFullYear());
    setMonth(date.getMonth());
  }, []);

  return (
    <HeaderStyled>
      <nav>
        <ul>
          <li>
            <Link to={`${process.env.PUBLIC_URL}/info`}>info</Link>
          </li>
          <li>
            <Link
              to={`${process.env.PUBLIC_URL}/calendar/${year}/${month + 1}`}
            >
              calendar
            </Link>
          </li>
          <li>
            <Link to={`${process.env.PUBLIC_URL}/schedule/`}>schedule</Link>
          </li>
          <li>
            <Link to={`${process.env.PUBLIC_URL}/address`}>address</Link>
          </li>
        </ul>
      </nav>
    </HeaderStyled>
  );
}

export default Header;
