import React, { CSSProperties, FC } from 'react'
import {
  Bk_Prato,
  CardInfo,
  CardItem,
  CardTitleNota
} from './CardapioItemStyle'
import { BtnTema } from '../Botao/Botao'
import { TextMed, TextPeq } from '../../styles/styles'

type CardapioItemProps = {
  bkCardItem?: string
  textColor?: string // Renomeie para textColor
  imageSrc: string
  title: string
  description: string
  buttonText: string
}

const CardapioItem: FC<CardapioItemProps> = ({
  bkCardItem,
  textColor, // Renomeie para textColor
  imageSrc,
  title,
  description,
  buttonText
}) => {
  return (
    <CardItem bkCardItem={bkCardItem}>
      <div>
        <Bk_Prato image={imageSrc}>
          {/* Conteúdo da imagem e botão aqui */}
        </Bk_Prato>
      </div>
      <CardInfo textColor={textColor}>
        {' '}
        {/* Passe a prop textColor para CardInfo */}
        <div>
          <CardTitleNota>
            <TextMed>{title}</TextMed>
            {/* Estrelas e avaliação aqui */}
          </CardTitleNota>
        </div>
        <TextPeq style={{ margin: '16px 0', color: textColor }}>
          {description}
        </TextPeq>
        <BtnTema
          fontSize={'16px'}
          backgroundColor={textColor}
          color={bkCardItem}
        >
          {buttonText}
        </BtnTema>
      </CardInfo>
    </CardItem>
  )
}

export default CardapioItem
