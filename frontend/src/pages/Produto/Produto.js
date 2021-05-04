/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable eqeqeq */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Navvalesul from '../../components/nav-bar/shopping_valesul/Navvalesul';

import listaproduto from '../../Dados/lista_produtos';
import './produto.css';

function Produto({ match, history }) {
  const prod = listaproduto.find((p) => p.sku == match.params.id);

  // Quantidade de itens
  const [qty, setQty] = useState(1);

  const maisItem = () => {
    setQty(qty + 1);
  };

  const menosItem = () => {
    setQty(qty - 1);
  };

  // adicionar ao carrinho
  const addtocarthandler = () => {
    history.push(`/carrinho/${match.params.id}?qty=${qty}`);
  };

  return (
    <div className="produto-container">
      <Link className="btn btn-dark my-3" to={`/centervale/${prod.loja}`}>
        Voltar
      </Link>
      <Row>
        <Col md={5}>
          {prod.loja === 'clothefashion' ? (
            <Image
              src={`../../Imagens/Lojas/São_José_dos_Campos/Vale_Sul/Clothe_Fashion/Produtos/${prod.img}.webp`}
              alt={prod.name}
              fluid
            />
          ) : (
            <Image src={prod.img} alt="produto" fluid />
          )}
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{prod.titulo}</h3>
            </ListGroup.Item>
            <ListGroup.Item>Preço: R${prod.preco}</ListGroup.Item>
            <ListGroup.Item>
              Descrição:{' '}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto deserunt dignissimos sunt, quasi at accusantium hic
                rem placeat, facere tempore dolore nihil quidem ab nulla
                tenetur. Quae blanditiis impedit perspiciatis amet placeat,
                atque !
              </p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Preço: </Col>
                  <Col>R${prod.preco}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Quantidade: </Col>
                  <Col>
                    {' '}
                    <div className="ajuste-qty">
                      <span
                        id="remove-item "
                        className="material-icons"
                        onClick={qty > 1 && menosItem}
                        role="button"
                        tabIndex={0}
                      >
                        remove
                      </span>
                      <input type="text" id="n-items" value={qty} />
                      <span
                        id="add-item"
                        className="material-icons"
                        onClick={maisItem}
                        role="button"
                        tabIndex={0}
                      >
                        add
                      </span>
                    </div>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  onClick={addtocarthandler}
                  style={{ backgroundColor: 'black', borderColor: 'black' }}
                >
                  <span className="material-icons" id="cart-wish">
                    {' '}
                    shopping_cart
                  </span>
                  Adicionar ao carrinho
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Produto;
