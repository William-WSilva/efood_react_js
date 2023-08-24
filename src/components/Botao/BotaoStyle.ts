import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

type ButtonProps = {
  fontSize?: string
  backgroundColor?: string
  color?: string
}

export const Botao = styled.button<ButtonProps>`
  background-color: ${variaveis.vermelhoEscuro};
  color: ${({ color }) => color || variaveis.vermelhoEscuro};
  height: 30px;
  padding: 0 4px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  font-size: ${({ fontSize }) => fontSize || '12px'};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || variaveis.vermelhoEscuro};
`
