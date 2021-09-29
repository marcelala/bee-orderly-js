//npm packages
import React from "react";
//project files
import Logo from "../assets/images/logo.svg";

export default function Header() {
	return (
		<section className="header">
			<header>
				<div className="logo">
						<img src={Logo} alt="EIKA" title="EIKA" className="eika" />
				</div>
				<div className="title">
					<h2>EIKA's Shopping List</h2>
				</div>
			</header>
		</section>
	);
}
