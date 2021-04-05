import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Loja from './pages/Lojas/Loja';
import Inicial from './pages/Inicial/Inicial';
import ShoppingValeSul from './pages/Shopping/ShoppingValeSul';
import Produto from './pages/Produto/Produto';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Inicial} exact />
        <Route path="/loja" component={Loja} exact />
        <Route path="/valesul" component={ShoppingValeSul} exact />
        <Route path="/produto/:id" component={Produto} />
      </div>
    </Router>
  );
}

export default App;
