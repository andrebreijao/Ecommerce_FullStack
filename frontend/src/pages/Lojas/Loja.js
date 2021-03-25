import React from 'react';
import FiltroLoja from '../../components/Lojas/Filtro_Loja/FiltroLoja';
import Navvaleusul from '../../components/nav-bar/shopping_valesul/Navvalesul';
import './loja.css';

function Loja() {
  return (
    <div>
      <Navvaleusul />
      <FiltroLoja />
    </div>
  );
}

export default Loja;
