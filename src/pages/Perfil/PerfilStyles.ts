import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import pratoBanner from '../../images/pratoBanner.png'

export const PCardapio = styled.section`
  padding: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${variaveis.bgClaro};

  section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;

    CardapioItem {
      background-color: ${variaveis.vermelhoEscuro};
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    padding: 16px;
  }
`

export const PBanner = styled.section`
  height: 280px;
  background-image: url(${pratoBanner});
  background-size: cover;
  background-repeat: no-repeat;
`
