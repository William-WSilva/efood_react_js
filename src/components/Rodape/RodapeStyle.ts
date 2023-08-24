import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Footer = styled.footer`
  height: 180px;
  background-color: ${variaveis.vermelhoClaro};
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  img {
    margin-right: 8px;
  }
`
