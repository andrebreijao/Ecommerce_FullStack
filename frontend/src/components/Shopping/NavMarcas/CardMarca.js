/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import './cardmarca.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// eslint-disable-next-line max-len
function CardMarca({ imagem, nome, video }) {
  return (
    <div className="marcas--container-card">
      <Link
        to={`/centervale/${nome.toLowerCase().replace(' ', '')}`}
        style={{ textDecoration: 'none' }}
      >
        <div>
          <div className="marcas--card">
            <img className="img-card-marca" src={`/${imagem}`} alt={nome} />
          </div>
        </div>
      </Link>
    </div>
  );
}

CardMarca.propTypes = {
  imagem: PropTypes.string,
  nome: PropTypes.string,
  video: PropTypes.string,
};

CardMarca.defaultProps = {
  imagem: '',
  nome: '',
  video: '',
};

export default CardMarca;
