/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable object-curly-newline */
/* eslint-disable operator-linebreak */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../../components/Message/Message';
import CheckoutSteps from '../../components/carrinho/CheckoutSteps';
import { createOrder } from '../../actions/orderActions';
/* import { ORDER_CREATE_RESET } from '../constants/orderConstants';
import { USER_DETAILS_RESET } from '../constants/userConstants'; */

const PlaceOrderScreen = ({ history }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  if (!cart.shippingAddress.address) {
    history.push('/shipping');
  } else if (!cart.paymentMethod) {
    history.push('/payment');
  }

  //   Calculate prices
  const addDecimals = (num) => (Math.round(num * 100) / 100).toFixed(2);

  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.preco * item.qty, 0)
  );
  cart.shippingPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)));
  cart.totalPrice = (
    Number(cart.itemsPrice) + Number(cart.shippingPrice)
  ).toFixed(2);

  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, error } = orderCreate;

  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`);
      /* dispatch({ type: USER_DETAILS_RESET });
      dispatch({ type: ORDER_CREATE_RESET }); */
    }
    // eslint-disable-next-line
  }, [history, success]);

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,

        totalPrice: cart.totalPrice,
      })
    );
  };

  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Informações de Entrega</h2>
              <p>
                <strong>Endereço:</strong>
                {cart.shippingAddress.address}, {cart.shippingAddress.city}{' '}
                {cart.shippingAddress.postalCode},{' '}
                {cart.shippingAddress.country}
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Método de Pagamento:</h2>
              <strong>Método: </strong>
              {cart.paymentMethod}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Itens Selecionados</h2>
              {cart.cartItems.length === 0 ? (
                <Message>Your cart is empty</Message>
              ) : (
                <ListGroup variant="flush">
                  {cart.cartItems.map((item) => (
                    <ListGroup.Item key={item.id}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={`../../Imagens/Lojas/São_José_dos_Campos/Vale_Sul/Clothe_Fashion/Produtos/${item.img}.webp`}
                            alt={item.titulo}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.id}`}>{item.titulo}</Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x ${item.preco} = R$
                          {(item.qty * item.preco).toFixed(2)}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Resumo do Pedido</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Itens</Col>
                  <Col>R${cart.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Entrega</Col>
                  <Col>R${cart.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>R${cart.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                {error && <Message variant="danger">{error}</Message>}
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type="button"
                  className="btn-block"
                  disabled={cart.cartItems === 0}
                  onClick={placeOrderHandler}
                >
                  Finalizar compra
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default PlaceOrderScreen;
