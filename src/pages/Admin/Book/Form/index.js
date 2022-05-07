import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';

// import { Container } from './styles';

function BookForm() {

  const params = useParams()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [url, setUrl] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmitBook = (event) => {
    event.preventDefault()


    if (params.id) {
      axios.put(`http://localhost:3333/books/${params.id}`, {
        title: name,
        price: price,
        image: url,
        description: description
      }).then(() => {
        alert('Atualizado com sucesso')
        navigate('/administrador/livros')
      }
      )
        .catch(() => alert('Houve um erro ao tentar atualizar'))
    } else {
      axios.post('http://localhost:3333/books', {
        title: name,
        price: price,
        image: url,
        description: description
      })
        .then(() => alert('Cadastrado com sucesso')
        )
        .catch(() => alert('Houve um erro ao tentar cadastrar'))
    }

  }


  /*
  
  / GET - /users -> trazer todos os usuários ou parte deles
  / POST - /users  BODY {}
  / GET  - /users/id
  / DELETE - /users/:id
  / PUT  - /users/:id




  */


  useEffect(() => {
    if (params.id) {
      axios.get(`http://localhost:3333/books/${params.id}`)
        .then(response => {
          setName(response.data.title)
          setPrice(response.data.price)
          setUrl(response.data.image)
          setDescription(response.data.description)
        })
    }
  }, [params])

  return (
    <div className='container'>
      <form className='book-form' onSubmit={handleSubmitBook}>

        <label>Nome do livro</label>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label>Preço do livro</label>
        <input
          type="number"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />

        <label>url do livro</label>
        <input value={url} onChange={(event) => setUrl(event.target.value)} type="url" />

        <label>Descrição</label>
        <textarea value={description} onChange={(event) => setDescription(event.target.value)} rows={5} />

        <button type="submit">{params.id ? 'atualizar livro' : 'cadastrar livro'}</button>
      </form>
    </div>
  );
}

export default BookForm;