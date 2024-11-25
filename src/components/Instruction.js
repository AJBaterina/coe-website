import React, { useState } from "react";
import "../styles/Instruction.css";

import jasper from "../assets/Logo.ico";
import EngrDeboma from "../assets/M.Eng. Deboma.jpg";

//Mechanical Engineering
import MJD from "../assets/MJD.jpg";
import MKJB from "../assets/MKJB.jpg";
import JAC from "../assets/JAC.jpg";
import Romualdo from "../assets/Romualdo.jpg";
import PADUA from "../assets/Padua.jpg";

//Electrical Engineering
import Parallag from "../assets/Parallag.jpg";
import Marquez from "../assets/Marquez.png";
import Orianza from "../assets/Orianza.jpg";
import Marafina from "../assets/Marafina.jpg";
import Edarad from "../assets/Edarad.JPG";
import Balicaco from "../assets/Balicaco.jpg";

//Civil Engineering
import Tabiligan from "../assets/Tabligan.jpg";
import Romero from "../assets/Romero.png";
import Dalusong from "../assets/Dalusong.png";
import R_Aramay from "../assets/Aramay.png";
import Antonio from "../assets/Antonio.PNG";
import MT_Vicho from "../assets/Vicho MT.jpg";
import V_Vicho from "../assets/Vicho V.jpg";
import Tombale from "../assets/Tombale.jpg";
import Bisquera from "../assets/Bisquera.jpg";
import Manangan from "../assets/Manangan.jpg";
import Romulo from "../assets/Romulo E.jpg";
import Fernandez from "../assets/Fernandez.jpg";
import Z_Aramay from "../assets/Aramay ZM.jpg";

//Computer Engineering
import Marave from "../assets/Marave.jpg";
import Barrera from "../assets/Barrera.png";
import Acain from "../assets/Acain.png";
import Sabado from "../assets/Sabado.jpg";
import Martin from "../assets/DMM.jpg";
import Cantillo from "../assets/Cantillo.jpg";
import Morillo from "../assets/Morillo.png";
import Basilio from "../assets/Basilio.jpg";
import Leomo from "../assets/Leomo.png";
import Remolacio from "../assets/Remolacio.jpg";

//Mining Engineering
import Desierto from "../assets/Desierto.jpg";

//Allied Instructors
import Ebue from "../assets/Ebue.png";
import Rico from "../assets/Rico.jpg";
import Bugayong from "../assets/Bugayong.png";
import Dullas from "../assets/Dullas.jpg";
import Punzalan from "../assets/Punzalan.jpg";
import Danila from "../assets/Danila.jpg";
import Medrano from "../assets/Medrano.jpg";
import Besa from "../assets/Besa.jpg";
import Santos from "../assets/Santos.jpg";
import Parangat from "../assets/Parangat.jpg";
import Quitoriano from "../assets/Quitoriano.jpg";
import Pelinio from "../assets/Pelinio.jpg";
import Velarde from "../assets/Velarde.jpg";

