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
      books: [],
      error: null,
      isLoaded: false,
    };
  }

  componentDidMount = () => {

    fetch("https://black-stories-matter-api.herokuapp.com/api/v1/books")
      .then((response) => response.json())
      .then(
        (data) => {
          this.setState({ books: data.data, isLoaded: true });
        },
        (error) => {
          this.setState({ error, isLoaded: true });
        }
      );
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
