import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  background: blue;
`;

const Navigation = () => {
  return (
    <Nav>
      <ul>
        <li>
          <Link to="/">Articles</Link>
        </li>
        <li>
          <Link to="/swlist">Star wars characters list</Link>
        </li>
      </ul>
    </Nav>
  );
};

export default Navigation;
