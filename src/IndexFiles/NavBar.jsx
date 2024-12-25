import React, { useEffect } from "react";
import "../Styles/NavBar.css";
import logo from '../Assets/mahdiya-logo.png';
import { Link } from "react-router-dom";

function NavBar() {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector("nav");
      if (window.scrollY > 50) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Mahdiya Logo" />
        </Link>
      </div>
      <ul>
        <li><Link to="/" className="active">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li>
          <Link to="#" className="desktop-item">Services</Link>
          <ul className="dropdown-menu">
            <li><Link to="/home/hvacPre">HVAC SERVICES</Link></li>
            <li><Link to="/home/hvacReno">HVAC RENOVATION</Link></li>
            <li><Link to="/home/compressor">COMPRESSOR OVERHAULING</Link></li>
            <li><Link to="/home/aircooler">AIR COOLED CHILLER</Link></li>
            <li><Link to="/home/aircondition">AC INSTALLATION</Link></li>
            <li><Link to="/home/motor">ELECTRIC MOTOR REPAIR</Link></li>
          </ul>
        </li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <Link to="/get-in-touch" className="btn">GET IN TOUCH</Link>
    </nav>
  );
}

export default NavBar;
