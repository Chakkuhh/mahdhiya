import React from 'react';
import '../Styles/Mechinery.css';
import york from '../Assets/York1.jpg';
import carriee from '../Assets/Carrier.jpg'
import copeland from '../Assets/Copeland-2.jpg'
import trane from '../Assets/Trane-1.jpg'
import henball from '../Assets/Hanbell.jpg'
import binzer from '../Assets/Bitzer-1.jpg'
import grasso from '../Assets/grasso.jpg'
import mcqay from '../Assets/Mcquay.jpg'
 
function Mechinery() {
  return (
    <div className="mech-container">
      <div className="mech-heading">
        <h1>COMPRESSOR OVERHAULING</h1>
        <p>Our skilled professionals are specialized in revision, maintenance and repair of compressors used in the maritime industry</p>
      </div>
      <div className="mechines">
        <div className="image-wrapper">
          <img src={carriee} alt="Compressor 1" />
          <div className="image-name">CARRIER</div>
        </div>
        <div className="image-wrapper">
          <img src={york} alt="Compressor 2" />
          <div className="image-name">YORK</div>
        </div>
        <div className="image-wrapper">
          <img src={copeland} alt="Compressor 3" />
          <div className="image-name">COPELAND</div>
        </div>
        <div className="image-wrapper">
          <img src={trane} alt="Compressor 4" />
          <div className="image-name">TRANE</div>
        </div>
        <div className="image-wrapper">
          <img src={henball} alt="Compressor 4" />
          <div className="image-name">HENBELL</div>
        </div>
        <div className="image-wrapper">
          <img src={binzer} alt="Compressor 4" />
          <div className="image-name">BITZER</div>
        </div>
        <div className="image-wrapper">
          <img src={grasso} alt="Compressor 4" />
          <div className="image-name">GRASSO</div>
        </div>
        <div className="image-wrapper">
          <img src={mcqay} alt="Compressor 4" />
          <div className="image-name">McQUAY</div>
        </div>
      </div>
    </div>
  );
}

export default Mechinery;
