import { configureStore } from '@reduxjs/toolkit'
import api from '../services/api'
import cartReducer from './reducers/cartReducers' // Importe o reducer correto para o carrinho
import restaurantesReducer from './reducers/restaurantesReducers' // Importe o reducer correto para os restaurantes

export const store = configureStore({
  reducer: {
    cart: cartReducer, // Use o reducer correto para o carrinho
    restaurantes: restaurantesReducer, // Use o reducer correto para os restaurantes
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
