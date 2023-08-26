import { Header } from '../../components/Header/Header'
import { Rodape } from '../../components/Rodape/Rodape'
import { HRestaurantes } from './HomeStyle'
import { TextBig, TextMed } from '../../styles/styles'
import { LogoeFood } from '../../components/Logo/Logo'
import { BtnNav as Link } from '../../components/BtnNav/BtnNavStyle'
import { RestauranteItem } from './RestauranteItem'
import Restaurantes from './ListaRestaurantes'
import pratos from '../../images/pratos.png'

export const Home = () => {
  return (
    <>
      <Header style={{ display: 'flex', flexDirection: 'column' }}>
        <LogoeFood />
        <TextBig style={{ textAlign: 'center' }}>
          Viva experiências gastronômicas <br /> no conforto da sua casa
        </TextBig>
        <Link to={'/perfil'}>
          <img src={pratos} alt="Foto Pratos" />
        </Link>
      </Header>
      <HRestaurantes>
        <TextBig>Retaurantes</TextBig>
        <section>
          {Restaurantes.map((restaurante) => (
            <RestauranteItem
              key={restaurante.id}
              title={restaurante.title}
              descricao={restaurante.description}
              nota={restaurante.nota}
              category={restaurante.category}
              ResImg={restaurante.ResImg}
            />
          ))}
        </section>
      </HRestaurantes>
      <Rodape />
    </>
  )
}
