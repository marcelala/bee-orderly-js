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
  userEvent.type(screen.getByPlaceholderText(/e.g. DIHULT/i), "flisat");
  userEvent.type(screen.getByPlaceholderText(/e.g. 399/i), "2000");
  const buttonElement = screen.getByText(/Submit/);
  fireEvent.click(buttonElement);
  await waitFor(() =>
    expect(mockSubmit).toHaveBeenCalledWith({
      taskName: "flisat",
      price: "2000",
    })
  );
});
