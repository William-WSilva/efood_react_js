import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Link } from 'react-router-dom'

export const BtnNav = styled(Link)`
  background-color: ${variaveis.vermelhoEscuro};
  color: ${variaveis.branco};
  border: none;
  width: 80px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  font-size: 16px;
  position: fixed;
  top: 8px;
  left: 8px;
`
export { Link }
