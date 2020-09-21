import { Link } from "react-router-dom";
import { theme } from "../../theme/globalStyle";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const { black, white, yellow } = theme;

const Wrapper = styled.div`
  background: ${black};
  color: ${white};
  width: 100%;
  padding: 0.5em;
`;

const Header = (props) => {
  return (
    <Wrapper>
      <h1>Black Stories Matter</h1>
      <Link to="/">About BSM</Link>
      <Link to="/books">Books</Link>
    </Wrapper>
  );
};

Header.propTypes = {};

export default Header;
