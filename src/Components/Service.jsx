import React from 'react'
import '../Styles/Service.css'

function Service() {
  return (
    <div>
      <div className='service'>
        <div className='first-service'>
          <h6>Don't Know What To Start With?</h6>
          <h3>We Are Ready For Challenge</h3>
          <p>
            We are absolutely ready for all kinds of painting services and we make sure to give 100%.
          </p>
          <button>View More Services</button>
        </div>

        <div className='sec-service'>
          <div className='first'>
            <h1>4568</h1>
            <div className="service-content">
              <h6>HVAC Services</h6>
              <p>
                Includes the installation, servicing, repair, and maintenance of ventilation equipment.
              </p>
            </div>
          </div>

          <div className="second">
            <h1>7893</h1>
            <div className="service-content">
              <h6>Handyman Services</h6>
              <p>
                A professional who provides installation, repairing & maintenance services. Ready to provide fixes in all areas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
