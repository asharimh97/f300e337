import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import ChatContent from "../components/chat-box/ChatContent";

describe("<ChatContent />", () => {
  afterEach(() => {
    cleanup();
  });

  it("should not render the chat content upon initial load", () => {
    // Add your test here
    render(<ChatContent />);

    const chatContainer = screen.getByTestId("chatbox");

    expect(chatContainer).toBeInTheDocument();
    expect(chatContainer.children.length).toBe(0);
  });
});
