import { TextMin } from '../../styles/styles'
import { LogoeFood } from '../Logo/Logo'
import { Footer } from './RodapeStyle'
import instagram from '../../images/midias_instagram.png'
import facebook from '../../images/midias_facebook.png'
import twitter from '../../images/midias_twitter.png'

export const Rodape = () => {
  return (
    <>
      <Footer>
        <LogoeFood />
        <div>
          <img src={instagram} alt="" />
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
        </div>
        <TextMin>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </TextMin>
      </Footer>
    </>
  )
}
