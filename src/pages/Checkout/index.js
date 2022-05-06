import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { mask } from 'remask'
import Swal from 'sweetalert2';

// import { Container } from './styles';

function Checkout() {

  const cart = useSelector(state => state.cart)

  const [creditCard, setCreditCart] = useState('')
  const [dateExpired, setDateExpired] = useState('')
  const [cvv, setCvv] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    Swal.fire({
      title: 'Finalizando compra!',
      html: 'Processando a sua compra ...',
      timer: 5000,
      timerProgressBar: true
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        Swal.fire('Compra realizado com sucesso !')
      }
    })
  }

  return (
    <div className='container'>

      <div className='books-scroll'>
        {cart.items.map(book => <img key={book.id} width="100" src={book.image} alt={book.title} />)}
      </div>

      <span className='checkout-title'>Checkout</span>

      <form className='form-checkout' onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Nome do cartão"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
        <input
          type="text"
          placeholder="Cartão de crédito"
          onChange={(e) => setCreditCart(mask(e.target.value, '9999 9999 9999 9999'))}
          value={creditCard}
          required
        />
        <input
          type="text"
          placeholder="Data de expiração"
          onChange={(e) => setDateExpired(mask(e.target.value, '99/99'))}
          value={dateExpired}
          required
        />

        <input
          type="text"
          placeholder="CVV"
          onChange={(e) => setCvv(mask(e.target.value, '999'))}
          value={cvv}
          required
        />

        <button
          type="submit"
          className='book-button'
          disabled={!name && !creditCard && !dateExpired && !cvv}>
          Comprar
        </button>
      </form>

    </div>
  );
}

export default Checkout;