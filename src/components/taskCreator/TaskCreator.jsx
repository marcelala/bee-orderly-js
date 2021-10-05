import React, { useState } from "react";
//project files
import TaskCreatorForm from "./TaskCreatorForm";
import Button from "../Button";

export default function TaskCreator() {
  const [toggleForm, setToggleForm] = useState(false);
  return (
    <div className="taskCreator">
      <Button
        onClick={() => setToggleForm(!toggleForm)}
        theme={"btn-taskCreator"}
      >
        Add a task
      </Button>
      {toggleForm && (
        <TaskCreatorForm setToggleForm={() => setToggleForm(!toggleForm)} />
      )}
    </div>
  );
}
