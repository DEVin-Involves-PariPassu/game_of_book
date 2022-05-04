import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Book from 'components/Book';
import {addBookToCart} from 'store/modules/cart/actions'

// import { Container } from './styles';

function Home() {

  const [books, setBooks] = useState([])
  
  const dispatch = useDispatch()
 
  useEffect(() => {
    async function handleGetBooks() {

      axios
        .get('http://localhost:3333/books')
        .then((response) => setBooks(response.data))
        .catch(() => alert('Desculpe ! Houve um erro ao tentar recuperar os livros.'))
    }

    handleGetBooks()
  }, [])


  const handleAddToCart = (book) => {
    dispatch(addBookToCart(book))
  }

  return (
    <div className='container'>

      <div className='container-books'>
        {books.map(book => <Book key={book.id} item={book} addToCart={handleAddToCart} />)}
      </div>
    </div>
  );
}

export default Home;