import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

type CardItemProps = {
  bkCardItem?: string
  image?: string
}

type CardInfoProps = {
  textColor?: string // Adicione a prop textColor
}

export const CardItem = styled.div<CardItemProps>`
  background-color: ${({ bkCardItem }) => bkCardItem || variaveis.branco};
  color: ${({ color }) => color || variaveis.vermelhoEscuro};
`

export const Bk_Prato = styled.div<CardItemProps>`
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
  height: 250px;
  width: 100%;
  text-align: end;
  padding: 16px;
  font-weight: normal;
`
export const CardInfo = styled.div<CardInfoProps>`
  padding: 0 8px;
  padding-bottom: 8px;
  border: 1px solid ${variaveis.vermelhoEscuro};
  border-top: 1px solid transparent;
  color: ${({ textColor }) =>
    textColor || variaveis.vermelhoEscuro}; // Aplique a cor do texto aqui
`

export const CardTitleNota = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;

  div {
    display: flex;
  }

  img {
    margin-left: 8px;
  }
`
