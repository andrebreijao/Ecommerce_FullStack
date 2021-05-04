import React from 'react';
import { Carousel } from 'react-bootstrap';
import './bannerloja.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import listaBannerCueca from '../../../Dados/lista_bannerCueca';

function BannerSection() {
  return (
    <Carousel className="banner-loja" id="banner" fade>
      {listaBannerCueca.map((item) => (
        <Carousel.Item Interval={4000} key={item}>
          <img className="d-block w-100" src={item} alt="slide" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default BannerSection;
