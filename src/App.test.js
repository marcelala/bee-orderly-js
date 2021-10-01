import { render, screen } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";
import App from "./App";
import { ListContextProvider } from "./context/list/ListContext";
import { useList } from "./context/list/ContextHook";
/**
 * 3 As of Testing
 * Arrange:
 * Is to set up the stage to this particular test. In our frontend case means to mount a component.
 * Act:
 * Do something in order to expect some behaviour.
 * Assert:
 * To confirm or denny that whatever we did in the "Act" part was the expected behaviour
 */

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome/i);
  expect(linkElement).toBeInTheDocument();
});

test("Should show the welcome screen if the list is empty", () => {
  const fakeData = [];
  Storage.prototype.getItem = jest.fn(() => JSON.stringify(fakeData));
  render(
    <ListContextProvider>
      <App />
    </ListContextProvider>
  );
  const textElement = screen.getByText(/EIKA's shopping list/i);
  expect(textElement).toBeInTheDocument();
});

test("Should show the list screen if the list is not empty", () => {
  // Arrange
  const mockTask = {
    id: 0,
    name: "Flisat",
    price: 1220,
    isCheckedOff: false,
  };
  const mockData = [{ mockTask }];
  Storage.prototype.getItem = jest.fn(() => JSON.stringify(mockData));
  const { list: loadedList } = renderHook(() => useList());
  render(
    <ListContextProvider>
      <App />
    </ListContextProvider>
  );
  const textElement = screen.getByText(/welcome/i);
  expect(textElement).toBeInTheDocument();
});
