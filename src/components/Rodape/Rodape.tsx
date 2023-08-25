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
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img src={instagram} alt="" />
          </a>
          <a
            href="https://pt-br.facebook.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebook} alt="" />
          </a>
          <a
            href="https://twitter.com/?lang=pt"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitter} alt="" />
          </a>
        </div>
        <TextMin style={{ textAlign: 'center', width: '600px' }}>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </TextMin>
      </Footer>
    </>
  )
}
