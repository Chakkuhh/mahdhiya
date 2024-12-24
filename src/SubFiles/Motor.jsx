import React from 'react'
import './Motor.css'
import hvac from '../../src/Assets/hvac-renov.jpg';
import hvacPre from '../Assets/em1.jpg'
import hvacPre2 from '../Assets/em2.jpg'
import hvacPre3 from '../Assets/em3.jpg'
import getin from '../Assets/electricimg.jpg'
import Footer from '../Components/Footer';
import { GrFan } from "react-icons/gr";
import { SiCcleaner } from "react-icons/si";
import { GrSystem } from "react-icons/gr";
import { FaFan } from "react-icons/fa";

function Motor() {
  return (
    <div>
        <div className='hvac_container'>
        <div className='hvac_background'>
          <img src={hvac} alt='HVAC Maintenance' />
        </div>
        <div className='hvac-text'>
          <h1>Electrical Motor Repairs & Services</h1>
        </div>
      </div>
      <div className='welcome'>
        <div className='welcome_text'>
            <h3>Welcome to Mahdiya Technical Services LLC: Experts in Electrical Motor Repair and Rewinding</h3>
            <p>Is your electrical motor giving you trouble? Don’t let a malfunctioning motor slow you down. At Mahdiya Technical Services LLC, we specialize in electrical motor repair and rewinding, providing fast, reliable, and cost-effective solutions for all your motor-related needs. With years of experience and a team of skilled technicians, we ensure your motors are up and running in no time.</p>
        <div className='welcome_image'>
            <img src={hvacPre}/>
            <img src={hvacPre2}/>
            <img src={hvacPre3}/>
        </div>
        </div>

      </div>
      <div className='why'>
  <div className="why-text">
    <h3>Why Choose Our Motor Repair Services?</h3>

    <div className='why-text-reasons'>
      <p><span>Expertise and Experience:</span> Our team has extensive knowledge in electrical motor repair and rewinding, ensuring every job is done right the first time.</p>
      <p><span>Comprehensive Services:</span> We handle everything from minor repairs to complete motor rewinding, catering to a variety of motor types and brands.</p>
      <p><span>Fast Turnaround:</span>We understand that time is money, so we work efficiently to get your motors back in service quickly.</p>
      <p><span>Quality Assurance:</span> Our repairs and rewinding services are backed by thorough testing and quality checks to ensure optimal performance.</p>
      <p><span>Cost-Effective Solutions:</span>Repairing and rewinding is often more affordable than replacing the entire motor, helping you save on costs.</p>
    </div>
  </div>
</div>
<div className='process'>
    <div className="process-text">
        <h3>Our Repair and Rewinding Process</h3>
        <p>At Mahdiya Technical Services LLC , we take a systematic approach to motor repair and rewinding to ensure quality and reliability:</p>
    </div>
    <div className="process-icon">
        <div className='process-content'>
            <GrFan/>
            <h6>Inspection and Diagnosis</h6>
            <p>We start by thoroughly inspecting the motor to identify the root cause of the problem.</p>
        </div>
        <div className='process-content'>
            <SiCcleaner/>
            <h6>Repair or Rewinding</h6>
            <p>Depending on the diagnosis, we either repair the faulty components or proceed with a complete motor rewinding.</p>
        </div>
        <div className='process-content'>
            <GrSystem/>
            <h6>Cleaning and Reassembly</h6>
            <p>We clean all parts and reassemble the motor with precision.</p>
        </div>
        <div className='process-content'>
            <FaFan/>
            <h6>Testing and Quality Control</h6>
            <p>Before returning your motor, we conduct rigorous tests to ensure it meets or exceeds industry standards.</p>
        </div>
    </div>
</div>
<div className='customer_sat'>

        <div className='customer_sat_text'>
            <h3>Customer Satisfaction Guaranteed</h3>
            <p>We are committed to providing exceptional customer service and ensuring your satisfaction. Our team is here to answer any questions you have and help you find the perfect refurbished compressor for your HVAC system. Plus, we offer warranties on our refurbished compressors, giving you peace of mind with your purchase.</p>

        </div>

      </div>
      <div className="getin">
        <div className='getin_text'>
            <h3>Get in Touch Today</h3>
            <p>Don't let a faulty motor disrupt your operations. Contact us today to learn more about our electrical motor repair and rewinding services. Whether you need a quick fix or a complete overhaul, Mahdiya Technical Services LLC is here to help. Reach out to us to discuss your needs, or request a free quote online. Let's get your motors running smoothly again!</p>
        </div>
        <div className='getin_img'>
            <img src={getin}/>
        </div>

      </div>
      <Footer/>
    </div>
  )
}

export default Motor