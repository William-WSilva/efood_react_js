import { Link, useLocation } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import { LogoeFood } from '../../components/Logo/Logo'
import { Rodape } from '../../components/Rodape/Rodape'
import { TextMed, TextPeq } from '../../styles/styles'
import variaveis from '../../styles/variaveis'
import { BgModal, Modal, PBanner, PCardapio, PPrato } from './PerfilStyles'
import { BtnTema } from '../../components/Botao/Botao'
import {
  CardapioItem,
  useRestaurantes
} from '../../RestaurantesAPI/RestaurantesAPI'
import { useState } from 'react'
import { Cart } from '../../components/cart'
import cartIcon from '../../images/cart.png'
import { addItemToCart } from '../../store/reducers/cartReducers'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'

export const Perfil = () => {
  const location = useLocation()
  const { state } = location
  const selectedRestaurantId = state?.id
  const restaurantes = useRestaurantes()
  const [showModal, setShowModal] = useState(false)
  const [selectedPrato, setSelectedPrato] = useState<CardapioItem | null>()
  const [isCartOpen, setIsCartOpen] = useState(false)
  const dispatch = useDispatch()
  const carrinhoItens = useSelector((state: RootState) => state.cart.items) // Correção aqui

  const restauranteSelecionado = restaurantes.find(
    // buscar restaurante pelo id
    (restaurante) => restaurante.id === selectedRestaurantId
  )
  const selectedCardapio = restauranteSelecionado?.cardapio || []
  function primMaiuscula(str: string) {
    // primeira letra Tipo restaurate em Maiuscula
    if (typeof str !== 'string' || str.length === 0) {
      return str
    }
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  const openModal = (prato: CardapioItem) => {
    // Abrir Modal prato
    setSelectedPrato(prato)
    setShowModal(true)
  }

  const closeModal = () => {
    // fechar Modal prato
    setSelectedPrato(null)
    setShowModal(false)
  }

  // Formatando valor para moeda brasileira
  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const handleCartClick = () => {
    setIsCartOpen(true)
  }

  const adicionarAoCarrinho = (selectedPrato: CardapioItem) => {
    const itemExists = carrinhoItens.some(
      (item) => item.id === selectedPrato.id
    )
    if (itemExists) {
      alert('O item já existe no carrinho.')
    } else {
      dispatch(addItemToCart(selectedPrato))
      closeModal()
    }
  }

  return (
    <>
      <Header style={{ display: 'flex', padding: '0 80px', height: '164px' }}>
        <TextMed style={{ color: variaveis.vermelhoEscuro }}>
          Restaurante
        </TextMed>
        <Link to="/">
          <LogoeFood />
        </Link>
        <TextMed style={{ color: variaveis.vermelhoEscuro }}>
          {`${carrinhoItens.length} produto(s) no carrinho`}
          <img
            src={cartIcon}
            style={{ width: '32px', cursor: 'pointer', marginLeft: '8px' }}
            alt="cartIcon"
            onClick={handleCartClick}
          />
        </TextMed>
      </Header>
      <PBanner>
        <div>
          <span>{primMaiuscula(restauranteSelecionado?.tipo as string)}</span>
          <span>{restauranteSelecionado?.titulo}</span>
        </div>
      </PBanner>
      <PCardapio>
        <section>
          {selectedCardapio.map((prato) => (
            <PPrato key={prato.id}>
              <img src={prato.foto} alt="" />
              <TextMed>{prato.nome}</TextMed>
              <TextPeq>{prato.descricao}</TextPeq>
              <BtnTema
                width={'100%'}
                bkColor={variaveis.branco}
                color={variaveis.vermelhoEscuro}
                fontSize={'14px'}
                onClick={() => openModal(prato)}
              >
                Mais detalhes
              </BtnTema>
            </PPrato>
          ))}
        </section>
      </PCardapio>
      {selectedPrato && (
        <BgModal>
          <Modal>
            <a onClick={closeModal} />
            <img src={selectedPrato.foto} alt="" />
            <div>
              <TextMed style={{ color: variaveis.branco }}>
                {selectedPrato.nome}
              </TextMed>
              <TextPeq style={{ color: variaveis.branco }}>
                {selectedPrato.descricao} <br />
                <br />
                {selectedPrato.porcao}
              </TextPeq>
              <BtnTema
                width={'50%'}
                bkColor={variaveis.branco}
                color={variaveis.vermelhoEscuro}
                fontSize={'14px'}
                onClick={() => adicionarAoCarrinho(selectedPrato)}
              >
                {`Adicionar ao carrinho - ${formataPreco(selectedPrato.preco)}`}
              </BtnTema>
            </div>
          </Modal>
        </BgModal>
      )}
      <Rodape />
      <Cart isOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
    </>
  )
}
