/* eslint-disable object-curly-newline */
/* eslint-disable eqeqeq */
/* eslint-disable function-paren-newline */
/* eslint-disable comma-dangle */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable implicit-arrow-linebreak */
import React, { useState, useEffect } from 'react';
import BannerSection from '../../components/Lojas/Banner_Loja/BannerSection';
import Cardlist from '../../components/Lojas/Produtos_Loja/Lista_cards/Cardlist';
import './loja.css';
import FiltroLoja from '../../components/Lojas/Filtro_Loja/FiltroLoja';
import BtnWhats from '../../components/Lojas/whatsapp/BtnWhats';
import NavWebyShop from '../../components/nav-bar/eshop/NavWebyShop';
import Navvaleusul2 from '../../components/nav-bar/shopping_valesul/NavValeSul2';
import ClothFashion from '../../Dados/Lojas/ClothFashion';
import CasadasCuecas from '../../Dados/Lojas/CasadasCuecas';

function Loja() {
  const [termoProcurado, settermoProcurado] = useState('');
  const [generoAtivo, setGeneroAtivo] = useState('');
  const [arrCat1, setarrCat1] = useState([]);
  const [arrCat2, setarrCat2] = useState([]);
  const [arrCat3, setarrCat3] = useState([]);
  const [arrCat4, setarrCat4] = useState([]);
  const [arrCat5, setarrCat5] = useState([]);

  /* const {
    nomeLoja,
    filtros,
    logo,
    fotosBanner,
    produtos,
    cssCard,
    cssBanner,
  } = ClothFashion;
  */
  const {
    nomeLoja,
    filtros,
    logo,
    fotosBanner,
    produtos,
    cssCard,
    cssBanner,
  } = CasadasCuecas;

  console.log(`cssBanner= ${cssBanner.marginBottom}`);
  console.log(typeof fotosBanner);

  // Fucao que pega o valor setado em filtrotoggleANTD
  const handleFilters1 = (filters) => {
    setarrCat1([...filters]);
  };
  const handleFilters2 = (filters) => {
    setarrCat2([...filters]);
  };
  const handleFilters3 = (filters) => {
    setarrCat3([...filters]);
  };
  const handleFilters4 = (filters) => {
    setarrCat4([...filters]);
  };
  const handleFilters5 = (filters) => {
    setarrCat5([...filters]);
  };

  // Funcoes que ajustam o termo selecionado
  const mudarGeneroAtivo = (e) => {
    // console.log(e)
  };

  // Filtro barra de pesquisa
  const produtosTermo = produtos.filter((val) => {
    if (termoProcurado === '') {
      return val;
    }
    if (val.titulo.toLowerCase().includes(termoProcurado.toLowerCase())) {
      return val;
    }
    return false;
  });

  // Filtro combinado

  // função de verificação se algum elemento do array selecionado está nas especificações do produto
  const check = (arr1, arr2) => {
    let item;
    for (item of arr1) {
      if (arr2.includes(item)) {
        return true;
      }
    }
    return false;
  };

  // função para fazer o junção dos filtros
  // Before: Array de cards antes do filtro
  // arrFilter: Itens selecionados pelo usuário para realizar o filtro
  // arrProd: Lista do filtro em que o produto se encontra

  const mergeFilters1 = (before, arrFilter) => {
    if (arrFilter.length == !0) {
      return before.filter((val) => check(arrFilter, val.filtro1));
    }
    return before;
  };

  const mergeFilters2 = (before, arrFilter) => {
    if (arrFilter.length == !0) {
      return before.filter((val) => check(arrFilter, val.filtro2));
    }
    return before;
  };

  const mergeFilters3 = (before, arrFilter) => {
    if (arrFilter.length == !0) {
      return before.filter((val) => check(arrFilter, val.filtro3));
    }
    return before;
  };

  const mergeFilters4 = (before, arrFilter) => {
    if (arrFilter.length == !0) {
      return before.filter((val) => check(arrFilter, val.filtro4));
    }
    return before;
  };

  const mergeFilters5 = (before, arrFilter) => {
    if (arrFilter.length == !0) {
      return before.filter((val) => check(arrFilter, val.filtro5));
    }
    return before;
  };

  const produtosFunc = () => {
    const arr1 = mergeFilters1(produtosTermo, arrCat1);
    const arr2 = mergeFilters2(arr1, arrCat2);
    const arr3 = mergeFilters3(arr2, arrCat3);
    const arr4 = mergeFilters4(arr3, arrCat4);
    const arr5 = mergeFilters5(arr4, arrCat5);

    return arr5;
  };
  /* if (arrCat1.length === 0) {
      return produtosTermo;
    }
    return produtosTermo.filter((val) =>
      // arrCat1.indexOf(val.filtro1) !== -1;
      check(arrCat1, val.filtro1)
  ); */

  const produtosFiltroGeral = () => {
    if (generoAtivo === '') {
      return produtosFunc();
    }
    return produtosFunc().filter((val) => val.genero === generoAtivo);
  };

  // Reiniciar o filtro
  const reiniciarFiltro = () => {
    settermoProcurado('');
    setarrCat1([]);
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
        handleFilters1={(filters) => {
          handleFilters1(filters);
        }}
        handleFilters2={(filters) => {
          handleFilters2(filters);
        }}
        handleFilters3={(filters) => {
          handleFilters3(filters);
        }}
        handleFilters4={(filters) => {
          handleFilters4(filters);
        }}
        handleFilters5={(filters) => {
          handleFilters5(filters);
        }}
        nomeLoja={nomeLoja}
        logo={logo}
        filtros={filtros}
      />

      <NavWebyShop style={{ zIndex: '1' }} />

      <Navvaleusul2 />

      <div className="conteudo-loja">
        <BannerSection fotosBanner={fotosBanner} cssBanner={cssBanner} />
        <Cardlist
          produtos={produtosFiltroGeral()}
          reiniciarFiltro={reiniciarFiltro}
          cssCard={cssCard}
        />
      </div>
      <BtnWhats className="btn-whats" />
    </>
  );
}

export default Loja;
