/* eslint-disable no-lone-blocks */
/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ListaCardMarca from './ListaCardMarca';
import './secaocardmarca.css';
import ListaMarcas from '../../../Dados/Marcas';

function SecaoCardMarca() {
  const [scrollX, setscrollX] = useState(0);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setscrollX(x);
  };

  const handleRighttArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    // multiplica pelo tamanho do card em rem
    const listaW =
      ListaMarcas.length *
      10.3 *
      parseFloat(getComputedStyle(document.documentElement).fontSize);

    if (window.innerWidth - listaW > x) {
      x = window.innerWidth - listaW - 100;
    }
    setscrollX(x);
  };

  {
    /*
  // mostra seta dinamicamente
  const [showArrow, setshowArrow] = useState(true);
useEffect(() => {
    const analiseArrow = () => {
      // tamanho lista
      const listaW =
        ListaMarcas.length *
        10.3 *
        parseFloat(getComputedStyle(document.documentElement).fontSize);
      const tamanhoTela = window.innerWidth;
      setshowArrow(listaW > tamanhoTela);
    };

    window.addEventListener('resize', analiseArrow);

    analiseArrow();

    return () => {
      window.removeEventListener('resize', analiseArrow);
    };
  }, []); */
  }

  return (
    <>
      <div className="marcas">
        <div className="titulo-e-ver-mais">
          <div className="titulo-secao">Navegue pelas marcas</div>
          {/* <a href="navegar_lojas.html" className="ver-mais">
            ver mais
  </a> */}
        </div>
        <div className="secao--left">
          {true && (
            <NavigateBeforeIcon
              onClick={handleLeftArrow}
              style={{ fontSize: 50 }}
            />
          )}
        </div>
        <div className="secao--right">
          {true && (
            <NavigateNextIcon
              onClick={handleRighttArrow}
              style={{ fontSize: 50 }}
            />
          )}
        </div>
        <div className="marcas--listarea" style={{ marginLeft: scrollX }}>
          <ListaCardMarca />
        </div>
      </div>
    </>
  );
}

export default SecaoCardMarca;
