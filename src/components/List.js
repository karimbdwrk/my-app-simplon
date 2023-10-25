import React, { useState } from "react";

import TitleH1 from "./TitleH1";

const data = [
	{
		name: "Pomme",
		type: "Fruit",
		color: "Rouge",
	},
	{
		name: "Banane",
		type: "Fruit",
		color: "Jaune",
	},
	{
		name: "Orange",
		type: "Fruit",
		color: "Orange",
	},
	{
		name: "Kiwi",
		type: "Fruit",
		color: "Vert",
	},
	{
		name: "Fraise",
		type: "Fruit",
		color: "Rouge",
	},
	{
		name: "Raisin",
		type: "Fruit",
		color: "Violet",
	},
	{
		name: "Pêche",
		type: "Fruit",
		color: "Orange",
	},
	{
		name: "Mangue",
		type: "Fruit",
		color: "Jaune",
	},
	{
		name: "Abricot",
		type: "Fruit",
		color: "Orange",
	},
	{
		name: "Ananas",
		type: "Fruit",
		color: "Jaune",
	},
	{
		name: "Carotte",
		type: "Légume",
		color: "Orange",
	},
	{
		name: "Tomate",
		type: "Légume",
		color: "Rouge",
	},
	{
		name: "Brocoli",
		type: "Légume",
		color: "Vert",
	},
	{
		name: "Épinard",
		type: "Légume",
		color: "Vert",
	},
	{
		name: "Courgette",
		type: "Légume",
		color: "Vert",
	},
	{
		name: "Aubergine",
		type: "Légume",
		color: "Violet",
	},
	{
		name: "Poivron",
		type: "Légume",
		color: "Rouge, Jaune, Vert",
	},
	{
		name: "Concombre",
		type: "Légume",
		color: "Vert",
	},
	{
		name: "Patate douce",
		type: "Légume",
		color: "Orange",
	},
	{
		name: "Oignon",
		type: "Légume",
		color: "Blanc",
	},
	{
		name: "Laitue",
		type: "Légume",
		color: "Vert",
	},
];

const List = () => {
	const [items, setItems] = useState(data);
	const [displayedItems, setDisplayedItems] = useState(data);

	const handleColorFilter = (color) => {
		const filteredItems = items.filter((item) => item.color === color);
		setDisplayedItems(filteredItems);
	};

	const handleTypeFilter = (type) => {
		// Filtre fruits ou légumes
	};

	const handleReset = () => {
		setDisplayedItems(data);
	};

	return (
		<div>
			<TitleH1 name='Karim' age={33} />
			<div>
				<button
					style={styles.button}
					onClick={() => handleColorFilter("Rouge")}>
					Rouge
				</button>
				<button
					style={styles.button}
					onClick={() => handleColorFilter("Vert")}>
					Vert
				</button>
				<button style={styles.button} onClick={handleReset}>
					Reset
				</button>
			</div>
			<div>
				<button></button>
				<button></button>
			</div>
			{displayedItems.map((item) => (
				<div style={styles.card}>
					<p>
						{item.name} - {item.type} - {item.color}
					</p>
				</div>
			))}
		</div>
	);
};

const styles = {
	card: {
		backgroundColor: "pink",
		border: "1px solid #000",
		color: "#101010",
	},
	button: {
		margin: 5,
	},
};

export default List;
