import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import { Container } from './styles';

function BookList() {
  const navigate = useNavigate()
  
  const [books, setBooks] = useState([])

  const handleDeleteBook = (id) => {
    axios
      .delete(`http://localhost:3333/books/${id}`)
      .then(() => {
        alert('Deletado com sucesso')
        setBooks(books.filter(item => item.id !== id))
      })
      .catch(() => alert('Desculpe. Houve um erro ao deletar'))
  }

  useEffect(() => {
    axios.get('http://localhost:3333/books')
      .then((response) => setBooks(response.data))
  }, [])

  return (
    <div className='container'>
      <button onClick={() => navigate('/administrador/livro/cadastro')}>Cadastrar livro</button>
      <table className='table-cart'>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>descrição</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {
            books.map(item => (
              <tr key={item.id}>
                <td><img width="100" src={item.image} alt={item.title} /></td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>
                  <abbr title={item.description}> {item.description.substring(0, 80)}</abbr>
                </td>
                <td>
                  <button className='book-button' onClick={() => navigate(`/administrador/livro/${item.id}`)}>Atualizar</button>
                  <button className='book-button' onClick={() => handleDeleteBook(item.id)}>Deletar</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div >
  )
}

export default BookList;