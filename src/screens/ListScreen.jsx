//npm packages
import React, { useState } from "react";
//projectFiles
import TaskCreator from "../components/taskCreator/TaskCreator";
import TaskList from "../components/taskList/TaskList";
import ButtonToggleList from "../components/ButtonToggleList";
import { useList } from "../context/list/ContextHook";
import Sorter from "../components/Sorter";

export default function ListScreen() {
  //global state
  const { list } = useList();
  const [toggleList, setToggleList] = useState(false);
  const pendingTasks = list.filter((task) => task.isCheckedOff === false);
  const checkedOffItems = list.filter((task) => task.isCheckedOff === true);
  return (
    <section className="list-screen">
      <div className="text-box">
        <h5>Welcome back! </h5>
        <br />
        <p>Looks like you still have some items left on your list</p>
      </div>
      <TaskCreator />
      <Sorter />
      <div className="pending-list">
        <TaskList items={pendingTasks} />
      </div>
      <ButtonToggleList
        toggleList={toggleList}
        onClick={() => setToggleList(!toggleList)}
      />
      {toggleList && (
        <div className="checked-off-list">
          <TaskList items={checkedOffItems} />
        </div>
      )}
    </section>
  );
}
