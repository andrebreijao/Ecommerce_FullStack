/* eslint-disable no-unused-vars */
/* eslint-disable implicit-arrow-linebreak */
import React, { useState, useEffect } from 'react';
import BannerSection from '../../components/Lojas/Banner_Loja/BannerSection';
import FiltroLoja from '../../components/Lojas/Filtro_Loja/FiltroLoja';
import Cardlist from '../../components/Lojas/Produtos_Loja/Lista_cards/Cardlist';
import Navvaleusul from '../../components/nav-bar/shopping_valesul/Navvalesul';
import listaproduto from '../../Dados/lista_produtos';
import './loja.css';

function Loja() {
  const [termoProcurado, settermoProcurado] = useState('');
  const [arrCat, setarrCat] = useState([]);
  // const [produtos, setprodutos] = useState([...listaproduto]);

  // Fucao que pega o valor setado em filtrotoggleANTD
  const handleFilters = (filters) => {
    setarrCat([...filters]);
  };

  // Filtro barra de pesquisa
  const produtosTermo = listaproduto.filter((val) => {
    if (termoProcurado === '') {
      return val;
    }
    if (val.titulo.toLowerCase().includes(termoProcurado.toLowerCase())) {
      return val;
    }
    return false;
  });

  // Filtro combinado
  const produtosFunc = () => {
    if (arrCat.length === 0) {
      console.log('arr cat vazio');
      return produtosTermo;
    }
    return produtosTermo.filter((val) => arrCat.indexOf(val.categoria) !== -1);
  };

  return (
    <div>
      <Navvaleusul />
      <FiltroLoja
        termoProcurado={termoProcurado}
        settermoProcurado={settermoProcurado}
        handleFilters={(filters) => {
          handleFilters(filters);
        }}
      />
      <div className="conteudo-loja">
        <BannerSection />
        <Cardlist produtos={produtosFunc()} />
      </div>
    </div>
  );
}

export default Loja;
