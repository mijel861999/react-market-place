import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { GiHamburgerMenu } from '@react-icons/all-files/gi/GiHamburgerMenu'
import { AiOutlineShoppingCart } from '@react-icons/all-files/ai/aioutlineshoppingcart'

import { ScNavbar, ButtonIcon, ScNameContainer, ScNavbarOpenContainer } from './styles/ScNavbar'
import { ScButton } from '../theme/components'
import ToggleThemeButton from './toggle-theme-button'

const NavbarOpen = ({ setIsOpen }) => {
  return (
    <ScNavbarOpenContainer>
      <ScButton onClick={() => setIsOpen(value => !value)}>x</ScButton>
      <Link to='/'>Hola</Link>
      <Link to='/'>Hola</Link>
      <Link to='/'>Hola</Link>
    </ScNavbarOpenContainer>
  )
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState()

  return (
    <ScNavbar>
      <ButtonIcon
        icon={<GiHamburgerMenu />}
        onClick={() => setIsOpen(!isOpen)}
      /> 
      <ScNameContainer>
        <h1>Hola, Miguel</h1>
        <ToggleThemeButton /> 
      </ScNameContainer>
      <Link to='/cart'>
        <ButtonIcon
          icon={<AiOutlineShoppingCart />}
        />
      </Link>
      {
        isOpen &&
          <NavbarOpen setIsOpen={setIsOpen} />
      }
    </ScNavbar>
  )
}

export default Navbar
