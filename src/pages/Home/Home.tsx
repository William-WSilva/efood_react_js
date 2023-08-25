import { Header } from '../../components/Header/Header'
import { Rodape } from '../../components/Rodape/Rodape'
import { HCardapio } from './HomeStyle'
import { TextBig } from '../../styles/styles'
import { LogoeFood } from '../../components/Logo/Logo'
import CardapioItem from '../../components/CardapioItem/CardapioItem'
import Restaurantes from './ListaRestaurantes'
import { BtnNav as Link } from '../../components/BtnNav/BtnNavStyle'
import { useState } from 'react'
import variaveis from '../../styles/variaveis'

export const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('')

  const handleBtnClick = (id: number, category: string) => {
    setSelectedCategory(category)
    // Aqui você pode usar o ID para outras funcionalidades, se necessário
  }
  return (
    <>
      <Header style={{ display: 'flex', flexDirection: 'column' }}>
        <LogoeFood />
        <TextBig style={{ textAlign: 'center' }}>
          Viva experiências gastronômicas <br /> no conforto da sua casa
        </TextBig>
        <Link to="/perfil">Acessar</Link>
      </Header>
      <HCardapio>
        <section>
          {Restaurantes.map((item, index) => (
            <CardapioItem
              key={index}
              id={item.id}
              title={item.title}
              category={item.category}
              nota={item.nota}
              imageSrc={item.imageSrc}
              description={item.description}
              bkCardItem={variaveis.branco}
              textColor={variaveis.vermelhoEscuro}
              fullWidth={false}
              isHomePage={true}
              buttonText="Adicionar ao carrinho"
              handleBtnClick={handleBtnClick}
            />
          ))}
        </section>
      </HCardapio>
      <Rodape />
    </>
  )
}
