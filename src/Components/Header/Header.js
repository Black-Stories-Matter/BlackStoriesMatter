// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import { theme } from "../../theme/globalStyle";
import React from "react";
import styled from "styled-components";

// const { black, white, yellow } = theme;

const Wrapper = styled.div`
  width: 100%;
  padding: .5em;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    align-self: center;
  }
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  a:focus {
    font-weight: bold;
  }
`;

const Header = (props) => {
  return (
    <Wrapper>
      <h1>Black Stories Matter</h1>
      <NavBar>
        <Link to="/">Welcome</Link>
        <Link to="/books">Browse Books</Link>
      </NavBar>
    </Wrapper>
  );
};

Header.propTypes = {};

export default Header;
