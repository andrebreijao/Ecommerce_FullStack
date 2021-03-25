import React from 'react';
import './cardmarca.css';
import PropTypes from 'prop-types';

// eslint-disable-next-line max-len
function CardMarca({ imagem, nome }) {
  return (
    <div>
      <div className="categorias-individual marca">
        <img className="img-card-marca" src={imagem} alt={nome} />
      </div>
    </div>
  );
}

CardMarca.propTypes = {
  imagem: PropTypes.string,
  nome: PropTypes.string,
};

CardMarca.defaultProps = {
  imagem: '',
  nome: '',
};

export default CardMarca;
