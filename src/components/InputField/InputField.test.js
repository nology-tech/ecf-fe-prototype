import InputField from "./InputField";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("initial tests for ECF client project input field component", () => {
  it("should render the form on the page", () => {
    render(<InputField label="label" />);

    const input = screen.getByRole("textbox");
    const label = screen.getByText("label");

    expect(input).toBeInTheDocument;
    expect(label).toBeInTheDocument;
  });

  it("should take a text input", () => {
    render(<InputField input="label" />);

    const input = screen.getByRole("textbox");

    const inputText = userEvent.type(input, "hello world");

    expect(input).toBeInTheDocument;

    expect(screen.getByRole("textbox")).toHaveValue("hello world");
  });
});
