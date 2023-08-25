import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import pratoBanner from '../../images/pratoBanner3.jpeg'

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

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    padding: 16px;
  }
`
export const PPrato = styled.div`
  background-color: ${variaveis.vermelhoEscuro};
  padding: 8px;

  h3 {
    color: ${variaveis.branco};
  }

  h6 {
    color: ${variaveis.branco};
    height: 100px;
    padding: 8px 0;
  }

  img {
    height: 250px;
    width: 100%;
  }
`

export const PBanner = styled.section`
  background-image: url(${pratoBanner});
  background-size: cover;
  background-repeat: no-repeat;
  height: 280px;
  color: ${variaveis.branco};

  div {
    padding: 32px 80px;
    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    font-size: 28px;

    :nth-child(2) {
      font-weight: bold;
    }
  }
`
