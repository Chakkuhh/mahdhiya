import React from "react";
import "../Styles/Footer.css"; // Import your CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Company */}
        <div className="footer-section about">
          <h3>About Company</h3>
          <p>
            With the Leading and Coordination power of Our Founder, Who has a
            vast Engineering Experience in the field of Air Conditioning,
            Electrical, Electromechanical Equipment Installation & Maintenance.
          </p>
          <a href="#more" className="more-link">
            More About &#9733;
          </a>
        </div>

       

        {/* Popular Services */}
        <div className="footer-section popular-services">
          <h3>Popular Services</h3>
          <ul>
            <li>Air Conditioning & Ventilation</li>
            <li>Chiller Maintenance & Services</li>
            <li>Duct Fabrication & Duct Cleaning</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Mahdiya Technical Services LLC</p>
          <p>WH No. 11</p>
          <p>Al Raeesi Warehouses</p>
          <p>Alqusais Ind.1, Alqusais, Dubai</p>
          <p>
            📧 <a href="mailto:info@mahdiya.ae">info@mahdiya.ae</a>
          </p>
          <p>📞 04 2365765</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          Copyright © 2022. All rights reserved. Powered by{" "}
          <span>Mahdiya Technical Services LLC</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
