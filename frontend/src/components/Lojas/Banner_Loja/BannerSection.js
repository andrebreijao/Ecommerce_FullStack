import React from 'react';
import { Carousel } from 'react-bootstrap';
import './bannerloja.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import fotosBanner from '../../../Dados/lista_banner';

function BannerSection() {
  return (
    <Carousel className="banner-loja" id="banner" fade>
      {fotosBanner.map((item) => (
        <Carousel.Item Interval={4000}>
          <img className="d-block w-100" src={item} alt="slide" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default BannerSection;
