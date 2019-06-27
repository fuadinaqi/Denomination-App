import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;

  > .validation {
    padding-top: 2px;
    margin-top: ${props => props.showValidate ? 0 : '-5px'};
    opacity: ${props => props.showValidate ? 1 : 0};
    transition: 0.7s cubic-bezier(0.25, 0.1, 0, 0.98);

    > .validation-text {
      color: ${props => props.theme.validationColor};
    }
  }
`

const InputContainer = styled.input`
  position: relative;
  z-index: 2;
  width: ${props => props.width || 'calc(100% - 24px)'};
  border-radius: 4px;
  color: rgba(0,0,0,.38);
  background-color: ${props => props.theme.primaryLightColor};
  border: 1px solid ${props => props.showValidate ? props.theme.validationColor : props.theme.borderColor};
  box-shadow: initial;
  font-size: 24px;
  padding: 6px 12px;
  text-align: center;
  transition: 0.1s ease-in-out;

  ::placeholder {
    color: ${props => props.theme.borderColor};
    font-size: 14px;
  }

  :focus {
    outline-width: 0;
  }
`

export {
  Container,
  InputContainer
}
