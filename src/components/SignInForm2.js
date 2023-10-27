import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignInForm2 = () => {
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.required("L'email est requis")
				.email("Adresse email non valide"),
			password: Yup.string()
				.required("Mot de passe requis")
				.min(4, "Le mot de passe doit comporter au moins 4 caractères"),
		}),
		onSubmit: (values) => {
			console.log("Formulaire ok");
			console.log(values);
		},
	});

	return (
		<div>
			<h3>SignInForm2</h3>
			<form onSubmit={formik.handleSubmit}>
				<div>
					<label>Email</label>
					<input
						type='email'
						name='email'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.email}
					/>
				</div>
				<div>
					<label>Mot de passe</label>
					<input
						type='password'
						name='password'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.password}
					/>
				</div>
				<button type='submit'>Me connecter</button>
			</form>
		</div>
	);
};

export default SignInForm2;
