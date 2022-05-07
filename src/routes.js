import React from 'react';
import { Routes as Switch, Route } from "react-router-dom";

import Home from './pages/Home';
import Cart from './pages/Cart';
import Details from './pages/Details';
import Checkout from 'pages/Checkout';
import BookForm from 'pages/Admin/Book/Form';
import BookList from 'pages/Admin/Book/List';

function Routes() {
  return  (
    <Switch>
      <Route exact path='/' element={<Home />} />
      <Route path='/carrinho' element={<Cart />} />
      <Route path='/detalhes' element={<Details />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/administrador/livro/cadastro' element={<BookForm />} />
      <Route path='/administrador/livro/:id' element={<BookForm />} />
      <Route path='/administrador/livros' element={<BookList />} />
    </Switch>
  );
}

export default Routes;