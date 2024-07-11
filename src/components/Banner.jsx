// src/components/Banner.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slide1 from '../assets/Slide1.png';
import Slide2 from '../assets/Slide2.png'; // Add more imports as needed
import Slide3 from '../assets/Slide3.png';
import Slide4 from '../assets/Slide4.png';
import Slide5 from '../assets/Slide5.png';
import './Banner.css';

const Banner = () => {
  const images = [Slide1, Slide2, Slide3, Slide4, Slide5];

  return (
    <div className="banner">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={3000}
        showStatus={false}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;

