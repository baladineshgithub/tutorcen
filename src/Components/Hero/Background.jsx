import React, { useState, useEffect } from 'react';
import './Background.css'; 

import Heroimg from '../Assets/FireShot Capture 007.png';
import Heroimgone from '../Assets/FireShot Capture 005.png';
import Heroimgtwo from '../Assets/FireShot Capture 006.png';

const AutoplaySlider = () => {
  const images = [Heroimg, Heroimgone, Heroimgtwo];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 2000); 

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <div className="slider-container">
      {images.map((image, index) => (
        <div key={index} className={index === currentImageIndex ? 'slide active' : 'slide'}>
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default AutoplaySlider;









































































// import React from 'react'
// import Heroimg from '../Assets/FireShot Capture 007.png';
// import Heroimgone from '../Assets/FireShot Capture 005.png';
// import Heroimgtwo from '../Assets/FireShot Capture 006.png';

// function Background({first}) {
  // if (first === 0) {
  //   return (
  //     <img src={Heroimg} className='background' alt="" />
  //   );
  // } else if (first === 1) {
  //   return (
  //     <img src={Heroimgone} className='background' alt="" />
  //   );
  // } else if (first === 2) {
  //   return (
  //     <img src={Heroimgtwo} className='background' alt="" />
  //   );
  // } else {
  //   // Handle other cases if needed
  //   return null;
  // }
// }
  

// export default Background