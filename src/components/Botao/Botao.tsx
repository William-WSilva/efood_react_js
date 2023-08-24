import React, { CSSProperties } from 'react'
import { Botao } from './BotaoStyle'

type Props = {
  children: string
  fontSize?: string
  backgroundColor?: string
  color?: string
}

export const BtnTema = ({
  children,
  fontSize,
  backgroundColor,
  color
}: Props) => {
  return (
    <Botao fontSize={fontSize} backgroundColor={backgroundColor} color={color}>
      {children}
    </Botao>
  )
}
