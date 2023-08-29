import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import pratoBanner from '../../images/pratoBanner3.jpeg'
import close from '../../images/close.png'

export const Container = styled.section`
  width: 1024px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const PCardapio = styled.section`
  display: flex;
  justify-content: center;
  background-color: ${variaveis.bgClaro};

  section {
    width: 1024px;
    margin-top: 56px;
    margin-bottom: 120px;
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
    height: 120px;
    padding: 8px 0;
    overflow-y: auto;
  }

  img {
    height: 167px;
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
    width: 1024px;
    padding-top: 24px;
    padding-bottom: 32px;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    font-size: 28px;

    :nth-child(2) {
      font-weight: bold;
    }
  }
`

export const BgModal = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
`

export const Modal = styled.div`
  background-color: ${variaveis.vermelhoEscuro};
  padding: 32px;
  display: flex;
  width: 1024px;
  height: 344px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 768px) {
    flex-direction: column;
    width: 340px;
    height: 500px;
  }

  div {
    width: 100%;

    h6 {
      margin: 16px 0;
    }
  }

  a {
    background-image: url(${close});
    background-size: cover;
    background-repeat: no-repeat;
    height: 24px;
    width: 24px;
    border: 1px solid ${variaveis.branco};
    cursor: pointer;
    position: absolute;
    top: 8px;
    right: 8px;
  }

  img {
    height: 280px;
    width: 280px;
    margin-right: 16px;

    @media (max-width: 768px) {
      width: 100%;
      margin-bottom: 16px;
    }
  }

  button {
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`
