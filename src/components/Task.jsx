//npm packages
import React from "react";
//project files
import { useList } from "../context/ListContext";
import Checkbox from "./Checkbox";

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
            payload: { task },
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
