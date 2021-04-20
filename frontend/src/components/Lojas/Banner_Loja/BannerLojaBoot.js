import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import './bannerloja.css';

function BannerLojaBoot() {
  return (
    <div>
      <Carousel pause="hover" fade>
        <Carousel.Item Interval={3000}>
          <Image
            className="d-block w-100"
            src="Imagens/Destaques1.jpg"
            alt="First slide"
            fluid
          />
        </Carousel.Item>
        <Carousel.Item Interval={3000}>
          <Image
            className="d-block w-100"
            src="Imagens/Destaques2.jpg"
            alt="Second slide"
            fluid
          />
        </Carousel.Item>
        <Carousel.Item Interval={3000}>
          <Image
            className="d-block w-100"
            src="Imagens/Destaques3.jpg"
            alt="Third slide"
            fluid
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default BannerLojaBoot;

/* function BannerLojaBoot() {
  return (
    <div>
      <Carousel pause="hover" fade>
        <Carousel.Item Interval={3000}>
          <img
            className="d-block w-100"
            src="Imagens/Destaques1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item Interval={3000}>
          <img
            className="d-block w-100"
            src="Imagens/Destaques2.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item Interval={3000}>
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

export default BannerLojaBoot; */
