import { TextMed, TextPeq } from '../../styles/styles'
import variaveis from '../../styles/variaveis'
import { BtnTema } from '../Botao/Botao'
import {
  Overlay,
  CartContainer,
  Sidebar,
  ItemCarrinho,
  ExcluirItemCarrinho,
  TotalCarrinho,
  CloseSidebar
} from './styles'
import foto from '../../images/italiana/Pasta_Carbonara.jpg'
import excluir from '../../images/excluir.png'
import fechar from '../../images/close.png'

type Props = {
  isOpen: boolean
  setIsCartOpen: (isOpen: boolean) => void // Adicione esta prop
}

export const Cart = ({ isOpen, setIsCartOpen }: Props) => (
  <CartContainer isOpen={isOpen}>
    <Overlay />
    <Sidebar>
      <CloseSidebar>
        <img src={fechar} alt="" onClick={() => setIsCartOpen(false)} />
      </CloseSidebar>
      <ul>
        <ItemCarrinho>
          <img src={foto} alt="" />
          <div>
            <TextMed>{'nome Prato'}</TextMed>
            <TextPeq>{'preço prato'}</TextPeq>
          </div>
          <ExcluirItemCarrinho>
            <img src={excluir} alt="" />
          </ExcluirItemCarrinho>
        </ItemCarrinho>
      </ul>
      <TotalCarrinho>
        <TextPeq style={{ color: '#fff', fontWeight: 'bold' }}>
          Valor Total
        </TextPeq>
        <TextPeq style={{ color: '#fff', fontWeight: 'bold' }}>
          {'Soma valores'}
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
