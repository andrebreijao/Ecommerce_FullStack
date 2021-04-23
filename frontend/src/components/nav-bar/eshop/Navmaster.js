/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Navmaster.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Badge from '@material-ui/core/Badge';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import logohorizontel from '../../../Imagens/WebyLogo/Logo Horizontal/PNG/horizontal_logoprincipal_white_RGB.png';
import { logout } from '../../../actions/userActions';

function Navmaster() {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getTotalItems = (items) =>
    items.reduce((ack, item) => ack + Number(item.qty), 0);

  return (
    <div id="nav-bar-inicial">
      <Link to="/">
        <img src={logohorizontel} alt="logo" id="logo-nav" />
      </Link>
      <div className="login-nav-master">
        <div>
          {/* <Link id="cadastro" to="/carrinho">
            <i className="fas fa-shopping-bag icone segundo-icone" />
            Sacola
          </Link> */}
          <Link id="cadastro" to="/carrinho">
            <Badge
              badgeContent={getTotalItems(cartItems)}
              color="error"
              style={{ color: 'white', position: 'relative', bottom: '5px' }}
            >
              <AddShoppingCartIcon />
            </Badge>
          </Link>
        </div>
        <div>
          {userInfo ? (
            <div className="loggedin">
              <NavDropdown title={userInfo.name.split(' ')[0]} id="username">
                <LinkContainer to="/perfil">
                  <NavDropdown.Item>Perfil</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          ) : (
            <Link id="entrar" to="/login">
              <i className="fa fa-user icone" />
              Entrar
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navmaster;
