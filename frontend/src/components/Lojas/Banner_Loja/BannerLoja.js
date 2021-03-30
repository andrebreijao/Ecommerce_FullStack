/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import './bannerloja.css';

function BannerLoja({ fotosBanner }) {
  const [x, setX] = useState(0);

  const MyTimer = () => {
    setInterval(goright, 4000);
  };

  const ClearTimer = () => {
    clearInterval(MyTimer);
  };

  const RestartTimer = () => {
    ClearTimer();
    console.log('clear timer');
    MyTimer();
  };

  const goleft = () => {
    if (x === 0) {
      setX(-100 * (fotosBanner.length - 1));
    } else {
      setX(x + 100);
    }
  };

  const goright = () => {
    if (x === -100 * (fotosBanner.length - 1)) {
      setX(0);
    } else {
      setX(x - 100);
    }
    RestartTimer();
  };

  useEffect(RestartTimer(), [x]);

  return (
    <div className="container-banner">
      {fotosBanner.map((item) => (
        <div
          key={item}
          className="foto-banner"
          style={{ transform: `translateX(${x}%)` }}
        >
          <img src={item} alt="Banner" />
        </div>
      ))}
      <button id="goleft" onClick={goleft} type="button">
        <i className="fas fa-chevron-left" />
      </button>
      <button id="goright" onClick={goright} type="button">
        <i className="fas fa-chevron-right" />
      </button>
    </div>
  );
}

export default BannerLoja;
