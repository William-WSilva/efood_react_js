import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode
} from 'react'

export type Restaurantes = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: CardapioItem[]
}
export type CardapioItem = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const RestaurantesContext = createContext<Restaurantes[]>([])

export function useRestaurantes() {
  return useContext(RestaurantesContext)
}

export function RestaurantesProvider({ children }: { children: ReactNode }) {
  const [restaurantes, setRestaurantes] = useState([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
      .catch((error) => {
        console.error('Error fetching restaurantes:', error)
        setRestaurantes([])
      })
  }, [])

  return (
    <RestaurantesContext.Provider value={restaurantes}>
      {children}
    </RestaurantesContext.Provider>
  )
}