const InstructionPage = () => {
	const [selectedProgram, setSelectedProgram] = useState(null);
	window.scrollTo({ top: 0, behavior: "smooth" });

	const programOfferings = [
		{
			id: "mechanical",
			title: "Mechanical Engineering",
			course: "Bachelor of Science in Mechanical Engineering",
			description:
				"Crafting the future through innovation and precision, Mechanical Engineering transforms dreams into reality with every gear turned and every design perfected.",
			curriculars: [
				{
					id: 2020,
					year: "2020",
					link: "https://drive.google.com/file/d/1_ohlfVvqBD2BVIU3iI1xAJXe8tN67pxn/view"
				},
				{
					id: 2019,
					year: "2019",
					link: "https://drive.google.com/file/d/1qIRVGwAu4GZJbLNw8PRsArWFI_y_DXBY/view"
				},
				{
					id: 2018,
					year: "2018 (Stem Student)",
					link: "https://drive.google.com/file/d/1iPmxV6OHfDDlV5JZmDzfngqvjPDF-kfp/view"
				},
				{
					id: 2018,
					year: "2018 (Non-Stem Student)",
					link: "https://drive.google.com/file/d/1QWS1lT3bmBREKOYPhTT1IOw-kW2eI-r9/view"
				}
			],
			head: [
				{
					name: "MARLON JAMES A. DEDICATORIA, RMEE, Ph.D.	",
					specialty: "Program Chairperson",
					image: MJD,
					bio: "Dr. Marlon James A. Dedicatoria is a licensed mechanical engineer and currently serves as the Vice President for Research and Development, as well as the Chairperson of the Mechanical Engineering Program at President Ramon Magsaysay State University (PRMSU) in Iba, Zambales. With over ten years of teaching experience, he has been instructing professional courses within the Bachelor of Science in Mechanical Engineering (BSME) program at PRMSU's College of Engineering. Additionally, he holds a lecturing position at the university's graduate school, where he teaches mathematics courses. Dr. Dedicatoria earned his Bachelor of Science degree in Mechanical Engineering from Ramon Magsaysay Technological University in 2006. Subsequently, he pursued his Master of Science in Mechanical Design and Systems Engineering at Andong National University, South Korea, graduating in 2010. He furthered his academic pursuits by completing his PhD in Mechanical Design and Systems Engineering from Andong National University in 2013. Following his doctoral studies, he served as a post-doctoral fellow at the same university's Materials Behavior Evaluation Laboratory under the guidance of Prof. Hyung-Seop Shin from 2013 to 2014. His research publications primarily focus on the electromechanical property evaluation of high-temperature superconductors. Presently, Dr. Dedicatoria holds the position of Professor 3 at PRMSU."
				}
			],
			instructors: [
				{
					name: "Engr.  Ma. Karla Jessica Bautista",
					image: MKJB
				},
				{
					name: "Engr. JASPER ANTHONY CUEVAS",
					image: JAC
				},
				{
					name: "Engr. MICHAEL ROMUALDO",
					image: Romualdo
				},
				{
					name: "Engr. NHOELLE PADUA",
					image: PADUA
				}
			]
		},
		{
			id: "electrical",
			title: "Electrical Engineering",
			course: "Bachelor of Science in Electrical Engineering",
			description:
				"Charging forward with innovation and precision, Electrical Engineering illuminates the path to a brighter, more connected future.",
			curriculars: [
				{
					id: 2022,
					year: "2022",
					link: "https://drive.google.com/file/d/1L7vvkXEFR4IZ_-YJfMCr5oUjOJGyBand/view"
				},
				{
					id: 2019,
					year: "2019",
					link: "https://drive.google.com/file/d/1LN2HKQoYfgk0vAALgU9VDPaRtPQ2iEhi/view"
				},
				{
					id: 2018,
					year: "2018 (Stem Student)",
					link: "https://drive.google.com/file/d/1Mondhpb6XfCz4c6eiAIBlCaChTH7vofL/view"
				},
				{
					id: 2018,
					year: "2018 (Non-Stem Student)",
					link: "https://drive.google.com/file/d/13XBB9Q3Azof4-OJ1COD13ZPGTEaPl2VZ/view"
				}
			],
			head: [
				{
					name: "GILBERT D. DEBOMA, REE, M.Eng.",
					specialty: "Program Chairperson",
					image: EngrDeboma,
					bio: "Engr Gilbert D. Deboma is a faculty of the College of Engineering for 24 years with an Academic Rank of Associate Professor V. He is a graduate of Bachelor of Science in Electrical Engineering at Technological Institute of the Philippines – Quezon City. He finished his Master of Science in Electronics Engineering at Andong National University – South Korea. He is currently taking up PhD in Agricultural Engineering at Central Luzon State University. Engr Deboma is an active member of the Institute of Integrated Electrical Engineers, Inc., the accredited professional organization of electrical practitioners of the Philippines.  He is the current dean of the College of Engineering and concurrent Program Chairperson of the Electrical Engineering Department."
				}
			],
			instructors: [
				{
					name: "Engr. MARK LESTER PARALLAG",
					image: Parallag
				},
				{
					name: "Engr. DORIS H. MARQUEZ",
					image: Marquez
				},
				{
					name: "Engr. SENATO ORIANZA",
					image: Orianza
				},
				{
					name: "Engr. CHRISTIAN MARAFINA",
					image: Marafina
				},
				{
					name: "Engr. FERNAN EDARAD",
					image: Edarad
				},
				{
					name: "Engr. RUE LEI BALICACO",
					image: Balicaco
				}
			]
		},
		{
			id: "civil",
			title: "Civil Engineering",
			course: "Bachelor of Science in Civil Engineering",
			description:
				"Designing the future, one foundation at a time. Our structures stand not only as testaments to our skill, but as enduring symbols of progress and innovation.",
			curriculars: [
				{
					id: 2022,
					year: "2022",
					link: "https://drive.google.com/file/d/1dAxJiHzIfv6htUOxCNrbk-bxUfF7X28I/view"
				},
				{
					id: 2019,
					year: "2019",
					link: "https://drive.google.com/file/d/1IDMuf4xRgCHvWchZGmHHCI8T6XDV2rI0/view"
				},
				{
					id: 2018,
					year: "2018 (Stem Student)",
					link: "https://drive.google.com/file/d/1PiETznugHPxM_sfhCu5jz40QSoqpBSx0/view"
				},
				{
					id: 2018,
					year: "2018 (Non-Stem Student)",
					link: "https://drive.google.com/file/d/1NMIBRoesUtYFBcwrEBkWPnJ6aKAqDDMe/view"
				}
			],
			head: [
				{
					name: "FERDINAND D. TABLIGAN, RCE, M.Eng.",
					specialty: "Program Chairperson",
					image: Tabiligan,
					bio: "Content coming soon..."
				}
			],
			instructors: [
				{
					name: "Engr.  RONEL E. ROMERO",
					image: Romero
				},
				{
					name: "Engr. JEMAR DALUSONG",
					image: Dalusong
				},
				{
					name: "Engr. RAYMOND ARAMAY",
					image: R_Aramay
				},
				{
					name: "Engr. ABRAHAM ANTONIO",
					image: Antonio
				},
				{
					name: "Engr. MA. THEREZA VICHO",
					image: MT_Vicho
				},
				{
					name: "Engr. VICTOR D. VICHO",
					image: V_Vicho
				},
				{
					name: "Engr. ELENA LYN TOMBALE",
					image: Tombale
				},
				{
					name: "Engr. RYV ANTHONY BISQUERA",
					image: Bisquera
				},
				{
					name: "Engr.  JOVEN MANANGAN",
					image: Manangan
				},
				{
					name: "Engr. ELOISA ROMULO",
					image: Romulo
				},
				{
					name: "Engr. MARKO ANTONIO FERNANDEZ",
					image: Fernandez
				},
				{
					name: "Engr. ZENDREE ARAMAY",
					image: Z_Aramay
				}
			]
		},
		{
			id: "computer",
			title: "Computer Engineering",
			course: "Bachelor of Science in Computer Engineering",
			description:
				"Innovating tomorrow, byte by byte. Here, we don't just program software—we engineer possibilities and revolutionize the world through technology.",
			curriculars: [
				{
					id: 2022,
					year: "2022",
					link: "https://drive.google.com/file/d/1uoopTW6_3ilw7qkzFTO0VgObgS96TtPQ/view"
				},
				{
					id: 2018,
					year: "2018",
					link: "https://drive.google.com/file/d/1gb9F1AjD0ZDIyK0rHltQg5Vzz0a2ia3z/view"
				}
			],
			head: [
				{
					name: "MELOJEAN C. MARAVE, LPT, MSIT",
					specialty: "Program Chairperson",
					image: Marave,
					bio: "Engr. Melojean C. Marave has an extensive educational background, including a Doctorate in Information Technology from the Technological Institute of the Philippines and a Doctor of Education Major in Educational Management from Ramon Magsaysay Technological University, Iba Campus. She holds a Master of Science in Information Technology from the Polytechnic University of the Philippines – Sta. Mesa, Manila. Additionally, she completed a Post-Baccalaureate Certificate in Professional Education at Ramon Magsaysay Technological University Main Campus Iba, Zambales, and a Trade Course in IT Course Design and Development from the National Computer Center, National Computer Institute, Diliman Q.C. Engr. Marave finished CISCO Certified Network Associate Exploration 1, 2, 3, and 4 modules from UP Information Technology Training Center, UP Diliman Q.C. She earned her Bachelor of Science in Computer Engineering in October 2001. Engr. Marave currently serves as the BS Computer Engineering Program Chairperson at PRMSU Iba, Zambales, and has been actively involved in various faculty and extension roles within the university, with a special highlight on community extension. She is a licensed professional teacher and holds professional memberships with Colleges and Universities in the Philippines and the Institute of Computer Engineers of the Philippines as a Professional Member. An Accreditor of the Accrediting Agency of Chartered Colleges and Universities in the Philippines (AACCUP) and Internal Auditor of the International Standard Organization (ISO). Additionally, she has contributed significantly to youth leadership programs and has received recognition for her outstanding contributions and leadership. "
				}
			],
			instructors: [
				{
					name: "Engr. RICKY S. BARRERA",
					image: Barrera
				},
				{
					name: "Engr. BRYAN CARLOS B. ACAIN",
					image: Acain
				},
				{
					name: "Engr. OLIVER A. SABADO, JR.",
					image: Sabado
				},
				{
					name: "Engr. DIONISIO M. MARTIN, JR.",
					image: Martin
				},
				{
					name: "Engr. FROILAN G. CANTILLO",
					image: Cantillo
				},
				{
					name: "Engr. ALLAN JAY L. MORILLO",
					image: Morillo
				},
				{
					name: "Engr. DENNIZE JIANA R. BASILIO",
					image: Basilio
				},
				{
					name: "Engr. KIRK LEE P. LEOMO",
					image: Leomo
				},
				{
					name: "Engr. MARTEEN BERAVON REMOLACIO",
					image: Remolacio
				}
			]
		},
		{
			id: "mining",
			title: "Mining Engineering",
			course: "Bachelor of Science in Mining Engineering",
			description:
				"Unearthing the treasures of the Earth with precision and respect. In Mining Engineering, we delve deep to unlock natural resources, paving the way for innovation and sustainability.",
			curriculars: [
				{
					id: "202X",
					year: "Coming Soon",
					link: ""
				}
			],
			head: [
				{
					name: "Engr. DOROTHY JOYCE SOLPICO DESIERTO",
					specialty: "Program Chairperson",
					image: Desierto,
					bio: "Content to be update..."
				}
			],
			instructors: [
				{
					name: "Content to be update...",
					image: "https://via.placeholder.com/150"
				}
			]
		}
	];

	const alliadinstructors = [
		{
			title: "Allied and General Education",
			instructors: [
				{
					name: "Engr. MELISSA M. EBUE",
					image: Ebue
				},
				{
					name: "Engr. CLARISSE HOPE M. RICO",
					image: Rico
				},
				{
					name: "Dr. EMELYN E. BUGAYONG",
					image: Bugayong
				},
				{
					name: "Engr. CINDY DULLAS",
					image: Dullas
				},
				{
					name: "Dr. EDNA PUNZALAN",
					image: Punzalan
				},
				{
					name: "Ms. JANE D. DANILA",
					image: Danila
				},
				{
					name: "Mr. LUCIANO MEDRANO",
					image: Medrano
				},
				{
					name: "Ms. MADELLE SANTOS",
					image: Santos
				},
				{
					name: "Ms. MONICA PARANGAT",
					image: Parangat
				},
				{
					name: "Ms. KAREN QUITORIANO",
					image: Quitoriano
				},
				{
					name: "Ms. JIO ERIKA PELINIO",
					image: Pelinio
				},
				{
					name: "Ms. MAE JOYCE VELARDE",
					image: Velarde
				}
			]
		}
	];

	const renderProgramOfferings = () => {
		return (
			<div className="program-offerings">
				<div className="instruction-header">
					<h1>Program Offerings</h1>
					<p>Explore our comprehensive engineering education offerings</p>
				</div>
				<div className="instructor">
					<div key="{index}" className="instructor-card">
						<img src={EngrDeboma} alt="{name}" />
						<h3>GILBERT D. DEBOMA, REE, M.Eng.</h3>
						<h4>College Dean</h4>
						<p className="dean-p">
							Engr Gilbert D. Deboma is a faculty of the College of
							Engineering for 24 years with an Academic Rank of Associate
							Professor V. He is a graduate of Bachelor of Science in
							Electrical Engineering at Technological Institute of the
							Philippines – Quezon City. He finished his Master of
							Science in Electronics Engineering at Andong National
							University – South Korea. He is currently taking up PhD in
							Agricultural Engineering at Central Luzon State University.
							Engr Deboma is an active member of the Institute of
							Integrated Electrical Engineers, Inc., the accredited
							professional organization of electrical practitioners of
							the Philippines. He is the current dean of the College of
							Engineering and concurrent Program Chairperson of the
							Electrical Engineering Department.
						</p>
					</div>
				</div>
				<h2>Our Engineering Programs</h2>
				<div className="program-grid">
					{programOfferings.map((program) => (
						<div
							key={program.id}
							className="program-card offer"
							onClick={() => setSelectedProgram(program)}>
							<h3>{program.title}</h3>
							<p>{program.description}</p>
						</div>
					))}
				</div>
				<div className="instructor-header">
					<h2>Allied and General Education Instructors</h2>
				</div>
				<div className="instructor-grid-allied">
					{alliadinstructors.map((instructors, index) =>
						instructors.instructors.map((instructors) => (
							<div key={index} className="instructor-card">
								<img src={instructors.image} alt={instructors.name} />
								<h6>{instructors.name}</h6>
							</div>
						))
					)}
				</div>
			</div>
		);
	};

	const renderInstructorSection = () => {
		if (!selectedProgram) return null;

		return (
			<div className="instructor-section">
				<div className="instruction-header">
					<h1>{selectedProgram.course}</h1>
					<p>{selectedProgram.description}</p>
				</div>
				<div className="curricular-offerings">
					<h1>Curricular Offerings</h1>
					<p>Select to open</p>
					{selectedProgram.curriculars.map((curricular, id) => (
						<button index={id} className="offering-btn">
							<a
								href={curricular.link}
								target={curricular.link === "" ? "_self" : "_blank"}>
								{curricular.year}
							</a>
						</button>
					))}
				</div>

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
						<div key={index} className="instructor-card-head">
							<img src={head.image} alt={head.name} />
							<h3>{head.name}</h3>
							<p>{head.bio}</p>
						</div>
					))}
				</div>
				<div className="instructor-grid">
					{selectedProgram.instructors.map((instructor, index) => (
						<div key={index} className="instructor-card">
							<img src={instructor.image} alt={instructor.name} />
							<h6>{instructor.name}</h6>
							<h4>{instructor.specialty}</h4>
							<p>{instructor.bio}</p>
						</div>
					))}
				</div>
			</div>
		);
	};

	return (
		<>
			<div className="instruction-page">
				{selectedProgram
					? renderInstructorSection()
					: renderProgramOfferings()}
			</div>
			<footer className="landing-footer">
				<div className="footer-content"></div>
			</footer>
		</>
	);
};

export default InstructionPage;
