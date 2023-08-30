import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

type CartContainer = {
  isOpen: boolean
}

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div<CartContainer>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  justify-content: flex-end;
  z-index: 1;
`
export const Sidebar = styled.aside`
  background-color: ${variaveis.vermelhoEscuro};
  width: 360px;
  padding: 40px 8px;
  z-index: 1;

  ul {
    max-height: 80vh;
    overflow-y: auto;
  }
`
export const CloseSidebar = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;

  img {
    border: 1px solid ${variaveis.branco};
    width: 24px;
  }
`

export const ItemCarrinho = styled.li`
  background-color: ${variaveis.vermelhoClaro};
  display: grid;
  grid-template-columns: 80px 3fr 32px;
  column-gap: 8px;
  padding: 8px;
  margin-bottom: 16px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  h3 {
    margin-bottom: 16px;
  }
`

export const ExcluirItemCarrinho = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  cursor: pointer;
  img {
    width: 24px;
    height: 24px;
    object-fit: cover;
  }
`

export const TotalCarrinho = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
  font-weight: bold;
`
