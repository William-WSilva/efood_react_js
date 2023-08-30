import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Link } from 'react-router-dom'

type BkRestauranteProps = {
  ResImg: string
}

export const HRestaurantes = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${variaveis.bgClaro};

  section {
    margin-top: 80px;
    margin-bottom: 120px;
    width: 1024px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px 80px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    padding: 16px;
  }
`
export const BkRestaurante = styled.div<BkRestauranteProps>`
  background-image: url(${({ ResImg }) => ResImg || 'Foto Restaurante'});
  background-repeat: no-repeat;
  background-size: cover;
  height: 250px;
  width: 100%;
  text-align: end;
  padding: 16px;
`

export const TituloNota = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    justify-content: space-between;

    :nth-child(1) {
      margin-right: 8px;
    }
  }
`

export const RestauranteCardInfo = styled.div`
  border: 1px solid ${variaveis.vermelhoEscuro};
  border-top: 1px solid transparent;
  padding: 8px;

  h6 {
    height: 120px;
    padding: 8px 0;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 4px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${variaveis.vermelhoEscuro};
    }
  }
`
