import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inicial from './pages/Inicial/Inicial';
import Loja from './pages/Lojas/Loja';
import ShoppingValeSul from './pages/Shopping/ShoppingValeSul';
import Produto from './pages/Produto/Produto';
import Carrinho from './pages/Carrinho/Carrinho';
import ScrollToTop from './components/App/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Route path="/" component={Inicial} exact />
        <Route path="/loja" component={Loja} exact />
        <Route path="/valesul" component={ShoppingValeSul} exact />
        <Route path="/produto/:id" component={Produto} />
        <Route path="/carrinho/:id?" component={Carrinho} />
      </div>
    </Router>
  );
}

export default App;
