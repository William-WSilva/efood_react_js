import { ButtonHTMLAttributes } from 'react'
import { Botao } from './BotaoStyle'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: string
  fontSize?: string
  backgroundColor?: string
  color?: string
  fullWidth?: boolean
}

export const BtnTema = ({
  children,
  fontSize,
  backgroundColor,
  color,
  fullWidth,
  ...props
}: Props) => {
  return (
    <Botao
      {...props}
      fontSize={fontSize}
      backgroundColor={backgroundColor}
      color={color}
      fullWidth={fullWidth}
    >
      {children}
    </Botao>
  )
}
