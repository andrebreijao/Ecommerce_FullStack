import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inicial from './pages/Inicial/Inicial';
import Loja from './pages/Lojas/Loja';
import ShoppingValeSul from './pages/Shopping/ShoppingValeSul';
import Produto from './pages/Produto/Produto';
import ScrollToTop from './components/App/ScrollToTop';
import LoginScreen from './pages/Usuario/loginScreen';
import RegisterScreen from './pages/Usuario/registerScreen';
import ProfileScreen from './pages/Usuario/profileScreen';
import ShippingScreen from './pages/Carrinho/ShippingScreen';
import PaymentScreen from './pages/Carrinho/PaymentScreen';
import PlaceOrderScreen from './pages/Carrinho/placeOrderScreen';
import OrderScreen from './pages/Carrinho/OrderScreen';
import Teste from './Teste/Teste';
import Teste2 from './Teste/Teste2';
import CarrinhoScreen from './pages/Carrinho/CarrinhoUsuario/CarrinhoScreen';
import casaDasCuecas from './pages/Lojas/casaDasCuecas';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Route path="/" component={Inicial} exact />
        <Route path="/centervale" component={ShoppingValeSul} exact />
        <Route path="/centervale/:loja" component={Loja} exact />

        <Route
          path="/centervale/casadascuecas222"
          component={casaDasCuecas}
          exact
        />
        <Route path="/produto/:id" component={Produto} />
        <Route path="/carrinho/:id?" component={CarrinhoScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/cadastro" component={RegisterScreen} />
        <Route path="/perfil" component={ProfileScreen} />
        <Route path="/shipping" component={ShippingScreen} />
        <Route path="/payment" component={PaymentScreen} />
        <Route path="/placeorder" component={PlaceOrderScreen} />
        <Route path="/order/:id" component={OrderScreen} />
        <Route path="/teste" component={Teste} />
        <Route path="/teste2" component={Teste2} />
      </div>
    </Router>
  );
}

export default App;
