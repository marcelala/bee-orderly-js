import React from "react";

export default function TaskCreatorButton({ onClick }) {
  return (
    <button className="btn btn-taskCreator" onClick={onClick}>
      Add item
    </button>
  );
}
