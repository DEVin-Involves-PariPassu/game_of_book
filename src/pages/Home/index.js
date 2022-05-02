import axios from 'axios';
import React, { useEffect, useState } from 'react';

// import { Container } from './styles';

function Home() {

  const [books, setBooks] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3333/books')
      .then((response) => setBooks(response.data))
      .catch(() => alert('Desculpe ! Houve um erro ao tentar recuperar os livros.'))
  }, [])

  return (
    <div>

      {books.map(book => (
        <div key={book.id}>
          <img width="150" src={book.image} alt={book.title} />
          <p>{book.title}</p>
          <p>{book.price}</p>
          <button>Detalhes</button>
          <button>Comprar</button>
        </div>
      ))}
    </div>
  );
}

export default Home;