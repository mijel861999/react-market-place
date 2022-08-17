import React from 'react'
import { useAppContext } from '../AppProvider'
import { WiDaySunny } from '@react-icons/all-files/wi/WiDaySunny'
import { BiMoon } from '@react-icons/all-files/bi/BiMoon'
import { ScIconButton, ScIcon } from './styles/ScNavbar'

const ToggleThemeButton = () => {
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

export default ToggleThemeButton
