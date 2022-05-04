import React from 'react';
import { useSelector } from 'react-redux';

function Cart() {

  const cart = useSelector(state => state.cart)

  const total = cart.items.reduce((acc, currentValue) => {
    return acc + (currentValue.price * currentValue.amount)
  } , 0)

  return (
    <div className='container'>
     <table className='table-cart'>
       <thead>
         <th>#</th>
         <th>Livro</th>
         <th>Quantidade</th>
         <th>SubTotal</th>
       </thead>
       <tbody>
         {cart.items.map(item => (
           <tr>
             <td>
               <img className="table-image" src={item.image} alt={item.title} />
             </td>
             <td>{item.title}</td>
             <td>{item.amount}</td>
             <td>{item.amount * item.price}</td>
           </tr>
         ))}
       </tbody>
     </table>
     <h1>Total: {total}</h1>
     </div>
     
  );
}

export default Cart;