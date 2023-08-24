import CardapioItem from '../../components/CardapioItem/CardapioItem'
import { Header } from '../../components/Header/Header'
import { LogoeFood } from '../../components/Logo/Logo'
import { Rodape } from '../../components/Rodape/Rodape'
import { TextMed } from '../../styles/styles'
import variaveis from '../../styles/variaveis'
import { PBanner, PCardapio } from './PerfilStyles'
import macarrao from '../../images/macarrao.png'

export const Perfil = () => {
  return (
    <>
      <Header style={{ display: 'flex', padding: '0 80px' }}>
        <TextMed style={{ color: variaveis.vermelhoEscuro }}>
          Restaurante
        </TextMed>
        <LogoeFood />
        <TextMed style={{ color: variaveis.vermelhoEscuro }}>
          0 produto(s) no carrinho
        </TextMed>
      </Header>
      <PBanner></PBanner>
      <PCardapio>
        <section>
          <CardapioItem
            bkCardItem={variaveis.vermelhoEscuro}
            textColor={variaveis.branco}
            imageSrc={macarrao}
            title="La Dolce Vita Trattoria"
            description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
            buttonText="Adicionar ao carrinho"
            fullWidth={true}
            isHomePage={false}
          />
        </section>
      </PCardapio>
      <Rodape />
    </>
  )
}
