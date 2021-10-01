// npm Packages
import { render, screen, fireEvent } from "@testing-library/react";
// Project files
import InputField from "./InputField";

const setup = () => {
  const utils = render(<InputField />);
  const input = screen.getByTestId("input");
  return {
    input,
    ...utils,
  };
};

test("Should not have focus", async () => {
  const { input } = setup();
  fireEvent.blur(input, { target: { value: "23" } });
  expect(input).not.toHaveFocus();
});

test("Should render user input", async () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: "23" } });
  expect(input.value).toBe("23");
});
