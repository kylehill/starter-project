import React from "react";
import { render, screen } from "@testing-library/react";

import LandingPage from "containers/LandingPage";

test("card renders and is clickable", () => {
  render(<LandingPage />);
  expect(screen.getByText("10")).toBeInTheDocument();
});
