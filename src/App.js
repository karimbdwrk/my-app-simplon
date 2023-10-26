import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/global/Header";
import Footer from "./components/global/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import "./App.css";

function App() {
	return (
		<Router>
			<div className='App'>
				<Header />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/signin' element={<SignIn />} />
					<Route path='/signup' element={<SignUp />} />
					<Route path='/about' element={<AboutPage />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
