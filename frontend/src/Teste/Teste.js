/* eslint-disable no-unused-vars */
/* eslint-disable implicit-arrow-linebreak */
import React, { useState, useEffect } from 'react';
import BannerSection from '../components/Lojas/Banner_Loja/BannerSection';
import Cardlist from '../components/Lojas/Produtos_Loja/Lista_cards/Cardlist';
import '../pages/Lojas/loja.css';
import FiltroLoja from './Teste2';
import listaprodutoCloth from '../Dados/lista_produtosCloth';
import BtnWhats from '../components/Lojas/whatsapp/BtnWhats';
import NavWebyShop from '../components/nav-bar/eshop/NavWebyShop';
import Navvaleusul2 from '../components/nav-bar/shopping_valesul/NavValeSul2';

function Loja() {
  const [termoProcurado, settermoProcurado] = useState('');
  const [arrCat, setarrCat] = useState([]);
  const [generoAtivo, setGeneroAtivo] = useState('');

  // Fucao que pega o valor setado em filtrotoggleANTD
  const handleFilters = (filters) => {
    setarrCat([...filters]);
  };

  // Funcoes que ajustam o termo selecionado
  const mudarGeneroAtivo = (e) => {
    // console.log(e)
  };

  // Filtro barra de pesquisa
  const produtosTermo = listaprodutoCloth.filter((val) => {
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
      return produtosTermo;
    }
    return produtosTermo.filter((val) => arrCat.indexOf(val.categoria) !== -1);
  };

  const produtosFiltroGeral = () => {
    if (generoAtivo === '') {
      return produtosFunc();
    }
    return produtosFunc().filter((val) => val.genero === generoAtivo);
  };

  // Reiniciar o filtro
  const reiniciarFiltro = () => {
    settermoProcurado('');
    setarrCat([]);
    setGeneroAtivo('');
  };

  const fixedStyle = { position: 'fixed', bottom: '10px', right: '10px' };

  return (
    <>
      <FiltroLoja
        style={{ zIndex: '0' }}
        termoProcurado={termoProcurado}
        settermoProcurado={settermoProcurado}
        generoAtivo={generoAtivo}
        setGeneroAtivo={setGeneroAtivo}
        handleFilters={(filters) => {
          handleFilters(filters);
        }}
      />

      <NavWebyShop style={{ zIndex: '1' }} />

      <Navvaleusul2 />

      <div className="conteudo-loja">
        <BannerSection />
        <Cardlist
          produtos={produtosFiltroGeral()}
          reiniciarFiltro={reiniciarFiltro}
        />
      </div>
      <BtnWhats className="btn-whats" />
    </>
  );
}

export default Loja;
