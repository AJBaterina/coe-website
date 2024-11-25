import React from "react";
import "../styles/LandingPage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SELB from "../assets/SELB.ico";
import faculty from "../assets/faculty.png";
import passers from "../assets/passers.png";
import passingrate from "../assets/passingrate.png";
import innov from "../assets/innov.png";
import passersname from "../assets/passersname.png";
import instructors from "../assets/instructors.png";
import PRMSU from "../assets/PRMSU.jpg";

import fishcrasher from "../assets/fishcrasher.png";
import coeSelb from "../assets/coe-selb.png";

const LandingPage = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: false,
		arrows: false
	};

	const carouselImages = [
		faculty,
		passers,
		passingrate,
		innov,
		passersname,
		instructors,
		PRMSU
	];

	return (
		<div className="landing-page">
			<div className="hero-section">
				<div className="hero-content">
					<h1>President Ramon Magsaysay State University</h1>
					<p>College Of Engineering</p>
				</div>
			</div>

			<section className="features-section">
				<div className="feature">
					<div className="feature-icon">🔬</div>
					<h3>Research & Development</h3>
					<p>Cutting-edge research driving technological advancement</p>
				</div>
				<div className="feature">
					<div className="feature-icon">🛠️</div>
					<h3>Advanced Engineering</h3>
					<p>Innovative solutions for complex engineering challenges</p>
				</div>
				<div className="feature">
					<div className="feature-icon">🌐</div>
					<h3>Global Impact</h3>
					<p>Engineering solutions that make a worldwide difference</p>
				</div>
			</section>

			<section className="about-section">
				<div className="vision about-content">
					<h2>Our Vision</h2>
					<p>
						PRMSU as a premier learner center and proactive university in
						a digital and global society.
					</p>
				</div>
				<div className="mission about-content">
					<h2>Our Mission</h2>
					<p>
						The President Ramon Magsaysay State University shall primarily
						provide advance and higher professional, technical, special
						instructions in various disciplines; undertake research,
						extension, and income generation programs for sustainable
						development of Zambales, the region, and the country.
					</p>
				</div>
				<div className="qp about-content">
					<h2>Our Quality Policy</h2>
					<p>
						The President Ramon Magsaysay State University is committed to
						continually strive for excellence in instruction, research,
						extension and production to strengthen global competitiveness
						adhering to quality standards for the utmost satisfaction of
						its valued customers.
					</p>
				</div>
				<div className="image-placeholder"></div>
			</section>

			<section className="carousel-container">
				<Slider {...settings}>
					{carouselImages.map((image, index) => (
						<div key={index} className="carousel-slide">
							<img
								src={image}
								alt={`Engineering slide ${index + 1}`}
								className="carousel-image"
							/>
						</div>
					))}
				</Slider>
			</section>

			<hr />

			<div className="highlight-container">
				<div className="highlight-card">
					<img src={fishcrasher} alt="Fish Crasher" />
					<h3>
						BSME Department awards and demonstrates the Fish Crushing
						Machine to Laoag Kaunlaran Association
					</h3>
					<p className="highlight-fishcrasher">
						The BSME Department awards and demonstrates the Fish Crushing
						Machine to Laoag Kaunlaran Association -Cooperative through
						the Regional Innovation Inclusive Cooperation Program between
						DTI, DOST, PRMSU and MSMED Council on the 14th of October
						2022. This is a realization of the objectives of TEAM-UP
						EXTENSION PROGRAM parallel with the THRIVE agenda of the
						college with the goal, "A single step from COE, a hundred
						mouths fed in the community through upscaling and upgrading
						livelihood activities of small and medium enterprises in the
						Province of Zambales".
					</p>
				</div>
			</div>

			<div className="highlight-container">
				<div className="highlight-card">
					<img src={coeSelb} alt="Fish Crasher" />
					<h3>COE conducts Orientation and Gender Sensitivity Training</h3>
					<p className="highlight-fishcrasher">
						The PRMSU College of Engineering conducted the 2nd Batch of
						Orientation and Gender and Development (GAD) / Gender
						Sensitivity Training (GST) Seminar for Freshmen at the Science
						and Engineering Laboratory Building (SELB) Annex on October
						20, 2022 with speakers Engr. Rue Lei Balicaco and Engr. Cindy
						Dullas.
					</p>
				</div>
			</div>

			<section className="services-section">
				<h2>Our Program Offering</h2>
				<div className="services-grid">
					<div className="service-card">
						<h3>Mechanical Engineering</h3>
						<p>
							Crafting the future through innovation and precision,
							Mechanical Engineering transforms dreams into reality with
							every gear turned and every design perfected.
						</p>
					</div>
					<div className="service-card">
						<h3>Electrical Engineering</h3>
						<p>
							Charging forward with innovation and precision, Electrical
							Engineering illuminates the path to a brighter, more
							connected future.
						</p>
					</div>
					<div className="service-card">
						<h3>Civil Engineering</h3>
						<p>
							Designing the future, one foundation at a time. Our
							structures stand not only as testaments to our skill, but
							as enduring symbols of progress and innovation.
						</p>
					</div>
					<div className="service-card">
						<h3>Computer Engineering</h3>
						<p>
							Innovating tomorrow, byte by byte. Here, we don't just
							program software—we engineer possibilities and
							revolutionize the world through technology.
						</p>
					</div>
					<div className="service-card">
						<h3>Mining Engineering</h3>
						<p>
							Unearthing the treasures of the Earth with precision and
							respect. In Mining Engineering, we delve deep to unlock
							natural resources, paving the way for innovation and
							sustainability.
						</p>
					</div>
				</div>
			</section>

			<section>
				<h2>Contact U</h2>
			</section>

			<footer className="landing-footer">
				<div className="footer-content">
					<div className="footer-logo"></div>
				</div>
			</footer>
		</div>
	);
};

export default LandingPage;
