import React from 'react';
import { Carousel } from 'react-bootstrap';
import './bannerloja.css';

function BannerLojaBoot() {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item Interval={4000}>
          <img
            className="d-block w-100"
            src="Imagens/Destaques1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item Interval={4000}>
          <img
            className="d-block w-100"
            src="Imagens/Destaques2.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item Interval={4000}>
          <img
            className="d-block w-100"
            src="Imagens/Destaques3.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default BannerLojaBoot;
