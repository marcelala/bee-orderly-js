import React from "react";
import TaskCreator from "../components/TaskCreator/TaskCreator";
//project files
import HeroMedia from "./../assets/images/alyssa-strohmann.jpg";

export default function WelcomeScreen() {
	return (
		<section className="welcome">
			<img src={HeroMedia} className="hero-media" alt="bohemian house furniture and cactus" />
			<div className="welcome-wrapper">
				<blockquote className="attribution">
					<p>
						Photo by
						<a href="https://unsplash.com/"> Unsplash </a>
					</p>
				</blockquote>
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
			<TaskCreator/>
		</section>
	);
}
