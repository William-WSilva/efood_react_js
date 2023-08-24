import { createGlobalStyle, styled } from 'styled-components'
import variaveis from './variaveis'

export const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    list-style: none;
    font-family: Roboto, sans-serif;
    font-weight: normal;
    box-sizing: border-box;
  }
`
export const TextBig = styled.h2`
  color: ${variaveis.vermelhoEscuro};
  font-size: 28px;
  font-weight: bold;
`
export const TextMed = styled.h3`
  font-size: 18px;
  font-weight: bold;
`
export const TextPeq = styled.h6`
  color: ${variaveis.vermelhoEscuro};
  font-size: 14px;
`
export const TextMin = styled.h6`
  color: ${variaveis.vermelhoEscuro};
  font-size: 12px;
`
