import { Header } from '../../components/Header/Header'
import { Rodape } from '../../components/Rodape/Rodape'
import { HCardapio } from './HomeStyle'
import { TextBig } from '../../styles/styles'
import { LogoeFood } from '../../components/Logo/Logo'
import variaveis from '../../styles/variaveis'
import CardapioItem from '../../components/CardapioItem/CardapioItem'
import macarrao from '../../images/macarrao.png'
import { BtnTema } from '../../components/Botao/Botao'

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
          <CardapioItem
            bkCardItem={variaveis.branco}
            textColor={variaveis.vermelhoEscuro}
            imageSrc={macarrao}
            title="La Dolce Vita Trattoria"
            description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
            buttonText="Saiba mais"
          />
        </section>
      </HCardapio>
      <Rodape />
    </>
  )
}
