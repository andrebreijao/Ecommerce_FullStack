/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

function FiltroToggle() {
  const [mostrarFiltro1, setmostrarFiltro1] = useState(false);
  const [mostrarFiltro2, setmostrarFiltro2] = useState(false);
  const [mostrarFiltro3, setmostrarFiltro3] = useState(false);

  const handleKeyPress = (event) => {};

  // const hello = () => {
  // console.log('hello');
  // };

  const mostrarfiltro = (e) => {
    const idfiltro = e.target.id;
    if (idfiltro === 'cat_1') {
      setmostrarFiltro1(!mostrarFiltro1);
    } else if (idfiltro === 'cat_2') {
      setmostrarFiltro2(!mostrarFiltro2);
    } else if (idfiltro === 'cat_3') {
      setmostrarFiltro3(!mostrarFiltro3);
    }
  };

  return (
    <div>
      <div className="lista-toggle-filtro">
        <div
          className="filtro-toggle"
          id="cat_1"
          data-aba="cat_1_toogle"
          onClick={mostrarfiltro}
          role="button"
          tabIndex={0}
          onKeyPress={handleKeyPress}
        >
          <div className="filtro-toggle-texto">Categoria</div>
          <div className="filtro-toggle-imagem">
            <img src="./Imagens/seta-baixo.svg" alt="" />
          </div>
        </div>
        <div className="linha-personalizavel-toggle" id="linha-primaria" />

        {mostrarFiltro1 && (
          <div className="filtro-toggle-opcoes" id="cat_1_toogle">
            <input type="checkbox" id="bermudas" name="bermudas" value="Bike" />
            <label htmlFor="bermudas"> Bermudas</label>
            <br />

            <input type="checkbox" id="calca" name="calca" value="Bike" />
            <label htmlFor="calca"> Calças </label>
            <br />

            <input
              type="checkbox"
              id="camisetas"
              name="camisetas"
              value="Bike"
            />
            <label htmlFor="Camisetas"> Camisetas</label>
            <br />

            <input type="checkbox" id="regatas" name="regatas" value="Bike" />
            <label htmlFor="regatas"> Regatas</label>
            <br />
          </div>
        )}

        <div
          className="filtro-toggle"
          id="cat_2"
          data-aba="cat_2_toogle"
          onClick={mostrarfiltro}
          role="button"
          tabIndex={0}
          onKeyPress={handleKeyPress}
        >
          <div className="filtro-toggle-texto">Tamanho</div>
          <div className="filtro-toggle-imagem">
            <img src="./Imagens/seta-baixo.svg" alt="" />
          </div>
        </div>
        <div className="linha-personalizavel-toggle" id="linha-secundaria" />

        {mostrarFiltro2 && (
          <div className="filtro-toggle-opcoes" id="cat_2_toogle">
            <input type="checkbox" id="p" name="p" value="Bike" />
            <label htmlFor="p">P</label>
            <br />

            <input type="checkbox" id="m" name="m" value="Bike" />
            <label htmlFor="m">M</label>
            <br />

            <input type="checkbox" id="g" name="g" value="Bike" />
            <label htmlFor="g"> G</label>
            <br />
          </div>
        )}

        <div
          className="filtro-toggle"
          id="cat_3"
          data-aba="cat_3_toogle"
          onClick={mostrarfiltro}
          role="button"
          tabIndex={0}
          onKeyPress={handleKeyPress}
        >
          <div className="filtro-toggle-texto">Faixa de preço</div>
          <div className="filtro-toggle-imagem">
            <img src="./Imagens/seta-baixo.svg" alt="" />
          </div>
        </div>
        <div className="linha-personalizavel-toggle" id="linha-terciaria" />

        {mostrarFiltro3 && (
          <div className="filtro-toggle-opcoes" id="cat_3_toogle">
            <input type="checkbox" id="faixa-1" name="faixa-1" value="Bike" />
            <label htmlFor="faixa-1">R$0-R$19,99</label>
            <br />

            <input type="checkbox" id="faixa-1" name="faixa-1" value="Bike" />
            <label htmlFor="faixa-1">R$20-R$49,99</label>
            <br />

            <input type="checkbox" id="faixa-1" name="faixa-1" value="Bike" />
            <label htmlFor="faixa-1">R$50-R$99,99</label>
            <br />

            <input type="checkbox" id="faixa-1" name="faixa-1" value="Bike" />
            <label htmlFor="faixa-1">R$100-R$199,99</label>
            <br />

            <input type="checkbox" id="faixa-1" name="faixa-1" value="Bike" />
            <label>R$200-R$299,99</label>
            <br />
          </div>
        )}
      </div>
    </div>
  );
}

export default FiltroToggle;
