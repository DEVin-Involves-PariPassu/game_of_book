import React from 'react';
import { Routes as Switch, Route } from "react-router-dom";

import Home from './pages/Home';
import Cart from './pages/Cart';
import Details from './pages/Details';
import Checkout from 'pages/Checkout';

function Routes() {
  return  (
    <Switch>
      <Route exact path='/' element={<Home />} />
      <Route path='/carrinho' element={<Cart />} />
      <Route path='/detalhes' element={<Details />} />
      <Route path='/checkout' element={<Checkout />} />
    </Switch>
  );
}

export default Routes;