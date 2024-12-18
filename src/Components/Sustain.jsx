import React, { useState } from 'react';
import '../Styles/Sustain.css';
import gear from '../Assets/gear.jpg';
import { useInView } from 'react-intersection-observer'; // Use the new package

function Sustain() {
  const [isVisible, setIsVisible] = useState(false);

  const handleInViewChange = (inView) => {
    setIsVisible(inView);
  };

  const { ref } = useInView({
    triggerOnce: true,  // Only trigger the animation once
    onChange: handleInViewChange,
    threshold: 0.5, // The element should be 50% in view to trigger the animation
  });

  return (
    <div>
      <div className={`sustain ${isVisible ? 'fade-in' : ''}`} ref={ref}>
        <div className='sustain-text'>
          <h6 className='type'>CLIENT FEEDBACK</h6>
          <h4>SUSTAINABILITY</h4>
          <p>We are committed to environmental sustainability. Grounded in a wealth of experience, our aim is to ensure your cooling systems remain in perfect working order and running costs are minimised.</p>
        </div>
        <div className="sustain-img">
          <img src={gear} alt="Sustainability" />
        </div>
      </div>
    </div>
  );
}

export default Sustain;
