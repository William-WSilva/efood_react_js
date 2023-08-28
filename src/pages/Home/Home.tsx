import { Header } from '../../components/Header/Header'
import { Rodape } from '../../components/Rodape/Rodape'
import { HRestaurantes } from './HomeStyle'
import { TextBig } from '../../styles/styles'
import { LogoeFood } from '../../components/Logo/Logo'
import { BtnNav as Link } from '../../components/BtnNav/BtnNavStyle'
import { RestauranteItem } from './RestauranteItem'
import pratos from '../../images/pratos.png'
import { useRestaurantes } from '../../RestaurantesAPI/RestaurantesAPI'

export const Home = () => {
  const restaurantes = useRestaurantes()

  return (
    <>
      <Header style={{ display: 'flex', flexDirection: 'column' }}>
        <LogoeFood />
        <TextBig style={{ textAlign: 'center' }}>
          Viva experiências gastronômicas <br /> no conforto da sua casa
        </TextBig>
        {/* <Link to={'/perfil'}>
          <img src={pratos} alt="Foto Pratos" />
        </Link> */}
      </Header>
      <HRestaurantes>
        <TextBig>Retaurantes</TextBig>
        <section>
          {restaurantes.map((restaurante) => (
            <RestauranteItem
              key={restaurante.id}
              id={restaurante.id}
              title={restaurante.titulo}
              descricao={restaurante.descricao}
              avaliacao={restaurante.avaliacao}
              tipo={restaurante.tipo}
              ResImg={restaurante.capa}
              destacado={restaurante.destacado}
            />
          ))}
        </section>
      </HRestaurantes>
      <Rodape />
    </>
  )
}
