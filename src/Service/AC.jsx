import React from 'react'
import './AC.css'
import hvac from '../../src/Assets/hvac-renov.jpg';

function AC() {
  return (
    <div>
        <div className='ac-container'>
        <div className='ac-background'>
          <img src={hvac} alt='Contact' />
        </div>
        <div className='ac-text'>
          <h1>Air Conditioning & Ventilation</h1>
        </div>
      </div>
    </div>
  )
}

export default AC