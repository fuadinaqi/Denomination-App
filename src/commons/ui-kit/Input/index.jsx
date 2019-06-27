import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { Container, InputContainer } from './style'

const Input = forwardRef(function(props, ref) {
  const {
    type,
    width,
    showValidate,
    validationText,
    ...rest
  } = props
  return (
    <Container showValidate={showValidate}>
      <InputContainer
        ref={ref}
        type={type}
        width={width}
        showValidate={showValidate}
        {...rest}
      />
      <div className="validation">
        <small className="validation-text">
          {validationText}
        </small>
      </div>
    </Container>
  )
})

Input.defaultProps = {
  type: 'text',
  validationText: '',
  width: '',
  showValidate: false
}

Input.propTypes = {
  type: PropTypes.string,
  validationText: PropTypes.string,
  width: PropTypes.string,
  showValidate: PropTypes.bool,
}

export default Input
