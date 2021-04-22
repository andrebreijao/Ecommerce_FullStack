import React from 'react';
import Navvaleusul from './Navvalesul';
import NavWebyShop from '../eshop/NavWebyShop';

function NavValeWe() {
  return (
    <>
      <NavWebyShop />
      <Navvaleusul style={{ position: 'sticky', top: '0px', zIndex: '1000' }} />
    </>
  );
}

export default NavValeWe;
