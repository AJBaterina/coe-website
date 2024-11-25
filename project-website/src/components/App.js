import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/NavBar.js";
import LandingPage from "../components/LandingPage.js";
import InstructionPage from "../components/Instruction.js";
import Research from "../components/Research.js";
import History from "../components/History.js";
import "../styles/App.css";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<LandingPage />
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/programs" element={<InstructionPage />} />
					<Route path="/research-and-extentions" element={<Research />} />
					<Route path="/history" element={<History />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
