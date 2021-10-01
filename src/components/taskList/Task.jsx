//npm packages
import React from "react";
//project files
import Checkbox from "./Checkbox";
import { useList } from "../../context/list/ContextHook";

export default function Task({ task }) {
  //constants
  const { dispatch } = useList();
  const { taskName, price, isCheckedOff } = task;
  //functions
  return (
    <article className="task">
      <Checkbox
        checked={isCheckedOff}
        onChange={() =>
          dispatch({
            type: "UPDATE_TASK",
            payload: task,
          })
        }
      />
      <div className="task-details">
        <span className="name"> {taskName}</span>
        <span className="price"> {price} SEK</span>
      </div>
    </article>
  );
}
