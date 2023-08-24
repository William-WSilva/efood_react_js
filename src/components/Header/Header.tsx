import { TextBig } from '../../styles/styles'
import { HeaderBanner } from './HeaderStyle'
import { LogoeFood } from '../Logo/Logo'

export const Header = () => {
  return (
    <>
      <HeaderBanner>
        <LogoeFood />
        <TextBig style={{ textAlign: 'center' }}>
          Viva experiências gastronômicas <br /> no conforto da sua casa
        </TextBig>
      </HeaderBanner>
    </>
  )
}
