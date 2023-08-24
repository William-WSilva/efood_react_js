import { Header } from '../../components/Header/Header'
import { CardapioItem } from '../../components/CardapioItem/CardapioItem'
import { Rodape } from '../../components/Rodape/Rodape'
import { HCardapio } from './HomeStyle'

export const Home = () => {
  return (
    <>
      <Header />
      <HCardapio>
        <section>
          <CardapioItem />
          <CardapioItem />
          <CardapioItem />
          <CardapioItem />
          <CardapioItem />
          <CardapioItem />
        </section>
      </HCardapio>
      <Rodape />
    </>
  )
}
