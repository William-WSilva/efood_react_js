import React from 'react'
import { Botao } from './BotaoStyle'

type Props = {
  children: string
  fontSize?: string
  backgroundColor?: string
}

export const BtnTema = ({ children, fontSize, backgroundColor }: Props) => {
  return (
    <Botao fontSize={fontSize} backgroundColor={backgroundColor}>
      {children}
    </Botao>
  )
}
