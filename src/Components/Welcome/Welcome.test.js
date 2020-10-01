import "@testing-library/jest-dom/extend-expect";
import { cleanup, render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import Welcome from "./Welcome";
import React from "react";

describe("Welcome", () => {
  afterEach(cleanup);

  it("should render Welcome page", () => {
    const { getByText } = render(
      <Router>
        <Welcome />
      </Router>
    );
    expect(getByText("Our mission")).toBeInTheDocument();
  });
});
