/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './bannerloja.css';
import Carousel from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function BannerLoja() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    /*
    <Carousel>
      <Carousel.Item>
        <img src="Imagens/loja-nike.jpeg" alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="Imagens/Destaques1.jpg" alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="Imagens/Destaques1.jpg" alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    */
    <h1>Banner</h1>
  );
}

export default BannerLoja;
