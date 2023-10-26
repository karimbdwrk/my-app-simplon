import React, { useState, useEffect } from "react";

import Image from "./Image";

import styles from "../styles";

const RickAndMorty = () => {
	const [data, setData] = useState([]);
	const [filteredData, setFilteredData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		console.log("useEffect ok!");

		const fetchData = async () => {
			try {
				const response = await fetch(
					"https://rickandmortyapi.com/api/character"
				);
				const dataJson = await response.json();
				setData(dataJson.results);
				setFilteredData(dataJson.results);
				setLoading(false);
			} catch (error) {
				console.error("Erreur lors de l'appel de l'API :", error);
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	// useEffect(() => {
	// 	console.log(filteredData);
	// }, [filteredData]);

	const handleFilter = (filter) => {
		const filteredCharacters = data.filter(
			(character) => character.status === filter
		);
		setFilteredData(filteredCharacters);
	};

	const handleReset = () => {
		setFilteredData(data);
	};

	return (
		<div>
			<h1>RICK & MORTY</h1>
			{loading ? (
				<p>Loading ...</p>
			) : (
				<div>
					<div>
						<button onClick={() => handleFilter("Alive")}>
							Alive
						</button>
						<button onClick={() => handleFilter("Dead")}>
							Dead
						</button>
						<button onClick={handleReset}>Reset</button>
					</div>
					<div style={styles.container}>
						{filteredData.map((character) => (
							<div style={styles.card} key={character.id}>
								<Image source={character.image} />
								<p>
									{character.name} - {character.status}
								</p>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

// const styles = {
// 	container: {
// 		display: "flex",
// 		// flexDirection: "column",
// 		justifyContent: "center",
// 		alignItems: "center",
// 		flexWrap: "wrap",
// 		gap: 10,
// 		marginTop: 30,
// 	},
// 	card: {
// 		border: "1px solid #F7F7F7",
// 		borderRadius: 5,
// 		// margin: 5,
// 		padding: 15,
// 		width: "25%",
// 	},
// };

export default RickAndMorty;
