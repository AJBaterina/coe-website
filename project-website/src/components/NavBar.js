import React, { useState, useEffect } from "react";
import "../styles/NavBar.css";

const Navbar = () => {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
	const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const navItems = [
		{ name: "Home", link: "/" },
		{ name: "Program Offering", link: "/programs" },
		{ name: "Research and Extension", link: "/research-and-extentions" },
		{ name: "History", link: "/history" }
	];

	const MobileNavbar = () => (
		<nav className="mobile-navbar">
			<div className="logo"></div>
			<h6>
				<a href="/" target="_self">
					PRMSU College of Engineering
				</a>
			</h6>
			<div
				className={`hamburger ${isHamburgerOpen ? "open" : ""}`}
				onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}>
				<span></span>
				<span></span>
				<span></span>
			</div>
			{isHamburgerOpen && (
				<div className="mobile-dropdown">
					{navItems.map((item, index) => (
						<a
							key={index}
							href={item.link}
							className="mobile-dropdown-item">
							{item.name}
						</a>
					))}
				</div>
			)}
		</nav>
	);

	const DesktopNavbar = () => (
		<nav className="desktop-navbar">
			<div className="logo">
				<a href="/" target="_self"></a>
			</div>
			<h3>
				<a href="/" target="_self">
					PRMSU College of Engineering
				</a>
			</h3>
			<div className="nav-links">
				{navItems.map((item, index) => (
					<div key={index} className="nav-item">
						<a href={item.link}>{item.name}</a>
					</div>
				))}
			</div>
		</nav>
	);

	return isMobile ? <MobileNavbar /> : <DesktopNavbar />;
};

export default Navbar;
