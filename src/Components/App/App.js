import { Route, Redirect, Switch } from "react-router-dom";
import BookContainer from "../BookContainer/BookContainer";
import BookDetails from "../BookDetails/BookDetails";
import Error from "../Error/Error";
import Header from "../Header/Header";
import React, { Component } from "react";
import styled from "styled-components";
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
      selectedBook: {},
    };
  }

  componentDidMount = () => {
    fetch("https://black-stories-matter-api.herokuapp.com/api/v1/books", {
      //request headers
      headers: {
        'Access-Control-Allow-Origin': 'https://black-stories-matter-api.herokuapp.com'
      }
    })
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

  setSelectedBook = (book) => {
    this.setState({ selectedBook: book });
  };

  render() {
    return (
      <Wrapper>
        <Header />
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route
            path="/books"
            exact
            render={() => {
              return (
                <BookContainer
                  books={this.state.books}
                  setSelectedBook={this.setSelectedBook}
                />
              );
            }}
          />
          <Route
            path="/books/:id"
            exact
            render={() => {
              return <BookDetails selectedBook={this.state.selectedBook} />;
            }}
          />
          <Route path="/error" component={Error} />
          <Redirect to="/error" />
        </Switch>
      </Wrapper>
    );
  }
}

export default App;
