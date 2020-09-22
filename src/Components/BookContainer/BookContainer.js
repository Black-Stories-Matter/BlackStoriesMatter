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

const BookContainer = ({ books }) => {
  const bookPreviews = books.map((book) => {
    return (
      <BookPreview
        authors={book.attributes.authors}
        category={book.attributes.category}
        cover={book.attributes.cover_image}
        description={book.attributes.description}
        info_link={book.attributes.info_link}
        title={book.attributes.title}
      />
    );
  });
  return (
    <Wrapper>
      <h2>Click on any book for more information!</h2>
      {bookPreviews}
    </Wrapper>
  );
};

BookContainer.propTypes = {};

export default BookContainer;
