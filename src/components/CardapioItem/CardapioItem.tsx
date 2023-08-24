import React, { FC } from 'react'
import {
  Bk_Prato,
  CardInfo,
  CardItem,
  CardTitleNota
} from './CardapioItemStyle'
import { BtnTema } from '../Botao/Botao'
import { TextMed, TextPeq } from '../../styles/styles'
import star from '../../images/star.png'

type CardapioItemProps = {
  bkCardItem?: string
  textColor?: string
  imageSrc: string
  title: string
  description: string
  buttonText: string
  fullWidth?: boolean
  isHomePage?: boolean // Adicione esta prop para indicar se é a página Home
  category?: string // Adicione a propriedade 'category'
}

const CardapioItem: FC<CardapioItemProps> = ({
  bkCardItem,
  textColor,
  imageSrc,
  title,
  description,
  buttonText,
  fullWidth,
  isHomePage,
  category
}) => {
  return (
    <CardItem bkCardItem={bkCardItem}>
      <div>
        <Bk_Prato image={imageSrc}>
          {isHomePage && ( // Renderiza o BtnTema apenas na página Home
            <BtnTema fontSize={'12px'} color={bkCardItem}>
              {category}
            </BtnTema>
          )}
        </Bk_Prato>
      </div>
      <CardInfo textColor={textColor}>
        <div>
          <CardTitleNota>
            <TextMed>{title}</TextMed>
            {isHomePage && ( // Renderiza o conteúdo das estrelas apenas na página Home
              <div>
                <TextMed>4.9</TextMed>
                <img src={star} alt="foto Estrela" />
              </div>
            )}
          </CardTitleNota>
        </div>
        <TextPeq style={{ margin: '16px 0', color: textColor }}>
          {description}
        </TextPeq>
        <BtnTema
          fontSize={'16px'}
          backgroundColor={textColor}
          color={bkCardItem}
          fullWidth={fullWidth}
        >
          {buttonText}
        </BtnTema>
      </CardInfo>
    </CardItem>
  )
}

export default CardapioItem
