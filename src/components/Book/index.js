import React from 'react';
import {useNavigate} from 'react-router-dom'
import { priceFormat } from 'utils/priceFormat';

function Book({ item , addToCart}) {
  const navigate = useNavigate()
  const priceFormatted = priceFormat(item.price)
  return (
    <div key={item.id} className="book-item">
      <img width="150" src={item.image} alt={item.title} />
      <span className='book-item-title'>{item.title}</span>
      <span className='book-item-price '>{priceFormatted}</span>

      <button className='book-button' onClick={() => addToCart(item) }>Comprar</button>
      <button className='book-button' onClick={() => navigate('/detalhes', {state: item} )}>Detalhes</button>
    </div>
  );
}

export default Book;