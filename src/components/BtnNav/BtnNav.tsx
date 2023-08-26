import { Link as RouterLink } from 'react-router-dom' // Importar o Link correto do react-router-dom

type Props = {
  children: string // Corrigindo o nome da prop para 'children' (em minúsculas)
}

export const BtnNav = ({ children }: Props) => (
  <RouterLink to={''}>{children}</RouterLink>
)
