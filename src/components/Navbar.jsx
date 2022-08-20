import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { GiHamburgerMenu } from '@react-icons/all-files/gi/GiHamburgerMenu'
import { AiOutlineShoppingCart } from '@react-icons/all-files/ai/aioutlineshoppingcart'

import { ScNavbar, ButtonIcon, ScNameContainer, ScNavbarOpenContainer } from './styles/ScNavbar'
import { ScButton } from '../theme/components'
import ToggleThemeButton from './toggle-theme-button'

const ScLinkNav = styled(Link)`
  color: ${({ theme }) => theme.text};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin: 5px 20px;
`

const ScCartNumber = styled.div`
  position: absolute;
  top: 7px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.small};
  height: 30px;
  width: 30px;
  color: white;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.blue};
`

const NavbarOpen = ({ setIsOpen }) => {
  return (
    <ScNavbarOpenContainer>
      <ScButton
        onClick={() => setIsOpen(value => !value)}
        style={{
          alignSelf: 'flex-start'
        }}
      >
        x
      </ScButton>
      <ScLinkNav to='/'>Redes Sociales</ScLinkNav>
      <ScLinkNav to='/'>Productos</ScLinkNav>
      <ScLinkNav to='/cart'>Carrito</ScLinkNav>
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
      <Link 
        style={{
          position: 'static'
        }}
        to='/cart'>
          <ScCartNumber>10</ScCartNumber>
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
