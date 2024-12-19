import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/NavBar.css";
import logo from '../Assets/mahdiya-logo.png';

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    // Function to toggle menu on mobile
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Function to handle scroll event
    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`main-navbar ${scrolling ? "scrolled" : ""}`}>
            <div className="logo">
                <img src={logo} alt="logos" />
                {/* <div>
                    <p>محدية تتخدمات الفنية (ش.ذ.م.م )</p>
                    <h3>MAHDIYA TECHNICAL SERVICES L.L.C</h3>
                </div> */}
            </div>

            {/* Hamburger Menu Icon (for mobile) */}
            <div className="menu-icon" onClick={toggleMenu}>
                {menuOpen ? <FaTimes /> : <FaBars />}
            </div>

            {/* Navigation Links */}
            <ul className={`nav-links ${menuOpen ? "nav-active" : ""}`}>
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Portfolio</li>
            </ul>

            {/* Call-to-Action Button */}
            <button className="btn-get-in-touch">GET IN TOUCH</button>
        </nav>
    );
}

export default NavBar;
