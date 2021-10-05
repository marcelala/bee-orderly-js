import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TaskCreatorForm from "./TaskCreatorForm";
import { ListContextProvider } from "../../context/list/ListContext";

test("rendering and submitting a basic Formik form", async () => {
  const mockSubmit = jest.fn();
  const { getByPlaceholderText } = render(
    <ListContextProvider>
      <TaskCreatorForm onSubmit={mockSubmit} />
    </ListContextProvider>
  );
  userEvent.type(screen.getByPlaceholderText(/e.g. Tidy/i), "clean");
  userEvent.type(
    screen.getByPlaceholderText(/e.g. Finish today/i),
    "due tomorrow"
  );
  const buttonElement = screen.getByText(/Submit/);
  fireEvent.click(buttonElement);
  await waitFor(() =>
    expect(mockSubmit).toHaveBeenCalledWith({
      taskName: "clean",
      notes: "due tomorrow",
    })
  );
});
