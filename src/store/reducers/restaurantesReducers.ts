import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Restaurantes } from '../../RestaurantesAPI/RestaurantesAPI'

type RestaurantesInfos = {
  items: Restaurantes[]
}

const initialState: RestaurantesInfos = {
  items: []
}

const restaurantesSlice = createSlice({
  name: 'restaurantes', // Nome correto do reducer
  initialState,
  reducers: {
    setRestaurantes: (state, action: PayloadAction<Restaurantes[]>) => {
      // Ação setRestaurantes para atualizar os restaurantes
      state.items = action.payload
    }
  }
})

export const { setRestaurantes } = restaurantesSlice.actions // Exporta a ação setRestaurantes
export default restaurantesSlice.reducer // Exporta o reducer
