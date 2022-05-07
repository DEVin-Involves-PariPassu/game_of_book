import React from 'react';
import { useLocation } from 'react-router-dom'
import { priceFormat } from 'utils/priceFormat';
import { addBookToCart } from 'store/modules/cart/actions'
import { useDispatch } from 'react-redux';

function Details() {
  const { state } = useLocation()

  const dispatch = useDispatch()

  const priceFormatted = priceFormat(state.price)

  return (
    <div className='container'>
      <div className='book-container'>
        <img src={state.image} alt={state.title} />
        <div className='book-content'>
          <h1>{state.title} - {priceFormatted}</h1>
          <p>{state.description}</p>
          <button
            onClick={() => dispatch(addBookToCart(state))}
            className='book-button'
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;