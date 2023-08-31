import { BtnTema } from '../../../components/Botao/Botao'
import { CartContainer } from '../../../components/CartContainer'
import { TextMed } from '../../../styles/styles'
import variaveis from '../../../styles/variaveis'
import { InputGroup } from '../styles'
import { DivCepNum, Input, Label } from './styles'
import * as Yup from 'yup'
import { useFormik } from 'formik'

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
  const form = useFormik({
    initialValues: {
      fullName: '',
      endereco: '',
      cidade: '',
      CEP: '',
      numero: 0,
      complemento: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(3, 'O nome precisa ter pelo menos 3 caracteres')
        .required('Campo obrigatório'),
      endereco: Yup.string().required('Campo obrigatório'),
      cidade: Yup.string().required('Campo obrigatório'),
      CEP: Yup.string()
        .min(9, 'O CEP precisa ter pelo menos 9 caracteres')
        .max(9, 'O CEP precisa ter máximo 9 caracteres')
        .required('Campo obrigatório'),
      numero: Yup.number()
        .min(1, 'Numero inválido')
        .required('Campo obrigatório')
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) {
      return message
    } else {
      return ''
    }
  }

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

        <form onSubmit={form.handleSubmit}>
          <InputGroup>
            <Label htmlFor="fullName" style={{ display: 'block' }}>
              Quem irá receber
            </Label>
            <Input
              name="fullName"
              value={form.values.fullName}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              id="fullName"
              type="text"
            />
            <small>{getErrorMessage('fullName', form.errors.fullName)}</small>
          </InputGroup>

          <InputGroup>
            <Label htmlFor="endereco" style={{ display: 'block' }}>
              Endereço
            </Label>
            <Input
              name="endereco"
              value={form.values.endereco}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              id="endereco"
              type="text"
            />
            <small>{getErrorMessage('endereco', form.errors.endereco)}</small>
          </InputGroup>

          <InputGroup>
            <Label htmlFor="cidade" style={{ display: 'block' }}>
              Cidade
            </Label>
            <Input
              name="cidade"
              value={form.values.cidade}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              id="cidade"
              type="text"
            />
            <small>{getErrorMessage('cidade', form.errors.cidade)}</small>
          </InputGroup>

          <DivCepNum>
            <div>
              <Label htmlFor="CEP" style={{ display: 'block' }}>
                CEP
              </Label>
              <Input
                name="CEP"
                value={form.values.CEP}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                id="CEP"
                type="text"
              />
              <small>{getErrorMessage('CEP', form.errors.CEP)}</small>
            </div>

            <div>
              <Label htmlFor="numero" style={{ display: 'block' }}>
                Número
              </Label>
              <Input
                name="numero"
                value={form.values.numero}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                id="numero"
                type="number"
              />
              <small>{getErrorMessage('numero', form.errors.numero)}</small>
            </div>
          </DivCepNum>

          <InputGroup>
            <Label htmlFor="complemento" style={{ display: 'block' }}>
              Complemento (opcional)
            </Label>
            <Input
              name="complemento"
              value={form.values.complemento}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              id="complemento"
              type="text"
            />
          </InputGroup>
        </form>

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
