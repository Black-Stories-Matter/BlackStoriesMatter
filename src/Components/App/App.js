// import Login from "../Login/Login";
import { fetchBooks } from "../../apiCalls";
import { GlobalStyle, theme } from "../../theme/globalStyle";
import { Route, Redirect, Switch } from "react-router-dom";
import BookContainer from "../BookContainer/BookContainer";
import Error from "../Error/Error";
import Header from "../Header/Header";
import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import Welcome from "../Welcome/Welcome";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookDetails: [],
    };
  }

  componentDidMount = () => {
    let requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://black-stories-matter-api.herokuapp.com/api/v1/books",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return <Welcome />;
              }}
            />
            <Route
              exact
              path="/books"
              render={() => {
                return <BookContainer />;
              }}
            />
            <Route path="/error" render={() => <Error />} />
            <Redirect to="/error" />
          </Switch>
        </Wrapper>
        <GlobalStyle />
      </ThemeProvider>
    );
  }
}

export default App;
