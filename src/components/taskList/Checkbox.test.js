// npm Packages
import { render, screen, fireEvent } from "@testing-library/react";
// Project files
import Checkbox from "./Checkbox";

test("Should fire an event on change", async () => {
  const mockMethod = jest.fn();
  render(<Checkbox onChange={mockMethod} />);
  const inputCheckboxElement = screen.getByTestId("checkbox");
  fireEvent.click(inputCheckboxElement);
  expect(mockMethod).toHaveBeenCalledTimes(1);
});

test("Should be checked when status is true", async () => {
  const mockStatus = true;
  const mockMethod = jest.fn();
  render(<Checkbox checked={mockStatus} onChange={mockMethod} />);
  const inputCheckboxElement = screen.getByTestId("checkbox");
  expect(inputCheckboxElement.checked).toBe(true);
});

test("Should not be checked when status is false", async () => {
  const mockStatus = false;
  const mockMethod = jest.fn();
  render(<Checkbox checked={mockStatus} onChange={mockMethod} />);
  const inputCheckboxElement = screen.getByTestId("checkbox");
  expect(inputCheckboxElement.checked).toBe(false);
});
