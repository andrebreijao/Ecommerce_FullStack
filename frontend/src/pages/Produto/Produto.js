/* eslint-disable eqeqeq */
/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, Listgroup, Button, Card } from 'react-bootstrap';
import listaproduto from '../../Dados/lista_produtos';
import 'bootstrap/dist/css/bootstrap.min.css';

function Produto({ match }) {
  const prod = listaproduto.find((p) => p.id == match.params.id);
  return (
    <div>
      <Link to="/loja" className="btn btn-light my-3">
        Voltar a loja
      </Link>
      <Col md={6}>
        <Image
          src={`Imagens/Lojas/São_José_dos_Campos/Vale_Sul/Clothe_Fashion/Produtos/${prod.img}.webp`}
          alt={prod.titulo}
          fluid
        />
      </Col>
    </div>
  );
}

export default Produto;
