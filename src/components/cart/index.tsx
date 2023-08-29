import React from 'react'
import { useDispatch, useSelector } from 'react-redux' // Importe o useSelector do Redux
import {
  Overlay,
  CartContainer,
  Sidebar,
  ItemCarrinho,
  TotalCarrinho,
  CloseSidebar,
  ExcluirItemCarrinho
} from './styles'
import excluir from '../../images/excluir.png'
import fechar from '../../images/close.png'
import { RootState } from '../../store' // Importe o RootState para acessar o estado do Redux
import variaveis from '../../styles/variaveis'
import { TextMed, TextPeq } from '../../styles/styles'
import { BtnTema } from '../Botao/Botao'
import { removeItemFromCart } from '../../store/reducers/cartReducers'

type Props = {
  isOpen: boolean
  setIsCartOpen: (isOpen: boolean) => void
}

export const Cart = ({ isOpen, setIsCartOpen }: Props) => {
  const carrinhoItens = useSelector((state: RootState) => state.cart.items)
  const dispatch = useDispatch()

  const valorTotal = carrinhoItens.reduce(
    (total, item) => total + item.preco,
    0
  )

  const excluirItemDoCarrinho = (itemId: number) => {
    dispatch(removeItemFromCart(itemId))
  }

  return (
    <CartContainer isOpen={isOpen}>
      <Overlay />
      <Sidebar>
        <CloseSidebar>
          <img src={fechar} alt="" onClick={() => setIsCartOpen(false)} />
        </CloseSidebar>
        <ul>
          {carrinhoItens.map((item) => (
            <ItemCarrinho key={item.id}>
              <img src={item.foto} alt="" />
              <div>
                <TextMed>{item.nome}</TextMed>
                <TextPeq>R$ {item.preco}</TextPeq>
              </div>
              <ExcluirItemCarrinho
                onClick={() => excluirItemDoCarrinho(item.id)}
              >
                <img src={excluir} alt="" />
              </ExcluirItemCarrinho>
            </ItemCarrinho>
          ))}
        </ul>
        <TotalCarrinho>
          <TextPeq style={{ color: '#fff', fontWeight: 'bold' }}>
            Valor Total
          </TextPeq>
          <TextPeq style={{ color: '#fff', fontWeight: 'bold' }}>
            R$ {valorTotal}
          </TextPeq>
        </TotalCarrinho>
        <BtnTema
          width={'100%'}
          color={variaveis.vermelhoEscuro}
          bkColor={variaveis.branco}
          fontSize="14px"
        >
          Continuar com a entrega
        </BtnTema>
      </Sidebar>
    </CartContainer>
  )
}
