import React, { useState } from "react";
//project files
import InputField from "./InputField";
import { validateForm } from "./FormValidation";
import { useList } from "../../context/list/ContextHook";

const emptyForm = { taskName: "", price: "" };

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
          price: input.price.toString(),
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
          Item
          <InputField
            type={"text"}
            value={input.taskName}
            placeholder={"e.g. DIHULT"}
            onChange={handleChange}
            id="taskName"
          />
        </label>
        <label htmlFor="inputPrice" title="Price" className="input-price">
          Price
          <InputField
            type={"number"}
            value={input.price}
            placeholder={"e.g. 399"}
            onChange={handleChange}
            id="price"
          />
        </label>
        <button className="btn btn-form" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}
