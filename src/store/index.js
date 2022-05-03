
import { legacy_createStore as createStore, combineReducers } from "redux";

import cart from './modules/cart/reducer'


const reducers = combineReducers({
  cart
})

const store = createStore(reducers)


export  default store