import { createBrowserRouter, RouterProvider } from 'react-router-dom' // importação das bibliotecas de rotas
import { EstiloGlobal } from './styles/styles'
import { Home } from './pages/Home/Home'
import { Perfil } from './pages/Perfil/Perfil'

const rotas = createBrowserRouter([
  {
    path: '/', // rota padrão
    element: <Home />
  },
  {
    path: '/perfil', // rota Cadastro
    element: <Perfil />
  }
])

function App() {
  return (
    <>
      <EstiloGlobal />
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
