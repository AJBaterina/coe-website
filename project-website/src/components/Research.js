import React, { useState } from "react";
import "../styles/research.css";

const Research = () => {
	const [selectedProgram, setSelectedProgram] = useState(null);
	const [selectedResearch, setSelectedResearch] = useState(null);

	const researchData = {
		mechanical: [
			{
				title: "Advanced Robotics Design",
				description: "Innovative robotic systems for industrial automation",
				image: "/images/mechanical-research-1.jpg",
				pdfLink: "/pdfs/mechanical-robotics.pdf"
			},
			{
				title: "Sustainable Energy Solutions",
				description: "Research on renewable energy technologies",
				image: "/images/mechanical-research-2.jpg",
				pdfLink: "/pdfs/mechanical-energy.pdf"
			}
		],
		civil: [
			{
				title: "Smart Infrastructure Design",
				description: "Developing resilient urban infrastructure",
				image: "/images/civil-research-1.jpg",
				pdfLink: "/pdfs/civil-infrastructure.pdf"
			}
		],
		electrical: [
			{
				title: "Power Grid Optimization",
				description: "Advanced algorithms for electrical grid management",
				image: "/images/electrical-research-1.jpg",
				pdfLink: "/pdfs/electrical-grid.pdf"
			}
		],
		computer: [
			{
				title: "AI and Machine Learning",
				description: "Cutting-edge research in artificial intelligence",
				image: "/images/computer-research-1.jpg",
				pdfLink: "/pdfs/computer-ai.pdf"
			}
		],
		mining: [
			{
				title: "Sustainable Mining Techniques",
				description: "Environmentally friendly mining technologies",
				image: "/images/mining-research-1.jpg",
				pdfLink:
					"https://drive.google.com/file/d/1uoopTW6_3ilw7qkzFTO0VgObgS96TtPQ/view?usp=sharing"
			}
		]
	};

	// Engineering programs for initial selection
	const engineeringPrograms = [
		{
			name: "Mechanical Engineering",
			image: "/images/mechanical-research.jpg",
			key: "mechanical"
		},
		{
			name: "Civil Engineering",
			image: "/images/civil-research.jpg",
			key: "civil"
		},
		{
			name: "Electrical Engineering",
			image: "/images/electrical-research.jpg",
			key: "electrical"
		},
		{
			name: "Computer Engineering",
			image: "/images/computer-research.jpg",
			key: "computer"
		},
		{
			name: "Mining Engineering",
			image: "/images/mining-research.jpg",
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
						{researchData[selectedProgram.key].map((research, index) => (
							<div
								key={index}
								className="research-card"
								onClick={() => handleResearchSelect(research)}>
								<img src={research.image} alt={research.title} />
								<h3>{research.title}</h3>
							</div>
						))}
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
	);
};

export default Research;
