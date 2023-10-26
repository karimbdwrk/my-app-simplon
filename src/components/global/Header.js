import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div style={styles.header}>
			<h3>Header</h3>
			<Link to='/'>Home</Link>
			<Link to='/about'>About</Link>
		</div>
	);
};

const styles = {
	header: {
		backgroundColor: "pink",
		height: 90,
	},
};

export default Header;
