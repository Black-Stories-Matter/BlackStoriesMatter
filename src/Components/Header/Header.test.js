import "@testing-library/jest-dom/extend-expect";
import { cleanup, render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import Header from "./Header";
import React from "react";

describe("Header", () => {
  afterEach(cleanup);

  it("should render Header", () => {
    const { getByText } = render(
      <Router>
        <Header />
      </Router>
    );
    expect(getByText("Black Stories Matter")).toBeInTheDocument();
  });
});
