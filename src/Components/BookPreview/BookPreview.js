import MdHeart from "react-ionicons/lib/MdHeart";
import MdHeartOutline from "react-ionicons/lib/MdHeartOutline";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 1em;
`;

const BookPreview = (props) => {
  return (
    <Wrapper>
      <h3>Title</h3>
      <h4>Author</h4>
      {/* <img src="" alt=""> */}
      <p>description</p>
      <p>category</p>
      {/* <a href="">More info</a> */}
    </Wrapper>
  );
};

BookPreview.propTypes = {
  book: PropTypes.object,
  favorite: PropTypes.bool,
  id: PropTypes.string,
  toggleFavorites: PropTypes.func,
};

export default BookPreview;
