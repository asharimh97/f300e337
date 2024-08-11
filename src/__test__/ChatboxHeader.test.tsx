import { render, screen } from "@testing-library/react";
import UserContext from "../contexts/UserContext";
import ChatboxHeader from "../components/chat-box/ChatboxHeader";
import { describe, expect, it } from "vitest";

/**
 * A custom render to setup providers. Extends regular
 * render options with `providerProps` to allow injecting
 * different scenarios to test with.
 *
 * @see https://testing-library.com/docs/react-testing-library/setup#custom-render
 */
const customRender = (ui: any, { providerProps, ...renderOptions }: any) => {
  return render(
    <UserContext.Provider {...providerProps}>{ui}</UserContext.Provider>,
    renderOptions,
  );
};

describe("<ChatboxHeader />", () => {
  it("should render the username", () => {
    customRender(<ChatboxHeader />, {
      providerProps: { value: "John Doe" },
    });

    expect(screen.getByText("John Doe")).toBeDefined();
  });
});
