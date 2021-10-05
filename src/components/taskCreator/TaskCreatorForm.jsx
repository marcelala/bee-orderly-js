import React, { useState } from "react";
//project files
import InputField from "./InputField";
import { validateForm } from "./FormValidation";
import { useList } from "../../context/list/ContextHook";
import Button from "../Button";

const emptyForm = { taskName: "", notes: "" };

export default function TaskCreatorForm({ setToggleForm }) {
  const { dispatch } = useList();
  const [input, setInput] = useState(emptyForm);
  const errors = validateForm(input);
  const isValid = Object.keys(errors).length === 0;

  const handleChange = (e) => {
    e.persist(); //persist the event
    setInput((currentInput) => {
      return {
        ...currentInput,
        [e.target.id]: e.target.value,
      };
    });
  };
  function handleSubmit(event) {
    event.preventDefault();
    if (isValid) {
      dispatch({
        type: "UPDATE_LIST",
        payload: {
          id: Date.now(),
          taskName: input.taskName.toUpperCase().trim(),
          notes: input.notes.toString(),
          isCheckedOff: false,
        },
      });
      setInput(emptyForm);
      setToggleForm();
    }
  }
  return (
    <form onSubmit={handleSubmit} className="taskCreator-form">
      <div className="form">
        <label htmlFor="inputName" title="Item" className="input-name">
          Task
          <InputField
            type={"text"}
            value={input.taskName}
            placeholder={"e.g. Tidy up"}
            onChange={handleChange}
            id="taskName"
            required
          />
        </label>
        <label htmlFor="inputNotes" title="Notes" className="input-price">
          Notes
          <InputField
            type={"text"}
            value={input.notes}
            placeholder={"e.g. Finish today"}
            onChange={handleChange}
            id="notes"
          />
        </label>
        <Button theme={"btn-form"}>Submit</Button>
      </div>
    </form>
  );
}
