import CardapioItem from '../../components/CardapioItem/CardapioItem'
import { Header } from '../../components/Header/Header'
import { LogoeFood } from '../../components/Logo/Logo'
import { Rodape } from '../../components/Rodape/Rodape'
import { TextMed } from '../../styles/styles'
import variaveis from '../../styles/variaveis'
import { PBanner, PCardapio } from './PerfilStyles'
import { CardapioItensPerfil } from './CardapioItensPerfil'
import { BtnNav as Link } from '../../components/BtnNav/BtnNavStyle'
import { useState } from 'react'

export const Perfil = () => {
  const [selectedCategory, setSelectedCategory] = useState('')

  const handleBtnClick = (id: number, category: string) => {
    setSelectedCategory(category)
    // Aqui você pode usar o ID para outras funcionalidades, se necessário
  }

  return (
    <>
      <Header style={{ display: 'flex', padding: '0 80px' }}>
        <Link to="/">Home</Link>
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
          <span>{selectedCategory}</span>
          <span>La Dolce Vita Trattoria</span>
        </div>
      </PBanner>
      <PCardapio>
        <section>
          {CardapioItensPerfil.map((item, index) => (
            <CardapioItem
              key={index}
              id={item.id}
              title={item.title}
              category={item.category}
              nota={item.nota}
              imageSrc={item.imageSrc}
              description={item.description}
              handleBtnClick={handleBtnClick}
              bkCardItem={variaveis.vermelhoEscuro}
              textColor={variaveis.branco}
              buttonText="Adicionar ao carrinho"
              fullWidth={true}
              isHomePage={false}
            />
          ))}
        </section>
      </PCardapio>
      <Rodape />
    </>
  )
}
