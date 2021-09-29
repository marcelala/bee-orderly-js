import React, { useState } from "react";
//project files
import TaskCreatorForm from "./TaskCreatorForm";
import TaskCreatorButton from "./TaskCreatorButton";

export default function TaskCreator() {
	const [toggleForm, setToggleForm] = useState(false);
  return (
		<div className="taskCreator">
			<div className="taskCreator-button-wrapper">
				<TaskCreatorButton onClick={() => setToggleForm(!toggleForm)} />
			</div>
			{toggleForm && (
				<TaskCreatorForm toggleForm={() => setToggleForm(!toggleForm)} />
			)}
		</div>
	);
}
