/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../../components/Message/Message';
import Loader from '../../components/Loader';
import FormContainer from '../../components/FormContainer';
import { register } from '../../actions/userActions';

const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  // location.search manda a parte do url depois de "?"
  const redirect = location.search && location.search.split('=')[1];

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage('A senha e confirmação de senha são diferentes');
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <FormContainer>
      <h1>Cadastro</h1>
      {message && <Message variant="danger">{message}</Message>}
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="nome">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="nome"
            placeholder="Insira seu nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="email">
            <Form.Label>Endereço de e-mail</Form.Label>
            <Form.Control
              type="email"
              placeholder="Insira o e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Insira a senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirmação de senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Insira a senha novamente"
              value={confirmPassword}
              onChange={(e) => setconfirmPassword(e.target.value)}
            />
          </Form.Group>
        </Form>

        <Button type="submit" variant="primary">
          Cadastrar
        </Button>

        <Row className="py-3">
          <Col>
            Já possui conta conta?{' '}
            <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
              Login
            </Link>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  );
};

export default RegisterScreen;
