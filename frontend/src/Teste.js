/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import BannerSectionCueca from './components/Lojas/Banner_Loja/BannerSectionCueca';
import CardlistCueca from './components/Lojas/Produtos_Loja/Lista_cards/CardlistCueca';
import './pages/Lojas/loja.css';
import FiltroLojaCueca from './components/Lojas/Filtro_Loja/FiltroLojaCueca';
import listaprodutoCueca from './Dados/lista_produtosCueca';
import BtnWhats from './components/Lojas/whatsapp/BtnWhats';
import NavWebyShop from './components/nav-bar/eshop/NavWebyShop';
import Navvaleusul2 from './components/nav-bar/shopping_valesul/NavValeSul2';

function CasadasCuecas() {
  const [termoProcuradoCueca, settermoProcuradoCueca] = useState('');
  const [arrCat, setarrCat] = useState([]);
  const [generoAtivo, setGeneroAtivo] = useState('');
  const [produtos, setProdutos] = useState([...listaprodutoCueca]);

  // Fucao que pega o valor setado em filtrotoggleANTD
  const handleFilters = (filters) => {
    setarrCat([...filters]);
  };

  // Filtro barra de pesquisa
  const produtosTermo = listaprodutoCueca.filter((val) => {
    if (termoProcuradoCueca === '') {
      return val;
    }
    if (val.titulo.toLowerCase().includes(termoProcuradoCueca.toLowerCase())) {
      return val;
    }
    return false;
  });

  // Filtro combinado
  const produtosFunc = () => {
    if (arrCat.length === 0) {
      return [...produtosTermo];
    }
    return [...produtosTermo].filter(
      (val) => arrCat.indexOf(val.categoria) !== -1
    );
  };

  const produtosFiltroGeral = () => {
    if (generoAtivo === '') {
      return [...produtosFunc()];
    }
    return [...produtosFunc()].filter((val) => val.genero === generoAtivo);
  };

  // Reiniciar o filtro
  const reiniciarFiltro = () => {
    settermoProcuradoCueca('');
    setarrCat([]);
    setGeneroAtivo('');
  };

  /* const produtoFiltrados = new Promise((resolve, reject) => {
    const produtoFiltradosPromise = produtosFiltroGeral();
    resolve(produtoFiltradosPromise);
  }).then((produtoFiltradosPromise) => produtoFiltradosPromise); */

  return (
    <>
      <NavWebyShop style={{ zIndex: '1' }} />

      <Navvaleusul2 />

      <FiltroLojaCueca
        style={{ zIndex: '0' }}
        termoProcuradoCueca={termoProcuradoCueca}
        settermoProcuradoCueca={settermoProcuradoCueca}
        generoAtivo={generoAtivo}
        setGeneroAtivo={setGeneroAtivo}
        handleFilters={(filters) => {
          handleFilters(filters);
        }}
      />

      <div className="conteudo-loja">
        {/* <BannerSectionCueca /> */}
        <img
          src="Imagens/Lojas/São_José_dos_Campos/CenterVale/Casa_das_Cuecas/1170x500_classicos.webp"
          alt="banner"
          style={{
            height: 'auto',
            width: '80%',
            margin: '1rem',
            marginLeft: '3rem',
          }}
        />

        <CardlistCueca produtos={produtos} reiniciarFiltro={reiniciarFiltro} />
      </div>

      <BtnWhats className="btn-whats" />
    </>
  );
}

export default CasadasCuecas;
