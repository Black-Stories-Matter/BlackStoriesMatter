import "@testing-library/jest-dom/extend-expect";
import { cleanup, render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import BookContainer from "./BookContainer";
import React from "react";

describe("BookContainer", () => {
  afterEach(cleanup);

  it("should render BookContainer", () => {
    const { getByText } = render(
      <Router>
        <BookContainer />
      </Router>
    );
    expect(
      getByText("Click any book for more information!")
    ).toBeInTheDocument();
  });

  // it("should filter books on select change", async () => {
  //   const mockBookInfo = [
  //     {
  //       authorName: "Jacqueline Woodson",
  //       formatCode: "HC",
  //       id: "9780399246548",
  //       title: "AFTER TUPAC & D FOSTER",
  //     },
  //   ];
  //   const { getByText, getByLabelText } = render(
  //     <Router>
  //       <BookContainer bookInfo={mockBookInfo} />
  //     </Router>
  //   );
  //   const filter = getByLabelText("Filter books:");
  //   fireEvent.change(filter, { target: { value: "Jacqueline Woodson" } });
  //   expect(getByText("AFTER TUPAC & D FOSTER")).toBeInTheDocument();
  // });
});
