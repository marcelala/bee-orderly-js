import React from "react";
//project files
import HeroMedia from "./../assets/images/hero-img.png";
import TaskCreator from "../components/taskCreator/TaskCreator";

export default function WelcomeScreen() {
  return (
    <section className="welcome">
      <img
        src={HeroMedia}
        className="hero-media"
        alt="beehive illustration with a few bees flying around it"
      />
      <div className="welcome-wrapper">
        <h3> Welcome! We’re so glad you’re here! </h3>
        <h4>
          You can use our to-do list to help you plan and get organised. This
          way you won't forget anything.
        </h4>
        <h4>
          Just press the button below and fill up the form with the task's name
          and notes, if any, to get started.
        </h4>
      </div>
      <TaskCreator />
    </section>
  );
}
