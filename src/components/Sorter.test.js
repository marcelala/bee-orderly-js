// npm Packages
import { render, screen, fireEvent } from "@testing-library/react";
// Project files
import Sorter from "./Sorter";

const mockTasks = [
  {
    id: 1633461796559,
    isCheckedOff: false,
    notes: "lunch and dinner",
    taskName: "Cook",
  },
  {
    id: 1633462171163,
    isCheckedOff: false,
    notes: "kitchen",
    taskName: "Clean",
  },
  {
    id: 1633462239774,
    isCheckedOff: false,
    notes: "towels",
    taskName: "Laundry",
  },
];

test("Should change the radio button selected", async () => {
  const { getByLabelText } = render(<Sorter />);
  const radioButtonElement = getByLabelText("A→Z");
  fireEvent.change(radioButtonElement, { target: { value: "byDate" } });
  expect(radioButtonElement.value).toBe("byDate");
});
