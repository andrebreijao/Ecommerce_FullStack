/* eslint-disable implicit-arrow-linebreak */
import React, { useState } from 'react';
import BannerSection from '../../components/Lojas/Banner_Loja/BannerSection';
import FiltroLoja from '../../components/Lojas/Filtro_Loja/FiltroLoja';
import Cardlist from '../../components/Lojas/Produtos_Loja/Lista_cards/Cardlist';
import Navvaleusul from '../../components/nav-bar/shopping_valesul/Navvalesul';
import listaproduto from '../../Dados/lista_produtos';
import './loja.css';

function Loja() {
  const [termoProcurado, settermoProcurado] = useState('');

  const produtos = listaproduto.filter((val) => {
    if (termoProcurado === '') {
      return val;
    }
    if (val.titulo.toLowerCase().includes(termoProcurado.toLowerCase())) {
      return val;
    }
    return false;
  });

  return (
    <div>
      <Navvaleusul />
      <FiltroLoja
        termoProcurado={termoProcurado}
        settermoProcurado={settermoProcurado}
      />
      <div className="conteudo-loja">
        <BannerSection />
        <Cardlist produtos={produtos} />
      </div>
    </div>
  );
}

export default Loja;
