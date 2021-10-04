//npm packages
import React, { useState } from "react";
//projectFiles
import TaskCreator from "../components/taskCreator/TaskCreator";
import TaskList from "../components/taskList/TaskList";
import ButtonToggleList from "../components/ButtonToggleList";
import { useList } from "../context/list/ContextHook";
import Sorter from "../components/Sorter";
import HeroMedia from "../assets/images/hero-img.png";

export default function ListScreen() {
  //global state
  const { list } = useList();
  const clonedList = [...list];
  const [toggleList, setToggleList] = useState(false);
  const pendingTasks = clonedList.filter((task) => task.isCheckedOff === false);
  const checkedOffItems = clonedList.filter(
    (task) => task.isCheckedOff === true
  );
  const numberOfPendingTasks = () => {
    let count = 0;
    list.forEach((task) => {
      if (!task.isCheckedOff) count++;
    });
    return count;
  };

  return (
    <section className="list-screen">
      <div className="text-box">
        <h5>Welcome back to Bee Orderly </h5>

        <br />
        <p>
          Looks like you still have {numberOfPendingTasks()}{" "}
          {numberOfPendingTasks() === 1 ? "task" : "tasks"} left on your list
        </p>
      </div>
      <img
        src={HeroMedia}
        className="hero-media"
        alt="beehive illustration with a few bees flying around it"
      />
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
