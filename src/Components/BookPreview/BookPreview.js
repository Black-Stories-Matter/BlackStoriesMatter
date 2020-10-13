// import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  img {
    max-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    object-fit: cover;
    object-position: 50% 50%;
  }
`;

const BookCard = styled.div`
  border: solid white 1px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5em;
  h4 {
    margin: 0.25em;
  }
`;

const BookPreview = (props) => {
  const pathName = `/books/${props.id}`;

  const handleSelectedBook = () => {
    const bookDetails = { ...props };
    props.setSelectedBook(bookDetails);
  };

  return (
    <Wrapper>
      <Link to={pathName} onClick={handleSelectedBook}>
        <BookCard>
          <h4>{props.attributes.title}</h4>
          <img
            src={props.attributes.cover_image}
            alt={props.attributes.title}
          />
        </BookCard>
      </Link>
    </Wrapper>
  );
};

BookPreview.propTypes = {};

export default BookPreview;
