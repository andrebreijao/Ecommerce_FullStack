/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import React from 'react';
import './NavValeSul2.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Badge from '@material-ui/core/Badge';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { logout } from '../../../actions/userActions';

function Navvaleusul2() {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  // informações do badge
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getTotalItems = (items) =>
    items.reduce((ack, item) => ack + Number(item.qty), 0);

  return (
    <div className="nav-bar-shopping-loja2" id="nav-vale-sul-loja2">
      <div className="secao-logo-shop2">
        <Link to="/">
          <img
            src="./Imagens/Shoppings/São_José_dos_Campos/Vale_Sul/Logo_shopping_Vale_SUL.jpg"
            alt="logo"
            id="logo-shopping2"
          />
        </Link>
      </div>
      <div className="nav-bar-loja-menu2">
        <Link to="/">
          <li href="index.html">Home</li>
        </Link>
        <Link to="/valesul">
          <li>Shopping</li>
        </Link>
        {/* <Link to="/valesul">
          <li>Navegar Lojas</li>
  </Link> */}
      </div>
      <div className="container-loggedin2">
        <div className="login2">
          <Link id="cadastro" to="/carrinho">
            <Badge
              badgeContent={getTotalItems(cartItems)}
              color="error"
              style={{ color: 'white', position: 'relative', bottom: '5px' }}
            >
              <AddShoppingCartIcon />
            </Badge>
          </Link>
          {userInfo ? (
            <div className="loggedin2">
              <NavDropdown title={userInfo.name.split(' ')[0]} id="username">
                <LinkContainer to="/perfil" style={{ color: '#212529' }}>
                  <NavDropdown.Item>Perfil</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item
                  onClick={logoutHandler}
                  style={{ color: '#212529' }}
                >
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

export default Navvaleusul2;
