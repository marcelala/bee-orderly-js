import React from "react";
import TaskCreator from "../components/taskCreator/TaskCreator";
//project files
import HeroMedia from "./../assets/images/hero-img.png";

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
          You can use our shopping list to help you plan before you visit us.
          This way you won't forget anything when you come.
        </h4>
        <h4>
          Just press the button below and fill up the form with the item's name
          and price to get started. You can also add the quantity if you would
          like.
        </h4>
      </div>
      <TaskCreator />
    </section>
  );
}
