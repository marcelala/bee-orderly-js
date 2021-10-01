// npm Packages
import { render, screen, fireEvent } from "@testing-library/react";
// Project files
import Sorter, { handleSorting } from "./Sorter";

test("Should change the value of radio button", async () => {
  const { getByLabelText } = render(<Sorter />);
  const radioButtonElement = getByLabelText("A→Z");
  fireEvent.change(radioButtonElement, { target: { value: "byPrice" } });
  expect(radioButtonElement.value).toBe("byPrice");
});
//does not pass yet, working out  how to mock the function handleSorting
test("Should call handleSorting once", async () => {
  const { getByLabelText } = render(<Sorter />);
  const radioButtonElement = getByLabelText("Price");
  fireEvent.change(radioButtonElement, { target: { value: "byPrice" } });
  expect(handleSorting).toHaveBeenCalledTimes(1);
});
