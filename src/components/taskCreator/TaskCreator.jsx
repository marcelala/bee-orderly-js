import React, { useState } from "react";
//project files
import TaskCreatorForm from "./TaskCreatorForm";
import TaskCreatorButton from "./TaskCreatorButton";

export default function TaskCreator() {
  const [toggleForm, setToggleForm] = useState(false);
  return (
    <div className="taskCreator">
      <TaskCreatorButton onClick={() => setToggleForm(!toggleForm)} />
      {toggleForm && (
        <TaskCreatorForm setToggleForm={() => setToggleForm(!toggleForm)} />
      )}
    </div>
  );
}
