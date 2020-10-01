// import MdHeart from "react-ionicons/lib/MdHeart";
// import MdHeartOutline from "react-ionicons/lib/MdHeartOutline";
// import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  img {
    width: 45%;
    max-width: 200px;
    height: auto;
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
        <h3>{props.attributes.title}</h3>
        <img src={props.attributes.cover_image} alt={props.attributes.title} />
      </Link>
    </Wrapper>
  );
};

BookPreview.propTypes = {};

export default BookPreview;
