import { Botao } from './BotaoStyle'

type Props = {
  children?: string
  bkColor?: string
  color?: string
  width?: string
  fontSize?: string
  onClick?: () => void
}

export const BtnTema = ({
  children,
  bkColor,
  color,
  width,
  fontSize,
  onClick
}: Props) => {
  function handleClick() {
    if (onClick) {
      onClick()
    }
  }

  return (
    <Botao
      bkColor={bkColor}
      color={color}
      onClick={handleClick}
      width={width}
      fontSize={fontSize}
    >
      {children}
    </Botao>
  )
}
