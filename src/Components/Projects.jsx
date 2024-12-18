import React from 'react'
import '../Styles/Pro.css'
import concorde from '../Assets/concorde.jpg'
import delmon from '../Assets/delmon.jpeg';
import cpalace from '../Assets/cpalace.jpg';
import sunc from '../Assets/suncity.jpg'

function Projects() {
  return (
    <div>
        <div className='Projects'>
            <div className='pro-heading'>
                <h1>Latest HVAC Completed Projects</h1>
                <p>Our skilled professionals are specialized in revision, maintenance and repair of compressors used in the maritime industry.</p>
            </div>
            <div className='pro-images'>
  <div className='pro-image'>
    <img src={concorde} alt="Corncrode Creek" />
    <p>Concorde Creek View</p>
  </div>
  <div className='pro-image'>
    <img src={cpalace} alt="Ethihad Airways" />
    <p>Delmon Palace</p>
  </div>
  <div className='pro-image'>
    <img src={delmon} alt="Ethihad Airways" />
    <p>Concorde Palace</p>
  </div>
  <div className='pro-image'>
    <img src={sunc} alt="Soudhi Airways" />
    <p>SunCity</p>
  </div>
</div>
            
        </div>
    </div>
  )
}

export default Projects