import { useLocation } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import { LogoeFood } from '../../components/Logo/Logo'
import { Rodape } from '../../components/Rodape/Rodape'
import { TextMed, TextPeq } from '../../styles/styles'
import variaveis from '../../styles/variaveis'
import { BgModal, Modal, PBanner, PCardapio, PPrato } from './PerfilStyles'
import { BtnNav as Link } from '../../components/BtnNav/BtnNavStyle'
import { BtnTema } from '../../components/Botao/Botao'
import restaurant from '../../images/restaurant.png'
import {
  CardapioItem,
  useRestaurantes
} from '../../RestaurantesAPI/RestaurantesAPI'
import { useState } from 'react'

export const Perfil = () => {
  const location = useLocation()
  const { state } = location
  const selectedRestaurantId = state?.id
  const restaurantes = useRestaurantes()
  const [showModal, setShowModal] = useState(false)
  const [selectedPrato, setSelectedPrato] = useState<CardapioItem | null>(null)

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

  return (
    <>
      <Header style={{ display: 'flex', padding: '0 80px' }}>
        <Link to="/">
          <img
            src={restaurant}
            alt="Icone Restaurantes"
            title="Acessar Restaurantes"
          />
        </Link>
        <TextMed style={{ color: variaveis.vermelhoEscuro }}>
          Restaurante
        </TextMed>
        <LogoeFood />
        <TextMed style={{ color: variaveis.vermelhoEscuro }}>
          0 produto(s) no carrinho
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
              >
                {`Adicionar ao carrinho - ${selectedPrato.preco}`}
              </BtnTema>
            </div>
          </Modal>
        </BgModal>
      )}
      <Rodape />
    </>
  )
}
