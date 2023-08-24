import { TextMed, TextPeq } from '../../styles/styles'
import { Bk_Prato } from './CardapioItemStyle'
import { BtnTema } from '../Botao/Botao'

export const CardapioItem = () => {
  return (
    <>
      <div>
        <div>
          <Bk_Prato>
            <BtnTema fontSize={'12px'}>Italiana</BtnTema>
          </Bk_Prato>
        </div>
        <TextMed>Hioki Sushi</TextMed>
        <TextPeq>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Exercitationem vero assumenda reiciendis, aperiam fuga autem ducimus
          eveniet eos blanditiis officiis odio voluptas dolor similique. Aliquam
          quibusdam ipsum illum debitis accusantium.
        </TextPeq>
        <BtnTema fontSize={'16px'}>Saiba mais</BtnTema>
      </div>
    </>
  )
}
