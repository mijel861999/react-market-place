import React, { useState } from 'react'
import Theme from './theme/theme'
import GlobalStyles from './theme/globalStyles'
import { darkTheme, lightTheme } from './theme/theme'
import AppRouter from './router/AppRouter'
import './App.css'

function App() {
  const [theme, setTheme] = useState('light')
  
  return (
    <div className="App">
      <Theme theme={ theme === 'light' ? darkTheme : lightTheme  }>
        <GlobalStyles /> 
        <AppRouter setTheme={setTheme} theme={theme} />
      </Theme>  
    </div>
  )
}

export default App
