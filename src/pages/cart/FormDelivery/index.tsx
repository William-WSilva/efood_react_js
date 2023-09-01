import { BtnTema } from '../../../components/Botao/Botao'
import { CartContainer } from '../../../components/CartContainer'
import { TextMed } from '../../../styles/styles'
import variaveis from '../../../styles/variaveis'
import { InputGroup } from '../styles'
import {
  DivCepNum,
  DivMesAno,
  DivNCVV,
  FrmParagrafo,
  Input,
  Label
} from './styles'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { formataPreco } from '../../../utils'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { usePurchaseMutation } from '../../../services/api'

type Props = {
  isOpen: boolean
  setIsCartOpen: (isOpen: boolean) => void
  handleCartChange: (CurrentCart: string) => void
}

export const FormDelivery = ({
  isOpen,
  setIsCartOpen,
  handleCartChange
}: Props) => {
  const carrinhoItens = useSelector((state: RootState) => state.cart.items)
  const [formDetails, setFormDetails] = useState(true)
  const [formPaymment, setFormPaymment] = useState(false)
  const [purchase, { isLoading, isError, data, isSuccess }] =
    usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      fullName: '',
      endereco: '',
      cidade: '',
      CEP: '',
      numero: 0,
      complemento: '',
      nomeCartao: '',
      numCartao: '',
      CVV: 0,
      mesVencimento: 0,
      anoVencimento: 0
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(3, 'O nome precisa ter pelo menos 3 caracteres')
        .required('Campo obrigatório'),
      endereco: Yup.string().required('Campo obrigatório'),
      cidade: Yup.string().required('Campo obrigatório'),
      CEP: Yup.string()
        .min(9, '* 9 caracteres')
        .max(9, '* 9 caracteres')
        .required('Campo obrigatório'),
      numero: Yup.number()
        .min(1, 'Numero inválido')
        .required('Campo obrigatório'),
      nomeCartao: Yup.string()
        .min(3, 'O nome precisa ter mínimo 3 caracteres')
        .required('Campo obrigatório'),
      numCartao: Yup.string().required('Campo obrigatório'),
      CVV: Yup.number().required('* obrigatório'),
      mesVencimento: Yup.string().required('Campo obrigatório'),
      anoVencimento: Yup.string().required('Campo obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        products: [
          {
            id: 1,
            price: 0
          }
        ],
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.endereco,
            city: values.cidade,
            zipCode: values.CEP,
            number: values.numero,
            complement: values.complemento
          }
        },
        payment: {
          card: {
            name: values.nomeCartao,
            number: values.numCartao,
            code: values.CVV,
            expires: {
              month: values.mesVencimento,
              year: values.anoVencimento
            }
          }
        }
      })
    }
  })

  useEffect(() => {
    if (isSuccess) {
      setFormPaymment(false)
    }
  }, [isSuccess])

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) {
      return message
    } else {
      return ''
    }
  }

  const valorTotal = carrinhoItens.reduce(
    (total, item) => total + item.preco,
    0
  )

  return (
    <CartContainer isOpen={isOpen} setIsCartOpen={setIsCartOpen}>
      <>
        <form onSubmit={form.handleSubmit}>
          {formDetails && (
            <>
              <TextMed
                style={{
                  color: variaveis.brancoTema,
                  fontWeight: 'bold',
                  marginBottom: 16,
                  fontSize: 16
                }}
              >
                Entrega
              </TextMed>

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
                <small>
                  {getErrorMessage('fullName', form.errors.fullName)}
                </small>
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
                <small>
                  {getErrorMessage('endereco', form.errors.endereco)}
                </small>
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

              <BtnTema
                margin="16px 0 0 0"
                width={'100%'}
                color={variaveis.vermelhoEscuro}
                bkColor={variaveis.branco}
                fontSize="14px"
                onClick={() => {
                  setFormPaymment(true), setFormDetails(false)
                }}
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
          )}
          {formPaymment && (
            <>
              <TextMed
                style={{
                  color: variaveis.brancoTema,
                  fontWeight: 'bold',
                  marginBottom: 16,
                  fontSize: 16
                }}
              >
                Pagamento - Valor a pagar {formataPreco(valorTotal)}
              </TextMed>

              <InputGroup>
                <Label htmlFor="nomeCartao" style={{ display: 'block' }}>
                  Nome no cartão
                </Label>
                <Input
                  name="nomeCartao"
                  value={form.values.nomeCartao}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  id="nomeCartao"
                  type="text"
                />
                <small>
                  {getErrorMessage('nomeCartao', form.errors.nomeCartao)}
                </small>
              </InputGroup>
              <DivNCVV>
                <div>
                  <Label htmlFor="numCartao" style={{ display: 'block' }}>
                    Número do cartão
                  </Label>
                  <Input
                    name="numCartao"
                    value={form.values.numCartao}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    id="numCartao"
                    type="string"
                  />
                  <small>
                    {getErrorMessage('numCartao', form.errors.numCartao)}
                  </small>
                </div>
                <div>
                  <Label htmlFor="CVV" style={{ display: 'block' }}>
                    CVV
                  </Label>
                  <Input
                    name="CVV"
                    value={form.values.CVV}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    id="CVV"
                    type="number"
                  />
                  <small>{getErrorMessage('CVV', form.errors.CVV)}</small>
                </div>
              </DivNCVV>
              <DivMesAno>
                <div>
                  <Label htmlFor="mesVencimento" style={{ display: 'block' }}>
                    Mês de vencimento
                  </Label>
                  <Input
                    name="mesVencimento"
                    value={form.values.mesVencimento}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    id="mesVencimento"
                    type="number"
                  />
                  <small>
                    {getErrorMessage(
                      'mesVencimento',
                      form.errors.mesVencimento
                    )}
                  </small>
                </div>
                <div>
                  <Label htmlFor="anoVencimento" style={{ display: 'block' }}>
                    Ano de vencimemento
                  </Label>
                  <Input
                    name="anoVencimento"
                    value={form.values.anoVencimento}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    id="anoVencimento"
                    type="number"
                  />
                  <small>
                    {getErrorMessage(
                      'anoVencimento',
                      form.errors.anoVencimento
                    )}
                  </small>
                </div>
              </DivMesAno>

              <BtnTema
                margin="16px 0 0 0"
                width={'100%'}
                color={variaveis.vermelhoEscuro}
                bkColor={variaveis.branco}
                fontSize="14px"
                type="submit"
              >
                Finalizar pagamento
              </BtnTema>

              <BtnTema
                margin="8px 0 0 0"
                width={'100%'}
                color={variaveis.vermelhoEscuro}
                bkColor={variaveis.branco}
                fontSize="14px"
                onClick={() => {
                  setFormPaymment(false), setFormDetails(true)
                }}
              >
                Voltar para a edição de endereço
              </BtnTema>
            </>
          )}
        </form>
        {isSuccess && (
          <>
            <TextMed
              style={{
                color: variaveis.brancoTema,
                fontWeight: 'bold',
                marginBottom: 16,
                fontSize: 16
              }}
            >
              Pedido realizado - {data.orderId}
            </TextMed>
            <FrmParagrafo>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </FrmParagrafo>
            <br />

            <FrmParagrafo>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.{' '}
            </FrmParagrafo>
            <br />

            <FrmParagrafo>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </FrmParagrafo>
            <br />

            <FrmParagrafo>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </FrmParagrafo>

            <BtnTema
              margin="24px 0 0 0"
              width={'100%'}
              color={variaveis.vermelhoEscuro}
              bkColor={variaveis.branco}
              fontSize={'14px'}
              onClick={() => setIsCartOpen(false)}
            >
              Concluir
            </BtnTema>
          </>
        )}
      </>
    </CartContainer>
  )
}
