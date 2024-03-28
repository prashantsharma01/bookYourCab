import React from 'react'
import { ButtonWrapper } from './styles'

function Button ({ onClick, children, color }) {
  const buttonProps = {}
  buttonProps.onClick = onClick
  buttonProps.children= children
  buttonProps.color=color

  return (
    <ButtonWrapper {...buttonProps}>
      {children}
    </ButtonWrapper>
  )
}

export default Button