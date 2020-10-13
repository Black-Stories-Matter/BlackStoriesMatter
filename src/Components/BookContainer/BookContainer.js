// import { theme } from "../../theme/globalStyle";
// import PropTypes from "prop-types";
import BookPreview from "../BookPreview/BookPreview";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 1em;
`;

const BookCards = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
      <h3>Click any book for more information!</h3>
      <BookCards>{bookPreviews}</BookCards>
    </Wrapper>
  );
};

BookContainer.propTypes = {};

export default BookContainer;
