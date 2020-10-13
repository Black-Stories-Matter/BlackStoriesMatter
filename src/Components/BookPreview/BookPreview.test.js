import "@testing-library/jest-dom/extend-expect";
import { cleanup, render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import BookPreview from "./BookPreview";
import React from "react";

describe("BookPreview", () => {
  afterEach(cleanup);

  it("should render BookPreview", () => {
    const { getByText } = render(
      <Router>
        <BookPreview title={"Becoming Kareem"} />
      </Router>
    );
    expect(getByText("Becoming Kareem")).toBeInTheDocument();
  });
});
