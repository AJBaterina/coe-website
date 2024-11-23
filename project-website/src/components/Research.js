import React, { useState } from "react";
import "../styles/research.css";

import placeholder from "../assets/placeholder.jpg";

import DDDS from "../assets/DDDS.png";
import framework from "../assets/COE-R-and-E-Framework-v2.png";

const Research = () => {
	const [selectedProgram, setSelectedProgram] = useState(null);
	const [selectedResearch, setSelectedResearch] = useState(null);

	const researchData = {
		mechanical: [
			{
				title: "BSME Research 1",
				description: "Content to be updated soon...",
				image: placeholder,
				pdfLink: ""
			},
			{
				title: "BSME Research 2",
				description: "Content to be updated soon...",
				image: placeholder,
				pdfLink: ""
			}
		],
		civil: [
			{
				title: "BSCE Research 1",
				description: "Content to be updated soon...",
				image: placeholder,
				pdfLink: ""
			}
		],
		electrical: [
			{
				title: "BSEE Research 1",
				description: "Content to be updated soon...",
				image: placeholder,
				pdfLink: ""
			}
		],
		computer: [
			{
				title: "DRIVER DROWSINESS DETECTION SYSTEM",
				description:
					"This study applies the Developmental Method which includes engineering designs, electronic circuits, programming, testing, and recalibrations.The preliminary design of thesystem involves the integration of the input and output components to the microcontroller.Several tests were conducted applying control mechanisms, sensors were recalibratedand the program algorithms were modified and optimized until the outputs reached acceptable levels.",
				image: DDDS,
				pdfLink:
					"https://drive.google.com/file/d/1DDX25CPBKZJNN2P0izx4V8egN4S1v_Cj/view"
			},
			{
				title: "GRADUATE SCHOOL ONLINE RESEARCH PORTAL",
				description:
					"This study covered the system development and the evaluation of System Quality, Acceptability and Readiness of Implementation of the Ramon Magsaysay Technological University Graduate School Online Research Portal based on System Quality Metrics (SQM).",
				image: placeholder,
				pdfLink:
					"https://drive.google.com/file/d/1CbFrsNZcPtkSfJl-R2Ao8V8P8pe-awlx/view"
			},
			{
				title: "EFFECTS OF GENDER STEREOTYPING IN CAREER CHOICES OF THE STUDENTS OF RAMON MAGSAYSAY TECHNOLOGICAL UNIVERSITY SCHOOL YEAR 2012-2013",
				description:
					"This study made use of the descriptive type of research. This is used to determine the effects of gender stereotyping in career choices of students in Ramon Magsaysay Technological University. Best (1981) defines descriptive method as a tool that describes and interprets the conditions of relationships that exist; practices that prevail; beliefs; processes that are going on; effects that are being felt, or trends that are developing.",
				image: placeholder,
				pdfLink:
					"https://drive.google.com/file/d/1hjqVulcaiHF9rgPyooc4fzkIteyjwCTa/view"
			},
			{
				title: "IR-BASED PC REMOTE CONTROLLER",
				description:
					"The researcher developed the method of research and experimentation. They had already a background about infrared but it is different from the previous projects made by the proponents. Since it is necessary to use television remote controller for personal computer operation and manipulation, adjustment is needed as well as patience and hard work.",
				image: placeholder,
				pdfLink:
					"https://drive.google.com/file/d/1yGo8ROy-qwVncy0WV3jk9ovsG7U49b-R/view"
			}
		],
		mining: [
			{
				title: "BS Mining Research 1",
				description: "Content to be updated soon...",
				image: placeholder,
				pdfLink: ""
			}
		]
	};

	// Engineering programs for initial selection
	const engineeringPrograms = [
		{
			name: "Mechanical Engineering",
			image: placeholder,
			key: "mechanical"
		},
		{
			name: "Civil Engineering",
			image: placeholder,
			key: "civil"
		},
		{
			name: "Electrical Engineering",
			image: placeholder,
			key: "electrical"
		},
		{
			name: "Computer Engineering",
			image: placeholder,
			key: "computer"
		},
		{
			name: "Mining Engineering",
			image: placeholder,
			key: "mining"
		}
	];

	// Handle program selection
	const handleProgramSelect = (program) => {
		setSelectedProgram(program);
		setSelectedResearch(null);
	};

	// Handle research item selection
	const handleResearchSelect = (research) => {
		setSelectedResearch(research);
	};

	// Handle PDF download
	const handleDownloadPDF = (pdfLink) => {
		window.open(pdfLink, "_blank");
	};

	// Render method
	return (
		<>
			<div className="research-page">
				{!selectedProgram ? (
					// Program Selection View
					<div className="program-selection">
						<h1>Research & Extensions</h1>
						<div className="program-grid">
							{engineeringPrograms.map((program) => (
								<div
									key={program.key}
									className="program-card"
									onClick={() => handleProgramSelect(program)}>
									<img src={program.image} alt={program.name} />
									<div className="program-overlay">
										<h3>{program.name}</h3>
									</div>
								</div>
							))}
						</div>
						<br></br>
						<br></br>
						<img src={framework} alt="Extension framewor" />
						<h3>
							The College of Engineering Research and Extension Framework
						</h3>
						<p>Content to be updated soon...</p>
					</div>
				) : (
					// Research Details View
					<div className="research-details">
						<button
							className="back-button-research"
							onClick={() => setSelectedProgram(null)}>
							← Back to Programs
						</button>

						<h1>{selectedProgram.name} Research</h1>

						<div className="research-grid">
							{researchData[selectedProgram.key].map(
								(research, index) => (
									<div
										key={index}
										className="research-card"
										onClick={() => handleResearchSelect(research)}>
										<img src={research.image} alt={research.title} />
										<h5>{research.title}</h5>
									</div>
								)
							)}
						</div>

						{/* Research Modal */}
						{selectedResearch && (
							<div className="research-modal">
								<div className="research-modal-content">
									<img
										src={selectedResearch.image}
										alt={selectedResearch.title}
									/>
									<h2>{selectedResearch.title}</h2>
									<p>{selectedResearch.description}</p>
									<div className="modal-actions">
										<button
											onClick={() =>
												handleDownloadPDF(selectedResearch.pdfLink)
											}>
											View Research Paper
										</button>
										<button onClick={() => setSelectedResearch(null)}>
											Close
										</button>
									</div>
								</div>
							</div>
						)}
					</div>
				)}
			</div>
		</>
	);
};

export default Research;
