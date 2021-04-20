/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message/Message';
import { getOrderDetails } from '../actions/orderActions';
import Loader from '../components/Loader';

const Teste = ({ match, history }) => {
  const orderId = '607e0c950bbf63150ece581c';

  // const [sdkReady, setSdkReady] = useState(false);

  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(getOrderDetails(orderId));
  }, []);

  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    }
  }, [dispatch, orderId, order]);

  return (
    <div>
      <h1>hello</h1>
      {order && <p>{JSON.stringify(order)}</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Teste;
