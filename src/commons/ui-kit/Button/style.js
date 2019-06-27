import styled from 'styled-components'

const ButtonContainer = styled.button`
  width: ${props => props.width || '200px'};
  display: inline-block;
  text-transform: capitalize;
  vertical-align: middle;
  cursor: pointer;
  padding: 11px 0;
  line-height: 20px;
  font-size: 13px;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
  border-radius: 3px;
  background-image: none;
  background-color: ${props => props.theme.primaryColor};
  border: 1px solid ${props => props.theme.primaryColor};
  color: ${props => props.theme.primaryLightColor};
  box-shadow: none;
  transition: all .3s ease;
  box-sizing: border-box;
  outline: 0;
`

export {
  ButtonContainer
}
