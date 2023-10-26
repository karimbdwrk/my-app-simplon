import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<div className='homepage'>
			<h1>Bienvenue</h1>
			<div className='buttons'>
				<Link to='/signup'>M'inscrire</Link>
				<Link to='/signin'>Me connecter</Link>
			</div>
		</div>
	);
};

export default HomePage;
