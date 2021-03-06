//npm packages
import React, { useState } from "react";
//projectFiles
import TaskList from "../components/taskList/TaskList";
import ButtonToggleList from "../components/ButtonToggleList";
import { useList } from "../context/list/ContextHook";
import Sorter from "../components/Sorter";
import HeroMedia from "../assets/images/hero-img.png";
import Button from "../components/Button";
import TaskCreator from "../components/taskCreator/TaskCreator";

export default function ListScreen() {
  //global state
  const { list, dispatch } = useList();
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
        <h3>Welcome back!</h3>
        <br />
        <p>
          Looks like you still have{" "}
          <b>
            {" "}
            {numberOfPendingTasks()}{" "}
            {numberOfPendingTasks() === 1 ? "task" : "tasks"}{" "}
          </b>{" "}
          left on your to-do list.
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
      <Button
        theme={"secondary"}
        onClick={() => dispatch({ type: "SET_LIST", payload: [] })}
      >
        Clear list
      </Button>
    </section>
  );
}
