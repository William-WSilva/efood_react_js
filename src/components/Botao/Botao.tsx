import { Botao } from './BotaoStyle'

type Props = {
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
  fullWidth
}: Props) => {
  return (
    <Botao
      fontSize={fontSize}
      backgroundColor={backgroundColor}
      color={color}
      fullWidth={fullWidth}
    >
      {children}
    </Botao>
  )
}
