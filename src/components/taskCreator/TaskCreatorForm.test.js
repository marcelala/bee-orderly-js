import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TaskCreatorForm from "./TaskCreatorForm";
import { ListContextProvider } from "../../context/list/ListContext";
import ListScreen from "../../screens/ListScreen";

test("Form should toggle after submit", async () => {
  const mockSubmit = jest.fn();
  render(
    <ListContextProvider>
      <TaskCreatorForm setToggleForm={mockSubmit} />
    </ListContextProvider>
  );
  userEvent.type(screen.getByPlaceholderText(/e.g. Tidy/i), "clean");
  userEvent.type(screen.getByPlaceholderText(/e.g. Finish today/i), "tomorrow");
  const buttonElement = screen.getByText(/Submit/i);
  fireEvent.click(buttonElement);
  await waitFor(() => expect(mockSubmit).toHaveBeenCalledTimes(1));
});

test("New task should be added to list after submitting", async () => {
  const mockSubmit = jest.fn();
  render(
    <ListContextProvider>
      <TaskCreatorForm setToggleForm={mockSubmit} />
      <ListScreen />
    </ListContextProvider>
  );
  userEvent.type(screen.getByPlaceholderText(/e.g. Tidy/i), "clean");
  userEvent.type(screen.getByPlaceholderText(/e.g. Finish today/i), "tomorrow");
  const buttonElement = screen.getByText(/Submit/i);
  fireEvent.click(buttonElement);
  const textElement = screen.getByText(/clean/i);
  await waitFor(() => expect(textElement).toBeInTheDocument());
});
