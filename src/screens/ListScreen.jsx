//npm packages
import React, { useState } from "react";
//projectFiles
import { useList } from "../context/ListContext";
import TaskCreator from "../components/TaskCreator/TaskCreator";
//import Sorter from "../components/Sorter";
import TaskList from "../components/TaskList";
import ButtonToggleList from "../components/ButtonToggleList";

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
        <TaskList list={pendingTasks} />
      </div>
      <ButtonToggleList
        toggleList={toggleList}
        onClick={() => setToggleList(!toggleList)}
      />
      <div className="checked-off-list">
        <TaskList list={checkedOffItems} />
      </div>
    </section>
  );
}
