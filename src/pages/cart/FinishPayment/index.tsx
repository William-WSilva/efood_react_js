import { BtnTema } from '../../../components/Botao/Botao'
import { CartContainer } from '../../../components/CartContainer'
import { TextMed } from '../../../styles/styles'
import variaveis from '../../../styles/variaveis'
import { FrmParagrafo } from './styles'

type Props = {
  isOpen: boolean
  setIsCartOpen: (isOpen: boolean) => void
  onClick?: () => void
}

export const FinishPayment = ({ isOpen, setIsCartOpen, onClick }: Props) => {
  return (
    <CartContainer isOpen={isOpen} setIsCartOpen={setIsCartOpen}>
      <>
        <TextMed
          style={{
            color: variaveis.branco,
            fontWeight: 'bold',
            marginBottom: 16
          }}
        >
          Pedido realizado - {'ORDER_ID'}
        </TextMed>
        <FrmParagrafo style={{ color: variaveis.branco }}>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
        </FrmParagrafo>
        <br />

        <FrmParagrafo style={{ color: variaveis.branco }}>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.{' '}
        </FrmParagrafo>
        <br />

        <FrmParagrafo style={{ color: variaveis.branco }}>
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        </FrmParagrafo>
        <br />

        <FrmParagrafo style={{ color: variaveis.branco }}>
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </FrmParagrafo>

        <BtnTema
          margin="24px 0 0 0"
          width={'100%'}
          color={variaveis.vermelhoEscuro}
          bkColor={variaveis.branco}
          fontSize={'14px'}
          onClick={onClick}
        >
          Concluir
        </BtnTema>
      </>
    </CartContainer>
  )
}
