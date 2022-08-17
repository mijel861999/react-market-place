import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { WiDaySunny } from '@react-icons/all-files/wi/WiDaySunny'
import { BiMoon } from '@react-icons/all-files/bi/BiMoon'
import { GiHamburgerMenu } from '@react-icons/all-files/gi/GiHamburgerMenu'
import { AiOutlineShoppingCart } from '@react-icons/all-files/ai/aioutlineshoppingcart'
import { useAppContext } from '../AppProvider'

const ScNavbar = styled.nav`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  font-size: ${({ theme }) => theme.fontSizes.small};
`

const ScIconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`

const ScIcon = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.text};
`

const ScNameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ToggleButtonTheme = () => {
  const { theme, dispatch } = useAppContext()

  const changeTheme = () => {
    if (theme === 'dark') {
      dispatch({
        type: 'CHANGE_THEME',
        value: 'light'
      })
    } else {
      dispatch({
        type: 'CHANGE_THEME',
        value: 'dark'
      })
    }
  }

  return (
    <ScIconButton onClick={changeTheme} style={{ paddingLeft: '15px', marginTop: '4px' }}>
      <ScIcon>
        {theme === 'light' ? <BiMoon /> : <WiDaySunny/>}
      </ScIcon>
    </ScIconButton> 
  )
}

const ButtonIcon = ({ icon }) => {
  return (
    <ScIconButton>
      <ScIcon>
        { icon }
      </ScIcon>
    </ScIconButton> 
  )
}

const Navbar = () => {
  return (
    <ScNavbar>
      <ButtonIcon
        icon={<GiHamburgerMenu />}
      /> 
      <ScNameContainer>
        <h1>Hola, Miguel</h1>
        <ToggleButtonTheme /> 
      </ScNameContainer>
      <Link to='/cart'>
        <ButtonIcon
          icon={<AiOutlineShoppingCart />}
        />
      </Link>
    </ScNavbar>
  )
}

export default Navbar
