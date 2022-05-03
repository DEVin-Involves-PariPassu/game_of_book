import React from 'react';
import { useSelector } from 'react-redux';

function Cart() {

  const cart = useSelector(state => state.cart)

  return (
    <div>{cart.items.map(item => (
      <div>
       <p> {item.title} -  {item.price}</p>
      </div>
    ))}</div>
  );
}

export default Cart;