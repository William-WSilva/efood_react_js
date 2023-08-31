import { BtnTema } from '../../../components/Botao/Botao'
import { CartContainer } from '../../../components/CartContainer'
import { TextMed } from '../../../styles/styles'
import variaveis from '../../../styles/variaveis'
import { DivMesAno, DivNCVV, Input, Label } from './styles'

type Props = {
  isOpen: boolean
  setIsCartOpen: (isOpen: boolean) => void
  handleCartChange: (CurrentCart: string) => void
}

export const Payment = ({ isOpen, setIsCartOpen, handleCartChange }: Props) => {
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
          Pagamento - Valor a pagar {'R$ 190,90'}
        </TextMed>

        <Label htmlFor="" style={{ display: 'block' }}>
          Nome no cartão
        </Label>
        <Input type="text" />
        <DivNCVV>
          <div>
            <Label htmlFor="" style={{ display: 'block' }}>
              Número do cartão
            </Label>
            <Input type="text" />
          </div>
          <div>
            <Label htmlFor="" style={{ display: 'block' }}>
              CVV
            </Label>
            <Input type="text" />
          </div>
        </DivNCVV>

        <DivMesAno>
          <div>
            <Label htmlFor="" style={{ display: 'block' }}>
              Mês de vencimento
            </Label>
            <Input type="text" />
          </div>
          <div>
            <Label htmlFor="" style={{ display: 'block' }}>
              Ano de vencimemento
            </Label>
            <Input type="text" />
          </div>
        </DivMesAno>

        <BtnTema
          margin="16px 0 0 0"
          width={'100%'}
          color={variaveis.vermelhoEscuro}
          bkColor={variaveis.branco}
          fontSize="14px"
          onClick={() => handleCartChange('FinishPayment')}
        >
          Finalizar pagamento
        </BtnTema>
        <BtnTema
          margin="8px 0 0 0"
          width={'100%'}
          color={variaveis.vermelhoEscuro}
          bkColor={variaveis.branco}
          fontSize="14px"
          onClick={() => handleCartChange('DeliveryDetails')}
        >
          Voltar para a edição de endereço
        </BtnTema>
      </>
    </CartContainer>
  )
}
