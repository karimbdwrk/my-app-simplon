import React, { useState, useEffect } from "react";

const RickAndMorty = () => {
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		console.log("useEffect ok!");

		const fetchData = async () => {
			try {
				const response = await fetch(
					"https://rickandmortyapi.com/api/character"
				);
				const dataJson = await response.json();
				setData(dataJson);
				setLoading(false);
			} catch (error) {
				console.error("Erreur lors de l'appel de l'API :", error);
				setLoading(false);
			}
		};

		fetchData();

		console.log(data);
	}, []);

	return (
		<div>
			<h1>RICK & MORTY</h1>
			{loading ? (
				<p>Loading ...</p>
			) : (
				<div>
					{data.results.map((character) => (
						<p>{character.name}</p>
					))}
				</div>
			)}
		</div>
	);
};

export default RickAndMorty;
