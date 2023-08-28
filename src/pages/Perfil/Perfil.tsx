import { useLocation } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import { LogoeFood } from '../../components/Logo/Logo'
import { Rodape } from '../../components/Rodape/Rodape'
import { TextMed, TextPeq } from '../../styles/styles'
import variaveis from '../../styles/variaveis'
import { PBanner, PCardapio, PPrato } from './PerfilStyles'
import { BtnNav as Link } from '../../components/BtnNav/BtnNavStyle'
import { BtnTema } from '../../components/Botao/Botao'
import restaurant from '../../images/restaurant.png'
import { useRestaurantes } from '../../RestaurantesAPI/RestaurantesAPI'

export const Perfil = () => {
  const location = useLocation()
  const { state } = location
  const selectedRestaurantId = state?.id || 0
  const restaurantes = useRestaurantes()
  // Encontre o restaurante com base no ID passado
  const restauranteSelecionado = restaurantes.find(
    (restaurante) => restaurante.id === selectedRestaurantId
  )
  // Se o restaurante for encontrado, use o seu cardápio
  const selectedCardapio = restauranteSelecionado?.cardapio || []
  console.log(selectedCardapio)
  return (
    <>
      <Header style={{ display: 'flex', padding: '0 80px' }}>
        <Link to="/">
          <img src={restaurant} alt="" />
        </Link>
        <TextMed style={{ color: variaveis.vermelhoEscuro }}>
          Restaurante
        </TextMed>
        <LogoeFood />
        <TextMed style={{ color: variaveis.vermelhoEscuro }}>
          0 produto(s) no carrinho
        </TextMed>
      </Header>
      <PBanner>
        <div>
          <span>{restauranteSelecionado?.tipo}</span>
          <span>{restauranteSelecionado?.titulo}</span>
        </div>
      </PBanner>
      <PCardapio>
        <section>
          {selectedCardapio.map((prato) => (
            <PPrato key={prato.id}>
              <img src={prato.foto} alt="" />
              <TextMed>{prato.nome}</TextMed>
              <TextPeq>{prato.descricao}</TextPeq>
              <BtnTema
                width={'100%'}
                bkColor={variaveis.branco}
                color={variaveis.vermelhoEscuro}
                fontSize={'14px'}
              >
                Adicionar ao carrinho
              </BtnTema>
            </PPrato>
          ))}
        </section>
      </PCardapio>
      <Rodape />
    </>
  )
}
