/* eslint-disable react/prop-types */
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './bannerloja.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function BannerSection({ fotosBanner, cssBanner }) {
  const { marginBottom } = cssBanner;
  return (
    <Carousel className="banner-loja" id="banner" fade style={{ marginBottom }}>
      {fotosBanner.map((item) => (
        <Carousel.Item Interval={4000} key={item}>
          <img className="d-block w-100" src={item} alt="slide" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default BannerSection;
