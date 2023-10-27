import React, { useState, useEffect } from "react";

const SignInForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [data, setData] = useState({});
	const [submitted, setSubmitted] = useState(false);

	useEffect(() => {
		console.log("useEffect");
		const sendData = async () => {
			try {
				const response = await fetch("#", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(data),
				});
				const apiResponse = await response.json();
				console.log("reponse de la requete post:", apiResponse);
			} catch (error) {
				console.error(
					"Erreur lors de l'envoi de la requête POST :",
					error
				);
			}
		};
		if (submitted) {
			sendData();
			setTimeout(() => setSubmitted(false), 3000);
		}
	}, [data]);

	const handleSubmit = (e) => {
		e.preventDefault(); // Bloquer le rechargement de la page
		console.log("submit ok");

		const formData = {
			email: email,
			password: password,
		};

		setData(formData);
		setSubmitted(true);

		console.log("formData :", formData);
	};

	return (
		<div className='signinform'>
			<h3>SignInForm</h3>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Email</label>
					<input
						type='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div>
					<label>Mot de passe</label>
					<input
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button type='submit'>Me connecter</button>
			</form>
		</div>
	);
};

export default SignInForm;
