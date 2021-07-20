import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
  padding: 40px 80px;

  & nav {
    display: flex;
    justify-content: space-between;

    & ul {
      display: flex;
    }

    & li:not(:last-child) {
      margin-right: 25px;
    }
  }
`;

const Header = () => (
  <StyledHeader>
    <nav>
      <Link to="/">
        <img src="./assets/logo.svg" alt="" />
      </Link>
      <ul>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <a href="#how-it-works">How it works</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
      </ul>
    </nav>
  </StyledHeader>
);

export default Header;
