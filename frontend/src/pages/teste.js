/* eslint-disable import/no-duplicates */
/* eslint-disable import/named */
/* eslint-disable no-lone-blocks */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import react, { useEffect } from 'react';
import { link } from 'react-router-dom';
import { button, row, col, listgroup, image, card } from 'react-bootstrap';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getorderdetails, listMyOrders } from '../actions/orderActions';
import Loader from '../components/Loader';

const Teste = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listMyOrders());
  }, []);

  const { loading, orders } = useSelector((state) => state.orderListMy);

  const hello = 'Hello';

  return <div>{loading ? <Loader /> : JSON.stringify(orders)}</div>;
};

export default Teste;

{
  /* import react, { useeffect } from 'react';
import { link } from 'react-router-dom';
import { button, row, col, listgroup, image, card } from 'react-bootstrap';
import { usedispatch, useselector } from 'react-redux';
import message from '../components/message/message';
import { getorderdetails } from '../actions/orderActions';
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

export default Teste; */
}
