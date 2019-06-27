import React, { memo } from 'react'
import HeaderContainer from './style'

const Header = memo(() => (
  <HeaderContainer>
    <h1>Welcome to Rupiah's Denomination Calculator</h1>
    <div>Created by : Muhammad Fuadi Naqi</div>
  </HeaderContainer>
))

export default Header
