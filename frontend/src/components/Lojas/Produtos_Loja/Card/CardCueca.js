/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React from 'react';
import './CardCueca.css';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(0),
  },
  cardProdutoGrid: {
    flexGrow: 1,
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(0),
  },
}));

function Card({ titulo, imagem, preco, parcelado, id }) {
  const classes = useStyles();

  return (
    <Link to={`/produto/${id}`} style={{ textDecoration: 'none' }}>
      <div className="card-produto-gridCueca">
        {/* <div className="botoes-card-grid">
          <i className="fas fa-heart icone-card" />
          <i className="fas fa-shopping-bag icone segundo-icone-card" />
  </div> */}
        <img className="produto-grid-imgCueca" src={imagem} alt="produto" />
        <div className="card-grid-nome-produtoCueca">{titulo}</div>
        <div className="card-grid-precosCueca">
          <div className="card-grid-preco-antigoCueca">
            R$
            {preco.tofixed(2)}
          </div>
          <div className="card-grid-preco-atualCueca">
            R$
            {preco.tofixed(2)}
          </div>
          <div className="card-grid-preco-parcelaCueca">{parcelado}</div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
