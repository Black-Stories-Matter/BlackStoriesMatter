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

const BookPreview = ({ title, cover }) => {
  return (
    <Wrapper>
      <h3>{title}</h3>
      <img src={cover} alt={title} />
    </Wrapper>
  );
};

BookPreview.propTypes = {};

export default BookPreview;
