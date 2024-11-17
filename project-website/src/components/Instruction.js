import React, { useState } from "react";
import "../styles/Instruction.css";

const InstructionPage = () => {
	const [selectedProgram, setSelectedProgram] = useState(null);

	const programOfferings = [
		{
			id: "mechanical",
			title: "Mechanical Engineering",
			description:
				"Comprehensive program focusing on design, manufacturing, and thermal systems.",
			head: [
				{
					name: "Dr. John Smith",
					specialty: "Robotics and Automation",
					image: "../assets/Logo.ico",
					bio: "Expert in robotics with 15 years of industry and academic experience."
				}
			],
			instructors: [
				{
					name: "Dr. John Smith",
					specialty: "Robotics and Automation",
					image: "https://via.placeholder.com/150",
					bio: "Expert in robotics with 15 years of industry and academic experience."
				},
				{
					name: "Prof. Emily Rodriguez",
					specialty: "Thermal Engineering",
					image: "https://via.placeholder.com/150",
					bio: "Renowned researcher in sustainable energy systems and heat transfer."
				}
			],
			courses: [
				"Advanced Machine Design",
				"Robotics and Automation",
				"Thermal Systems",
				"Manufacturing Processes"
			]
		},
		{
			id: "electrical",
			title: "Electrical Engineering",
			description:
				"Cutting-edge program covering electronics, power systems, and telecommunications.",
			instructors: [
				{
					name: "Dr. Michael Chen",
					specialty: "Power Systems",
					image: "https://via.placeholder.com/150",
					bio: "Leading expert in renewable energy and smart grid technologies."
				},
				{
					name: "Prof. Sarah Johnson",
					specialty: "Electronics",
					image: "https://via.placeholder.com/150",
					bio: "Pioneering researcher in semiconductor technologies and IoT."
				}
			],
			courses: [
				"Digital Electronics",
				"Power Systems Design",
				"Telecommunications",
				"Embedded Systems"
			]
		},
		{
			id: "civil",
			title: "Civil Engineering",
			description:
				"Innovative program covering software development, AI, and cloud computing.",
			instructors: [
				{
					name: "Dr. Alex Wong",
					specialty: "Artificial Intelligence",
					image: "https://via.placeholder.com/150",
					bio: "Machine learning expert with extensive industry experience."
				},
				{
					name: "Prof. Rachel Kim",
					specialty: "Cloud Computing",
					image: "https://via.placeholder.com/150",
					bio: "Renowned cloud architecture and distributed systems specialist."
				}
			],
			courses: [
				"Advanced Web Development",
				"Machine Learning",
				"Cloud Computing",
				"Cybersecurity"
			]
		},
		{
			id: "computer",
			title: "Computer Engineering",
			description:
				"Comprehensive program focusing on design, manufacturing, and thermal systems.",
			head: {
				name: "Dr. John Smith",
				specialty: "Robotics and Automation",
				image: "https://via.placeholder.com/150",
				bio: "Expert in robotics with 15 years of industry and academic experience."
			},
			instructors: [
				{
					name: "Dr. John Smith",
					specialty: "Robotics and Automation",
					image: "https://via.placeholder.com/150",
					bio: "Expert in robotics with 15 years of industry and academic experience."
				},
				{
					name: "Prof. Emily Rodriguez",
					specialty: "Thermal Engineering",
					image: "https://via.placeholder.com/150",
					bio: "Renowned researcher in sustainable energy systems and heat transfer."
				}
			],
			courses: [
				"Advanced Machine Design",
				"Robotics and Automation",
				"Thermal Systems",
				"Manufacturing Processes"
			]
		},
		{
			id: "mining",
			title: "Mining Engineering",
			description:
				"Comprehensive program focusing on design, manufacturing, and thermal systems.",
			instructors: [
				{
					name: "Dr. John Smith",
					specialty: "Robotics and Automation",
					image: "https://via.placeholder.com/150",
					bio: "Expert in robotics with 15 years of industry and academic experience."
				},
				{
					name: "Prof. Emily Rodriguez",
					specialty: "Thermal Engineering",
					image: "https://via.placeholder.com/150",
					bio: "Renowned researcher in sustainable energy systems and heat transfer."
				}
			],
			courses: [
				"Advanced Machine Design",
				"Robotics and Automation",
				"Thermal Systems",
				"Manufacturing Processes"
			]
		}
	];

	const renderProgramOfferings = () => {
		return (
			<div className="program-offerings">
				<h2>Our Engineering Programs</h2>
				<div className="program-grid">
					{programOfferings.map((program) => (
						<div
							key={program.id}
							className="program-card"
							onClick={() => setSelectedProgram(program)}>
							<h3>{program.title}</h3>
							<p>{program.description}</p>
							<div className="program-courses">
								{program.courses.map((course, index) => (
									<span key={index} className="course-tag">
										{course}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		);
	};

	const renderInstructorSection = () => {
		if (!selectedProgram) return null;

		return (
			<div className="instructor-section">
				<div className="instructor-header">
					<h2>{selectedProgram.title} Instructors</h2>
					<button
						className="back-button"
						onClick={() => setSelectedProgram(null)}>
						Back to Programs
					</button>
				</div>
				<div className="instructor">
					{selectedProgram.head.map((head, index) => (
						<div key={index} className="instructor-card">
							<img src={head.image} alt={head.name} />
							<h3>{head.name}</h3>
							<h4>{head.specialty}</h4>
							<p>{head.bio}</p>
						</div>
					))}
				</div>
				<div className="instructor-grid">
					{selectedProgram.instructors.map((instructor, index) => (
						<div key={index} className="instructor-card">
							<img src={instructor.image} alt={instructor.name} />
							<h3>{instructor.name}</h3>
							<h4>{instructor.specialty}</h4>
							<p>{instructor.bio}</p>
						</div>
					))}
				</div>
			</div>
		);
	};

	return (
		<div className="instruction-page">
			<div className="instruction-header">
				<h1>Program Offerings</h1>
				<p>Explore our comprehensive engineering education offerings</p>
			</div>

			{selectedProgram
				? renderInstructorSection()
				: renderProgramOfferings()}
		</div>
	);
};

export default InstructionPage;
