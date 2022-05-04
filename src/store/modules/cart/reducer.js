const INITIAL_STATE = {
  items: []
}

const cart = (state = INITIAL_STATE , action) => {
 
  switch(action.type) {

    // * Adiciona um novo livro ao carrinho
    case 'ADD_BOOK_TO_CART' : {
      
    const {book} = action.payload
    
    const bookExists = state.items.find(item => item.id === book.id)
     
    if(!bookExists) {
      return {
        ...state,
        items: [
          ...state.items,
          {...book, amount: 1}
        ] 
      }
    } else {
      const newItems = state.items.map(item => {
        if(item.id === bookExists.id) {
          return {
            ...item,
            amount: item.amount + 1
          }
        }
        return item
      })

      return {
        ...state,
        items: newItems
      }
    }
    }


    case 'REMOVE_BOOK_TO_CART': {
       const itensFiltered =  state.items.filter(item => item.id !== action.payload.id)
       return {
         ...state,
         items: itensFiltered
       }
    }


    case 'DECREMENT_AMOUNT_BOOK_TO_CART' : {
      const newItems = state.items.map(item => {
        if(item.id === action.payload.id) {
          return {
            ...item,
            amount: item.amount - 1
          }
        }
        return item
      })

      return {
        ...state,
        items: newItems
      }
    }


    case 'INCREMENT_AMOUNT_BOOK_TO_CART' : {
      const newItems = state.items.map(item => {
        if(item.id === action.payload.id) {
          return {
            ...item,
            amount: item.amount + 1
          }
        }
        return item
      })

      return {
        ...state,
        items: newItems
      }
    }

    default: 
        return state
  }
}

export default cart