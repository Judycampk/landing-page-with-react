import React from "react";
import { Navbar } from "./navbar";
import { Card } from "./card";
import { Jumbotron } from "./jumbotron";
import { Footer } from "./footer";

export function Home() {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<Card />
			<Footer />
		</div>
	);
}
