/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Navmaster.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logohorizontel from '../../../Imagens/WebyLogo/Logo Horizontal/PNG/horizontal_logoprincipal_white_RGB.png';
import { logout } from '../../../actions/userActions';

function Navmaster() {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className="nav-bar-inicial">
      <Link to="/">
        <img src={logohorizontel} alt="logo" id="logo-nav" />
      </Link>
      <div className="login">
        <Link id="cadastro" to="/carrinho">
          <i className="fas fa-shopping-bag icone segundo-icone" />
          Sacola
        </Link>
        {userInfo ? (
          <NavDropdown title={userInfo.name} id="username">
            <LinkContainer to="/perfil">
              <NavDropdown.Item>Perfil</NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
          </NavDropdown>
        ) : (
          <Link id="entrar" to="/login">
            <i className="fa fa-user icone" />
            Entrar
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navmaster;
