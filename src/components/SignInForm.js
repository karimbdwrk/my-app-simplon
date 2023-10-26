import React, { useState } from "react";

const SignInForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className='signinform'>
			<h3>SignInForm</h3>
			<form>
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
				<button>Me connecter</button>
			</form>
		</div>
	);
};

export default SignInForm;
