import React from 'react';
import { Link } from 'react-router-dom';

function SecaoListaShopping() {
  return (
    <div className="secao-lista-shoppings">
      <div className="titulo-secao">Os melhores Shoppings estão aqui</div>
      <div className="lista-cards">
        {/* <div className="card-shopping">
          <img
            src="Imagens/Shoppings/São_José_dos_Campos/CenterVale/Logo 1x1.jpg"
            alt="logo-shopping"
            className="img-lista-shoppings"
          />
          <p>Center Vale Shopping</p>
        </div>

        <div className="card-shopping">
          <img
            src="./Imagens/Shoppings/São_José_dos_Campos/Colinas_Shopping/Logo 1x1.jpg"
            alt="logo-shopping"
            className="img-lista-shoppings"
          />
          <p>Colinas Shopping</p>
        </div> */}

        <Link to="/valesul" style={{ textDecoration: 'none' }}>
          <div id="link-card-shopping">
            <div className="card-shopping">
              <img
                src="./Imagens/Shoppings/São_José_dos_Campos/Vale_Sul/Logo 1x1.jpg"
                alt="logo-shopping"
                className="img-lista-shoppings"
              />
              <p>Vale Sul Shopping</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SecaoListaShopping;
