import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { ButtonContainer } from './style'

const Button = memo(function(props) {
  const { width, children, ...rest } = props
  return (
    <ButtonContainer
      width={width}
      type="submit"
      {...rest}
    >
      {children}
    </ButtonContainer>
  )
})

Button.defaultProps = {
  width: '200px'
}

Button.propTypes = {
  children: PropTypes.any,
  width: PropTypes.string,
}

export default Button
