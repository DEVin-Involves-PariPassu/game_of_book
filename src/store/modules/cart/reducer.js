import { priceFormat } from "utils/priceFormat"

const INITIAL_STATE = {
  items: []
}

const cart = (state = INITIAL_STATE, action) => {

  switch (action.type) {

    // * Adiciona um novo livro ao carrinho
    case 'ADD_BOOK_TO_CART': {

      const { book } = action.payload

      const bookExists = state.items.find(item => item.id === book.id)

      if (!bookExists) {
        return {
          ...state,
          items: [
            ...state.items,
            {
              ...book,
              amount: 1,
              priceFormatted: priceFormat(1 * book.price)
            }
          ]
        }
      } else {
        const newItems = state.items.map(item => {
          if (item.id === bookExists.id) {
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
      const itemsFiltered = state.items.filter(item => item.id !== action.payload.id)
      return {
        ...state,
        items: itemsFiltered
      }
    }

    case 'DECREMENT_AMOUNT_BOOK_TO_CART': {
      const newItems = state.items.map(item => {
        if (item.id === action.payload.id) {
          const amount = item.amount - 1
          return {
            ...item,
            amount,
            priceFormatted: priceFormat(amount * item.price)
          }
        }
        return item
      })

      return {
        ...state,
        items: newItems
      }
    }

    case 'INCREMENT_AMOUNT_BOOK_TO_CART': {
      const newItems = state.items.map(item => {
        if (item.id === action.payload.id) {
          const amount = item.amount + 1
          return {
            ...item,
            amount,
            priceFormatted: priceFormat(amount * item.price)
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