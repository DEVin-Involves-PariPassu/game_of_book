export const addBookToCart = (book) => {
  return {
    type: 'ADD_BOOK_TO_CART',
    payload: {
      book
    }
  }
}

export const removeBookToCart = (id) => {
  return {
    type: 'REMOVE_BOOK_TO_CART',
    payload: {
      id
    }
  }
}

export const decrementAmountBookToCart = (id) => {
  return {
    type: 'DECREMENT_AMOUNT_BOOK_TO_CART',
    payload: {
      id
    }
  }
}

export const incrementAmountBookToCart = (id) => {
  return {
    type: 'INCREMENT_AMOUNT_BOOK_TO_CART',
    payload: {
      id
    }
  }
}