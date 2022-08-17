import React, { useState } from 'react'
import Theme from './theme/theme'
import GlobalStyles from './theme/globalStyles'
import { darkTheme, lightTheme } from './theme/theme'
import AppRouter from './router/AppRouter'
import AppProvider from './AppProvider'
import { useAppContext } from './AppProvider'

function App() {
  const { theme } = useAppContext()

  return (
    <Theme theme={ theme === 'dark' ? darkTheme : lightTheme  }>
      <GlobalStyles /> 
      <AppRouter />
    </Theme>  
  )
}

export default App
