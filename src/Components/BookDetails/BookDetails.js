import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    object-fit: cover;
    object-position: 50% 50%;
  }

  p {
    margin-top: 0.25em;
  }
`;

const BookDetails = (props) => {
  return (
    <Wrapper>
      <h2>{props.selectedBook.attributes.title}</h2>
      <img
        src={props.selectedBook.attributes.cover_image}
        alt={props.selectedBook.attributes.title}
      />
      <p>{props.selectedBook.attributes.category}</p>
      <p>{props.selectedBook.attributes.description}</p>
      <p>
        <a href={props.selectedBook.attributes.info_link}>Click here </a>
        to find {props.selectedBook.attributes.title} online or at a library
        near you!
      </p>
    </Wrapper>
  );
};

export default BookDetails;
