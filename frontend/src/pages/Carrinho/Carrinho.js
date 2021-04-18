/* eslint-disable react/jsx-curly-newline */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from 'react-bootstrap';
import Navmaster from '../../components/nav-bar/eshop/Navmaster';
import Message from '../../components/Message/Message';
import { addToCart, removeFromCart } from '../../actions/cartActions';

function Carrinho({ match, location, history }) {
  const productId = match.params.id;
  const qty = location.search ? location.search.split('=')[1] : 1;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const checkoutHandler = () => {
    history.push('/login?redirect=shipping');
  };
  return (
    <>
      <Navmaster />

      <Row>
        <Col md={8}>
          <h1>Carrinho</h1>

          {cartItems.length === 0 ? (
            <Message variant="info">
              <Link to="/valesul/clothefashion" style={{ color: 'black' }}>
                Seu carrinho está vazio, para voltar as compras, clique aqui!
              </Link>
            </Message>
          ) : (
            <ListGroup variant="flush">
              {cartItems.map((item) => (
                <ListGroup.Item key={item.id}>
                  <Row>
                    <Col md={2}>
                      <Image
                        src={`../../Imagens/Lojas/São_José_dos_Campos/Vale_Sul/Clothe_Fashion/Produtos/${item.img}.webp`}
                        fluid
                        rounded
                      />
                    </Col>
                    <Col md={3}>
                      <Link
                        to={`/produto/${item.id}`}
                        style={{ color: 'black' }}
                      >
                        {item.titulo}
                      </Link>
                    </Col>

                    <Col md={2}>R${item.preco}</Col>

                    <Col md={3}>
                      <Form.Control
                        as="select"
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(addToCart(item.id, Number(e.target.value)))
                        }
                      >
                        {[...Array(20).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>

                    <Col md={1}>
                      <Button
                        type="button"
                        variant="light"
                        onClick={() => {
                          removeFromCartHandler(item.id);
                        }}
                      >
                        <i className="fas fa-trash" />
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>

        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>
                  Subtotal (
                  {cartItems.reduce((acc, item) => acc + Number(item.qty), 0)})
                  items
                </h2>
                R$
                {cartItems
                  .reduce(
                    (acc, item) => acc + item.qty * parseFloat(item.preco),
                    0
                  )
                  .toFixed(2)}
              </ListGroup.Item>
            </ListGroup>

            <ListGroup.Item>
              <Button
                type="button"
                className="btn-block"
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
                style={{ backgroundColor: 'black', borderColor: 'black' }}
              >
                Comprar itens
              </Button>
            </ListGroup.Item>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Carrinho;
