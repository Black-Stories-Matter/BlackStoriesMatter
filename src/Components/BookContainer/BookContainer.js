// import { theme } from "../../theme/globalStyle";
// import PropTypes from "prop-types";
import BookPreview from "../BookPreview/BookPreview";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 1em;
`;

// add in filter by category functionality
// add in favorite functionality

const BookContainer = (props) => {
  const bookPreviews = props.books.map((book) => {
    return (
      <BookPreview
        {...book}
        key={book.id}
        setSelectedBook={props.setSelectedBook}
      />
    );
  });
  return (
    <Wrapper>
      <h2>Click any book for more information!</h2>
      {bookPreviews}
    </Wrapper>
  );
};

BookContainer.propTypes = {};

export default BookContainer;
