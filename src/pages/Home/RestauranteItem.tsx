import { useNavigate } from 'react-router-dom'
import { TextMed, TextPeq } from '../../styles/styles'
import estrela from '../../images/star.png'
import { BtnTema } from '../../components/Botao/Botao'
import variaveis from '../../styles/variaveis'
import { BkRestaurante, RestauranteCardInfo, TituloNota } from './HomeStyle'

type Props = {
  title: string
  nota: string
  descricao: string
  category: string
  ResImg: string
}

export const RestauranteItem = ({
  title,
  descricao,
  nota,
  category,
  ResImg
}: Props) => {
  const navigate = useNavigate()
  function clicou(title: string, category: string) {
    console.log(`O category é:  ${category}`)
    console.log(`O titulo é:  ${title}`)

    navigate(`/perfil`, { state: { category, title } })
  }

  return (
    <>
      <div>
        <BkRestaurante ResImg={ResImg}>
          <BtnTema color={variaveis.branco}>{category}</BtnTema>
        </BkRestaurante>
        <RestauranteCardInfo>
          <TituloNota>
            <TextMed>{title}</TextMed>
            <div>
              <TextMed>{nota}</TextMed>
              <img src={estrela} alt="" />
            </div>
          </TituloNota>
          <TextPeq>{descricao}</TextPeq>
          <BtnTema
            color={variaveis.branco}
            onClick={() => clicou(title, category)}
          >
            Saiba mais
          </BtnTema>
        </RestauranteCardInfo>
      </div>
    </>
  )
}
