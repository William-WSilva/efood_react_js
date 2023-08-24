import { Header } from '../../components/Header/Header'
import { Rodape } from '../../components/Rodape/Rodape'
import { HCardapio } from './HomeStyle'
import { TextBig } from '../../styles/styles'
import { LogoeFood } from '../../components/Logo/Logo'
import variaveis from '../../styles/variaveis'
import CardapioItem from '../../components/CardapioItem/CardapioItem'
import macarrao from '../../images/macarrao.png'
import CardapioItensData from './CardapioItensData'

export const Home = () => {
  return (
    <>
      <Header style={{ display: 'flex', flexDirection: 'column' }}>
        <LogoeFood />
        <TextBig style={{ textAlign: 'center' }}>
          Viva experiências gastronômicas <br /> no conforto da sua casa
        </TextBig>
      </Header>
      <HCardapio>
        <section>
          {CardapioItensData.map((item, index) => (
            <CardapioItem key={index} {...item} />
          ))}
        </section>
      </HCardapio>
      <Rodape />
    </>
  )
}
