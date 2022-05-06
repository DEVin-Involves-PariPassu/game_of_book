
import { legacy_createStore as createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import cart from './modules/cart/reducer'

const persistConfig = {
  key: '@game_of_book_19990328',
  storage,
  whitelist: ['cart']
}

const reducers = combineReducers({
  cart
})

const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(persistedReducer)

const persistor = persistStore(store)

export {store, persistor}