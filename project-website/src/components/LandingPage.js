import React from "react";
import "../styles/LandingPage.css";

import SELB from "../assets/SELB.ico";

const LandingPage = () => {
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

			<footer className="landing-footer">
				<div className="footer-content">
					<div className="footer-logo">Engineering Solutions</div>
					<div className="footer-links">
						<a href="#">Home</a>
						<a href="#">Services</a>
						<a href="#">Projects</a>
						<a href="#">Contact</a>
					</div>
					<div className="footer-social">
						{/* Social media icons */}
						<a href="#">LinkedIn</a>
						<a href="#">Twitter</a>
						<a href="#">GitHub</a>
					</div>
				</div>
				<div className="footer-bottom">
					© 2023 Engineering Solutions. All Rights Reserved.
				</div>
			</footer>
		</div>
	);
};

export default LandingPage;
