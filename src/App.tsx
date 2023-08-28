import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { EstiloGlobal } from './styles/styles'
import { Home } from './pages/Home/Home'
import { Perfil } from './pages/Perfil/Perfil'
import { RestaurantesProvider } from './RestaurantesAPI/RestaurantesAPI' // Importar o Provider

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/perfil',
    element: <Perfil />
  }
])

function App() {
  return (
    <>
      <EstiloGlobal />
      <RestaurantesProvider>
        {' '}
        {/* Adicionar o Provider aqui */}
        <RouterProvider router={rotas} />
      </RestaurantesProvider>
    </>
  )
}

export default App
