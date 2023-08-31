import { BtnTema } from '../../../components/Botao/Botao'
import { CartContainer } from '../../../components/CartContainer'
import { TextMed } from '../../../styles/styles'
import variaveis from '../../../styles/variaveis'
import { DivCepNum, Input, Label } from './styles'

type Props = {
  isOpen: boolean
  setIsCartOpen: (isOpen: boolean) => void
  handleCartChange: (CurrentCart: string) => void
}

export const DeliveryDetails = ({
  isOpen,
  setIsCartOpen,
  handleCartChange
}: Props) => {
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
          Entrega
        </TextMed>

        <Label htmlFor="" style={{ display: 'block' }}>
          Quem irá receber
        </Label>
        <Input type="text" />

        <Label htmlFor="" style={{ display: 'block' }}>
          Endereço
        </Label>
        <Input type="text" />

        <Label htmlFor="" style={{ display: 'block' }}>
          Cidade
        </Label>
        <Input type="text" />

        <DivCepNum>
          <div>
            <Label htmlFor="" style={{ display: 'block' }}>
              CEP
            </Label>
            <Input type="text" />
          </div>
          <div>
            <Label htmlFor="" style={{ display: 'block' }}>
              Número
            </Label>
            <Input type="text" />
          </div>
        </DivCepNum>

        <Label htmlFor="" style={{ display: 'block' }}>
          Complemento (opcional)
        </Label>
        <Input type="text" />

        <BtnTema
          margin="16px 0 0 0"
          width={'100%'}
          color={variaveis.vermelhoEscuro}
          bkColor={variaveis.branco}
          fontSize="14px"
          onClick={() => handleCartChange('Payment')}
        >
          Continuar com o pagamento
        </BtnTema>
        <BtnTema
          margin="8px 0 0 0"
          width={'100%'}
          color={variaveis.vermelhoEscuro}
          bkColor={variaveis.branco}
          fontSize="14px"
          onClick={() => handleCartChange('cartItens')}
        >
          Voltar para o carrinho
        </BtnTema>
      </>
    </CartContainer>
  )
}
