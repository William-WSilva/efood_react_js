import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const HCardapio = styled.section`
  padding: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${variaveis.bgClaro};

  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    padding: 16px;
  }
`
