import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getFeaturedRestaurantes: builder.query({
      query: () => 'restaurantes'
    })
  })
})
export const { useGetFeaturedRestaurantesQuery } = api
export default api
