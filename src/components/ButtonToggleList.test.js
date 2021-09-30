//npm packages
import { render, screen, fireEvent } from "@testing-library/react";
// Project files
import ButtonToggleList from "./ButtonToggleList";
test("Should fire an event when pressed", () => {
  const mockMethod = jest.fn();
  render(<ButtonToggleList onClick={mockMethod} />);
  const buttonElement = screen.getByText(/checked-off tasks/i);
  fireEvent.click(buttonElement);
  expect(mockMethod).toHaveBeenCalledTimes(1);
});
test("Button text should be Hide checked-off tasks when toggleList is true.", () => {
  const mockToggleList = true;
  render(<ButtonToggleList toggleList={mockToggleList} />);
  const textElement = screen.getByText(/hide checked-off tasks/i);
  expect(textElement).toBeInTheDocument();
});

test("Button text should be View checked-off tasks when toggleList is false.", () => {
  const mockToggleList = false;
  render(<ButtonToggleList toggleList={mockToggleList} />);
  const textElement = screen.getByText(/view checked-off tasks/i);
  expect(textElement).toBeInTheDocument();
});
