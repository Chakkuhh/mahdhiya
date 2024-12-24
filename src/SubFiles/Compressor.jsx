import React from 'react'
import './Compressor.css'
import hvac from '../Assets/hvac3.jpg';
import hvacPre from '../Assets/comp1.jpg'
import hvacPre2 from '../Assets/comp2.jpg'
import hvacPre3 from '../Assets/comp3.jpg'
import getin from '../Assets/contact.jpg'
import Footer from '../Components/Footer';
import { GrFan } from "react-icons/gr";
import { SiCcleaner } from "react-icons/si";
import { GrSystem } from "react-icons/gr";
import { FaFan } from "react-icons/fa";

function Compressor() {
  return (
    <div>
<div className='hvac_container'>
        <div className='hvac_background'>
          <img src={hvac} alt='HVAC Maintenance' />
        </div>
        <div className='hvac-text'>
          <h1>
          Compressor Overhauling</h1>
        </div>
      </div>
      <div className='welcome'>
        <div className='welcome_text'>
            <h3>Your Trusted Source for Refurbished HVAC Compressors</h3>
            <p>Are you looking for reliable, high-quality refurbished HVAC compressors? Look no further. At Mahdiya Technical Services LLC , we specialize in providing top-notch refurbished compressors that meet the demands of the HVAC industry. Our mission is to offer you an affordable and eco-friendly alternative to new compressors without compromising on performance or reliability.</p>
        <div className='welcome_image'>
            <img src={hvacPre}/>
            <img src={hvacPre2}/>
            <img src={hvacPre3}/>
        </div>
        </div>

      </div>
      <div className='why'>
  <div className="why-text">
    <h3>Why Choose Refurbished Compressors?</h3>

    <div className='why-text-reasons'>
      <p><span>Cost-Effective:</span> Refurbished compressors are significantly more affordable than new ones, helping you save money on repairs and replacements.</p>
      <p><span>Quality Assurance:</span> Our team of experts meticulously inspects, tests, and refurbishes each compressor to ensure it meets or exceeds industry standards.</p>
      <p><span>Eco-Friendly:</span> By choosing refurbished, you are reducing waste and contributing to a more sustainable environment.</p>
      <p><span>Wide Range of Brands & Models:</span> We offer a variety of refurbished compressors from leading HVAC brands, ensuring you find the right fit for your system.</p>
    </div>
  </div>
</div>
<div className='process'>
    <div className="process-text">
        <h3>OUR PROCESS</h3>
        <p>At Mahdiya Technical Services LLC , we follow a comprehensive refurbishment process that guarantees the quality and reliability of our compressors:</p>
    </div>
    <div className="process-icon">
        <div className='process-content'>
            <GrFan/>
            <h6>Inspection</h6>
            <p>We thoroughly examine each compressor to identify any defects or wear.</p>
        </div>
        <div className='process-content'>
            <SiCcleaner/>
            <h6>Disassembly and Cleaning</h6>
            <p>We disassemble the compressor, clean all components, and replace any damaged or worn parts.</p>
        </div>
        <div className='process-content'>
            <GrSystem/>
            <h6>Reassembly and Testing</h6>
            <p>After reassembling the compressor, we conduct rigorous tests to ensure it performs at its best.</p>
        </div>
        <div className='process-content'>
            <FaFan/>
            <h6>Quality Assurance</h6>
            <p>Each compressor undergoes a final quality check before it is ready for sale.</p>
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
            <h3>Contact Us Today</h3>
            <p>Ready to explore our selection of refurbished HVAC compressors? Contact us today to speak with one of our experts or browse our inventory online. At Mahdiya Technical Services LLC , we're here to meet your HVAC compressor needs with quality, affordability, and sustainability.</p>
        </div>
        <div className='getin_img'>
            <img src={getin}/>
        </div>

      </div>
      <Footer/>
    </div>
  )
}

export default Compressor