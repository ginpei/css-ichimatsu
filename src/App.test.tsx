import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders steps", () => {
  render(<App />);
  const linkElement = screen.getByText(/Step 0 \/ 6/i);
  expect(linkElement).toBeInTheDocument();
});
