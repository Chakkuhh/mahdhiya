import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/NavBar.css";
import logo from '../Assets/mahdiya-logo.png';
import { Link } from "react-router-dom";

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
    </div>

    {/* Hamburger Menu Icon (for mobile) */}
    <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
    </div>

    {/* Navigation Links */}
    <ul className={`nav-links ${menuOpen ? "nav-active" : ""}`}>
        <Link to='/home'><li>Home</li></Link> 
            
        <li className="dropdown">Services </li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <Link to='/About'><li>About Us</li></Link>
        
        {/* Services dropdown */}
        

        
    </ul>

    {/* Call-to-Action Button */}
    <Link to='/contact'><button className="btn-get-in-touch">Contact Us</button></Link>
</nav>
    );
}

export default NavBar;
