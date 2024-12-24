import React from 'react'
import '../Styles/Portfolio.css'
import hvac from '../../src/Assets/hvac-renov.jpg';
import concorde from '../Assets/concorde.jpg'
import delmon from '../Assets/Delmon-Palace-Hotel-Dubai-Exterior.webp';
import cpalace from '../Assets/cpalace.jpg';
import sunc from '../Assets/suncity.jpg'
import Footer from '../Components/Footer';

function PortFolio() {
  return (
    <div>
         <div className='port-container'>
        <div className='port-background'>
          <img src={hvac} alt='HVAC Maintenance' />
        </div>
        <div className='port-text'>
          <h1>PortFolio</h1>
        </div>
      </div>
      <div className='port-welcome'>
        <div className='port-welcome_text'>
            <h3>Welcome to Mahdiya Technical Services LLC: Some Of Our Latest Works Across The World</h3>
            <p>Our skilled professionals are specialized in revision, maintenance and repair of compressors used in the maritime industry.</p>
        </div>

      </div>
      <div className="image-cont">
    <div className="main-div right">
        <img src={concorde} alt="Concorde" />
        <div className="text">
            <h1>HVAC Renovation Work at <span>Concorde Creek View Hotel</span> by Mahdiya Group</h1>
            <p>The Concorde Creek View Hotel, renowned for its luxurious accommodations and outstanding guest services, underwent a significant HVAC (Heating, Ventilation, and Air Conditioning) system renovation to enhance operational efficiency and ensure ultimate guest comfort. The project was spearheaded by the Mahdiya Group, an industry leader known for delivering innovative engineering solutions and excellence in execution.</p>
        </div>
    </div>
    <div className="main-div left">
        <img src={delmon} alt="Delmon" />
        <div className="text">
            <h1>Transforming Comfort at <span>Delmon Palace</span>: HVAC Renovation by Mahdiya Group</h1>
            <p>The majestic Delmon Palace, an icon of elegance and hospitality, embarked on a journey to redefine comfort for its guests. The Mahdiya Group, a leader in engineering solutions, was entrusted with this transformative project to upgrade and modernize the palace's aging HVAC (Heating, Ventilation, and Air Conditioning) systems.</p>
        </div>
    </div>
    <div className="main-div right">
        <img src={cpalace} alt="Cpalace" />
        <div className="text">
            <h1>Elevating Comfort at <span>Concorde Palace Hotel</span> : HVAC Renovation by Mahdiya Group</h1>
            <p>The iconic Concorde Palace Hotel, a symbol of luxury and refined hospitality, entrusted the Mahdiya Group with a comprehensive upgrade of its HVAC (Heating, Ventilation, and Air Conditioning) systems. The goal was to modernize the infrastructure, align with sustainability standards, and provide a superior experience for its distinguished guests.</p>
        </div>
    </div>
    <div className="main-div left">
        <img src={sunc} alt="Suncity" />
        <div className="text">
            <h1>Redefining Comfort at <span>Suncity Hotel</span> : HVAC Renovation by Mahdiya Group</h1>
            <p>The luxurious Suncity Hotel, a renowned destination for travelers seeking elegance and comfort, partnered with the Mahdiya Group for a complete overhaul of its HVAC (Heating, Ventilation, and Air Conditioning) systems. The project aimed to deliver a seamless balance of cutting-edge technology and energy-efficient solutions, ensuring unmatched comfort for every guest.</p>
        </div>
    </div>
</div>
<Footer/>

    </div>
  )
}

export default PortFolio