import { Link } from "react-router-dom";
import { theme } from "../../theme/globalStyle";
import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const Error = styled.p``;

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [purpose, setPurpose] = useState("");
  const [error, setError] = useState("");

  const checkInputs = () => {
    return username !== "" && password !== "" && purpose !== "";
  };

  const handleClick = () => {
    checkInputs()
      ? props.setUser({
          username: username,
          purpose: purpose,
        })
      : setError("Please complete all inputs.");
  };

  return (
    <Wrapper>
      <h3>Login to find stories!</h3>
      <form>
        <label htmlFor="username">Enter your username: </label>
        <input
          id="username"
          name="username"
          placeholder="username"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label htmlFor="password">Enter your password: </label>
        <input
          id="password"
          name="password"
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <label htmlFor="purpose">Are you looking for mirrors or windows?</label>
        <select id="purpose" onChange={(e) => setPurpose(e.target.value)}>
          <option value="''">- Please share why you are here -</option>
          <option value="mirrors">Mirrors</option>
          <option value="windows">Windows</option>
        </select>
        <Error>{error}</Error>
        <Link to={checkInputs() ? "/Books" : "/"}>
          <button onClick={handleClick}>Login</button>
        </Link>
      </form>
    </Wrapper>
  );
};

Login.propTypes = {
  setUser: PropTypes.func,
};

export default Login;
