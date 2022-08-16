import React from 'react'
import styled from 'styled-components'
import { WiDaySunny } from '@react-icons/all-files/wi/WiDaySunny'
import { BiMoon } from '@react-icons/all-files/bi/BiMoon'
import { GiHamburgerMenu } from '@react-icons/all-files/gi/GiHamburgerMenu'
import { AiOutlineShoppingCart } from '@react-icons/all-files/ai/aioutlineshoppingcart'

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

const ToggleButtonTheme = ({ setTheme, theme }) => {
  const changeTeam = () => {
    setTheme(theme => {
      if(theme==='light') return 'dark'
      else return 'light'
    })
  }

  return (
    <ScIconButton onClick={changeTeam} style={{ paddingLeft: '15px', marginTop: '4px' }}>
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

const Navbar = ({ setTheme, theme }) => {
  return (
    <ScNavbar>
      <ButtonIcon
        icon={<GiHamburgerMenu />}
      /> 
      <ScNameContainer>
        <h1>Hola, Miguel</h1>
        <ToggleButtonTheme setTheme={setTheme} theme={theme} /> 
      </ScNameContainer>
      <ButtonIcon
        icon={<AiOutlineShoppingCart />}
      />
    </ScNavbar>
  )
}

export default Navbar
