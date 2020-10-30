import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Card from "components/Card";
import { CardColor } from "types/card";

test("card renders and is clickable", () => {
  const mockFn = jest.fn();
  render(
    <Card
      clickable={true}
      discardable={true}
      card={{ color: CardColor.Red, value: 10 }}
      onClick={mockFn}
    />
  );

  userEvent.click(screen.getByText("10"));
  expect(mockFn).toHaveBeenCalled();
});

test("card renders and can be set to not clickable", () => {
  const mockFn = jest.fn();
  render(
    <Card
      clickable={false}
      discardable={true}
      card={{ color: CardColor.Red, value: 10 }}
      onClick={mockFn}
    />
  );

  userEvent.click(screen.getByText("10"));
  expect(mockFn).not.toHaveBeenCalled();
});

test("onClick can be omitted", () => {
  render(<Card clickable={false} discardable={true} card={{ color: CardColor.Red, value: 10 }} />);

  userEvent.click(screen.getByText("10"));
  expect(screen.getByText("10")).toBeInTheDocument();
});
