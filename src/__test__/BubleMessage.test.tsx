import { cleanup, render, screen } from "@testing-library/react";
import { it, describe, expect, afterEach } from "vitest";
import BubleMessage from "../components/buble-message/BubleMessage";
import exp from "constants";

describe("<BubleMessage />", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render the message", () => {
    render(<BubleMessage message="Hello" username="John Doe" />);

    expect(screen.getByText("Hello")).toBeDefined();
  });

  it("should render the username", () => {
    render(<BubleMessage message="Hello" username="John Doe" />);

    expect(screen.getByTestId("msg-username")).toBeDefined();
    expect(screen.getByText("John Doe")).toBeDefined();
  });

  it("should render the message with the correct class", () => {
    render(<BubleMessage message="Hello" username="John Doe" isUser />);

    expect(
      screen.getByText("Hello").classList.contains("bg-blue-500"),
    ).toBeTruthy();
  });
});
