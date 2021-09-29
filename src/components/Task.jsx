//npm packages
import React from "react";
//project files
import Checkbox from "./Checkbox";
import { useList } from "../context/ContextHook";

export default function Task({ task }) {
  //constants
  const { dispatch } = useList();
  const { name, price, isCheckedOff, id } = task;
  //functions
  return (
    <article className="list-item">
      <Checkbox
        checked={isCheckedOff}
        onChange={() =>
          dispatch({
            type: "UPDATE_TASK",
            payload: task,
          })
        }
      />
      <div className="item-details">
        <span className="name"> {name}</span>
        <span className="price"> {price} SEK</span>
      </div>
    </article>
  );
}
