import React, { useState } from 'react';
import '../Styles/Hvac.css';
import hvac from '../Assets/hvac-chiller.jpg';
import hvac2 from '../Assets/commercial2.jpg';
import hvac3 from '../Assets/commercial3.jpg';
import hvac4 from '../Assets/commercial4.webp';

function Hvac() {
  const [activeSection, setActiveSection] = useState('HVAC Chiller Supply'); // Default section

  const sections = [
    {
      title: 'HVAC Chiller Supply',
      content: `
        From the design of your system to the supply, installation, and ongoing maintenance - we are industry specialists in Chillers and HVAC. 
        We are a chiller supplier with expertise in compressed air extending from capital equipment to the wider factory floor, 
        including chillers, heat recovery systems, ducting, and ventilation.
        You can depend on us for safe and reliable installation with many turn-key projects delivered to date. 
        We offer good, sound advice and dependable support, with a suite of service and maintenance plans to suit any size and type of business.
      `,
      image: hvac,
    },
    {
      title: 'Preventive Maintenance',
      content: `
        Mahdiya offers intelligent solutions for industrial HVAC through high-caliber preventative maintenance options. 
        Preventative maintenance is custom-built. From full-service maintenance services to recommendations and a joint provision 
        with your existing service staff, we make it work for you. Our Residential and Industrial HVAC preventative maintenance 
        services are task- and time-based routine procedures that are tried and proven to extend the lifespan of your equipment. 
        We use an onsite logbook that customers can turn to for services rendered or upcoming services.
      `,
      image: hvac2,
    },
    {
      title: 'Chilled Water Pipe line',
      content: `
        With rising energy costs and a growing focus on sustainability, it has become crucial for businesses and homeowners alike to explore effective strategies to conserve energy and reduce carbon emissions. Insulation is one such strategy that needs to be readily explored.
        
        **How it’s used:**
        ✓ Offered highly attractive in looks.  
        ✓ For enhanced presentation appeal.  
        ✓ That provides for exclusive finish.
      `,
      image: hvac3,
    },
    {
      title: 'HVAC Duct Work',
      content: `
        Committed to delivering exceptional duct cleaning services to homes and businesses, our customers come first. 
        We believe in getting the job done right the first time. At Mahdiya, our thorough cleaning processes protect your 
        existing ductwork, ensuring no damage occurs. Our team leaves no traces or residues behind.
        
        We’re a trusted name in the industry. Our team has been providing consistent cleaning service results to homeowners 
        and small businesses for over 10 years. With Mahdiya Technical Services LLC, you’re in good hands.
      `,
      image: hvac4,
    },
  ];

  return (
    <div className="hvac-container">
      <div className="hvac-heading">
        <h2>Are You Looking For The Residential & Commercial Sectors HVAC Services?</h2>
      </div>

      {/* Buttons to select active section */}
      <div className="hvac-items">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`hvac ${activeSection === section.title ? 'active' : ''}`}
            onClick={() => setActiveSection(section.title)}
            style={{ cursor: 'pointer' }}
          >
            <h6>{section.title}</h6>
          </div>
        ))}
      </div>

      {/* Display content dynamically */}
      <div className="hvac-content">
        {sections.map((section, index) =>
          activeSection === section.title ? (
            <div className="hvac-disc" key={index}>
              <img src={section.image} alt={section.title} />
              <div className="hvac-text">
                <h5>{section.title}</h5>
                <p dangerouslySetInnerHTML={{ __html: section.content.replace(/\n/g, '<br>') }} />
                {section.title === 'Chilled Water Pipe line and Plumbing work' && (
                  <button>Learn More</button>
                )}
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default Hvac;
