import { useLocation } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import { LogoeFood } from '../../components/Logo/Logo'
import { Rodape } from '../../components/Rodape/Rodape'
import { TextMed, TextPeq } from '../../styles/styles'
import variaveis from '../../styles/variaveis'
import { PBanner, PCardapio, PPrato } from './PerfilStyles'
import { BtnNav as Link } from '../../components/BtnNav/BtnNavStyle'
import { BtnTema } from '../../components/Botao/Botao'
import { CardapioAlema } from './Cardapios/alema'
import { CardapioBrasileira } from './Cardapios/brasileira'
import { CardapioFrancesa } from './Cardapios/francesa'
import { CardapioItaliana } from './Cardapios/italiana'
import { CardapioJaponesa } from './Cardapios/japonesa'
import { CardapioPortuguesa } from './Cardapios/portuguesa'
import restaurant from '../../images/restaurant.png'
import Restaurantes from '../Home/ListaRestaurantes'

export const Perfil = () => {
  const location = useLocation()
  const { category, title } = location.state || {
    category: Restaurantes[0].category,
    title: Restaurantes[0].title
  }
  let selectedCardapio: any[] = []

  switch (category) {
    case 'Alemã':
      selectedCardapio = CardapioAlema
      break
    case 'Brasileira':
      selectedCardapio = CardapioBrasileira
      break
    case 'Francesa':
      selectedCardapio = CardapioFrancesa
      break
    case 'Italiana':
      selectedCardapio = CardapioItaliana
      break
    case 'Japonesa':
      selectedCardapio = CardapioJaponesa
      break
    case 'Portuguesa':
      selectedCardapio = CardapioPortuguesa
      break
    default:
      selectedCardapio = []
  }

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
          <span>{category}</span>
          <span>{title}</span>
        </div>
      </PBanner>
      <PCardapio>
        <section>
          {selectedCardapio.map((item) => (
            <PPrato key={item.id}>
              <img src={item.imageSrc} alt="" />
              <TextMed>{item.title}</TextMed>
              <TextPeq>{item.description}</TextPeq>
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
