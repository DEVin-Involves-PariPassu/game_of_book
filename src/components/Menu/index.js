import React from 'react';
import { useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';

// import { Container } from './styles';

function Menu() {
  const navigate = useNavigate();
  
  const cart = useSelector(state => state.cart)

  return <div className='menu-container'>
    <h1>Game of Book</h1>
    <span onClick={() => navigate('carrinho')}>{cart.items.length} livros </span>
  </div>;
}

export default Menu;