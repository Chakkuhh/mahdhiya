import React, { useEffect, useState } from 'react';
import industry from '../Assets/industry1.jpg';
import worker from '../Assets/worker.jpg';
import '../Styles/Home.css'

function Banner() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide === 0 ? 1 : 0));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      img: industry,
      title: 'WE GOT YOU COVERED',
      headline: 'Your Chiller Solutions',
      description: [
        'Fed Up With Poor Service, So We are here to help you fast and accurate service.',
        'We provide specialists in the areas of residential and commercials.',
      ],
    },
    {
      img: worker,
      title: 'Your comfort is our top priority',
      headline: (
        <>
          Your Comfort is our top priority <span className="hvac-span">HVAC</span> System
        </>
      ),
      description: [
        'Choosing the right MEP & Civil Service Contractor.',
        'Our Experienced Service Team is available for any situation.',
      ],
    },
  ];

  return (
    <div className="home-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`home-slide ${activeSlide === index ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.img})` }}
        >
          <div className="home-text">
            <h5>{slide.title}</h5>
            <h1>{slide.headline}</h1>
            {slide.description.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
            <button>Read More</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Banner;
