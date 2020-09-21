import { theme } from "../../theme/globalStyle";
import BookPreview from "../BookPreview/BookPreview";
import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";

const { black, white } = theme;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5em;
`;

class BookContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
      favoritesIds: [],
      filteredByAuthor: [],
      useFavorites: false,
    };
  }

  render() {
    return (
      <Wrapper>
        <h2>All Books</h2>
      </Wrapper>
    );
  }
}

BookContainer.propTypes = {
  bookInfo: PropTypes.array,
};

export default BookContainer;
