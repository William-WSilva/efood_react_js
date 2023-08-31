import styled from 'styled-components'
import variaveis from '../../../styles/variaveis'

export const Label = styled.label`
  color: ${variaveis.branco};
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 8px;
`

export const Input = styled.input`
  height: 32px;
  width: 100%;
  border: none;
  padding: 8px;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${variaveis.frmTextColor};
`

export const DivCepNum = styled.div`
  display: flex;
  grid-template-columns: 1fr 1fr;
  column-gap: 34px;
`
