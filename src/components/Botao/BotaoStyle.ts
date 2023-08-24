import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

type ButtonProps = {
  fontSize?: string
  backgroundColor?: string
  color?: string
  fullWidth?: boolean // Adicione a prop fullWidth
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
  width: ${({ fullWidth }) =>
    fullWidth ? '100%' : 'auto'}; // Aplique a largura conforme a prop fullWidth
`
