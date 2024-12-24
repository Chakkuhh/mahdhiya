import React from 'react';

import './HvacPre.css';
import hvac from '../../src/Assets/hvac-renov.jpg';
import hvacPre from '../Assets/hvac-preventive.jpg'
import hvacPre2 from '../Assets/hvac-annualservice.png'
import hvacPre3 from '../Assets/hvac-maintenance.jpg'
import getin from '../Assets/hvac-git.jpg'
import Footer from '../Components/Footer';
import { FaLongArrowAltRight } from "react-icons/fa";

function HvacPrev() {
  return (
    <div>
      <div className='hvac_container'>
        <div className='hvac_background'>
          <img src={hvac} alt='HVAC Maintenance' />
        </div>
        <div className='hvac-text'>
          <h1>HVAC Preventive Maintenance/AMC Services</h1>
        </div>
      </div>
      <div className='welcome'>
        <div className='welcome_text'>
            <h3>Welcome to Mahdiya Technical Services LLC: Experts in HVAC Preventive Maintenance/AMC Services</h3>
            <p>Our industrial HVAC preventative maintenance services are task- and time-based routine procedures that are tried and proven to extend the life span of your equipment. While performing maintenance, our skilled service technicians can identify potential problems and often resolve them on the spot. You’ll benefit over the long run too. Professional HVAC maintenance extends the life of your comfort system, saving you from the cost of a premature replacement.</p>
        <div className='welcome_image'>
            <img src={hvacPre}/>
            <img src={hvacPre2}/>
            <img src={hvacPre3}/>
        </div>
        </div>

      </div>
      <div className='why'>
        <div className="why-text">
            <h3>Why Choose Mahdiya Technical Services LLC for HVAC Preventive Maintenance and AMC Services</h3>
            <p>At Mahdiya Technical Services LLC, we understand the importance of maintaining your HVAC systems for optimal performance and efficiency. Our comprehensive preventive maintenance and Annual Maintenance Contract (AMC) services are designed to keep your HVAC systems running smoothly year-round. Here’s why you should choose us:</p>

            <div className='why-text-reasons'>
                <h6>Expertise and Experience</h6>
                <p>With years of experience in the HVAC industry, our team of certified technicians brings a wealth of knowledge and expertise to every job. We are proficient in servicing all types and brands of HVAC systems, ensuring that your equipment receives the best care possible.</p>
                <h6>Comprehensive Maintenance Plans</h6>
                <p>Our preventive maintenance and AMC services are tailored to meet the specific needs of your HVAC systems. We offer detailed inspections, cleaning, and tune-ups to prevent potential issues and extend the lifespan of your equipment. Our plans are flexible and can be customized to fit your requirements and budget.</p>
                <h6>Improved Efficiency and Performance</h6>
                <p>Regular maintenance from Mahdiya Technical Services LLC helps improve the efficiency and performance of your HVAC systems. By keeping your equipment in top condition, we help you save on energy costs and reduce the likelihood of unexpected breakdowns.</p>
                <h6>Prompt and Reliable Service</h6>
                <p>We pride ourselves on providing prompt and reliable service to all our clients. Our team is dedicated to ensuring that your HVAC systems are always operating at their best. With our AMC services, you can enjoy peace of mind knowing that help is just a phone call away.</p>
            </div>
        </div>

      </div>
      <div className='customer_sat'>

        <div className='customer_sat_text'>
            <h3>Customer Satisfaction Guaranteed</h3>
            <p>At Mahdiya Technical Services LLC, customer satisfaction is our top priority. We are committed to delivering high-quality services and building long-lasting relationships with our clients. Our friendly and professional team is always ready to address your concerns and ensure your complete satisfaction.</p>

        </div>

      </div>
      <div className="getin">
        <div className='getin_text'>
            <h3>Get in Touch Today</h3>
            <p>Ensure your HVAC systems are in top condition with Mahdiya Technical Services LLC’s preventive maintenance and AMC services. Contact us today to learn more about our services or to schedule an appointment. Let us help you maintain a comfortable and efficient environment all year round.</p>
        </div>
        <div className='getin_img'>
            <img src={getin}/>
        </div>

      </div>
      <Footer/>
    </div>
  );
}

export default HvacPrev;
