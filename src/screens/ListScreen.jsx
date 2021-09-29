//npm packages
import React, { useState } from "react";
//projectFiles
import TaskCreator from "../components/TaskCreator/TaskCreator";
import TaskList from "../components/TaskList";
import ButtonToggleList from "../components/ButtonToggleList";
import { useList } from "../context/ContextHook";

export default function ListScreen() {
  const { list } = useList();
  const [toggleList, setToggleList] = useState(false);
  const pendingTasks = list.filter((task) => task.isCheckedOff === false);
  const checkedOffItems = list.filter((task) => task.isCheckedOff === true);
  return (
    <section className="list-screen">
      <h5>
        Welcome back!
        <br />
        Looks like you still have some items left on your list
      </h5>
      <TaskCreator />
      <div className="pending-list">
        <TaskList items={pendingTasks} />
      </div>
      <ButtonToggleList
        toggleList={toggleList}
        onClick={() => setToggleList(!toggleList)}
      />
      <div className="checked-off-list">
        <TaskList items={checkedOffItems} />
      </div>
    </section>
  );
}
