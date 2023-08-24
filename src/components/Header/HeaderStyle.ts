import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import bkHeader from '../../images/Bk_Header.png'

export const HeaderBanner = styled.header`
  height: 180px;
  background-image: url(${bkHeader});
  background-size: cover; // Ou o tamanho que você deseja
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
