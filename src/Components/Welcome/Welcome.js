import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 1em;
`;

const Welcome = () => {
  return (
    <Wrapper>
      <h2>
        Our mission is to share children's books by Black authors where readers
        can find mirrors and windows.
      </h2>
      <h3>What are mirrors and windows in books?</h3>
      <p>
        Mirrors reflect a reader's own life. Seeing yourself, your family and
        your culture being valued in the world of a book provides a powerful
        sense of belonging.
      </p>
      <p>
        Books that are windows offer views into other experiences. Windows teach
        people to understand and appreciate differences.
      </p>
      <p>
        Please support the Black authors you find here by buying their books,
        requesting them at libraries, or donating copies to schools and
        community centers!
      </p>
    </Wrapper>
  );
};

export default Welcome;
