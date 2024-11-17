import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/NavBar.js";
import LandingPage from "../components/LandingPage.js";
import InstructionPage from "../components/Instruction.js";
import "../styles/App.css";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/instruction" element={<InstructionPage />} />
					{/* Add other routes as needed */}
				</Routes>
			</div>
		</Router>
	);
}

export default App;
