import React, { useState } from 'react'
import Theme from './theme/theme'
import GlobalStyles from './theme/globalStyles'
import { darkTheme, lightTheme } from './theme/theme'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [theme, setTheme] = useState('light')

  return (
    <div className="App">
      <Theme theme={ theme === 'light' ? darkTheme : lightTheme  }>
        <GlobalStyles /> 
        <Navbar setTheme={setTheme} />
        <h1>Chau</h1>
      </Theme>  
    </div>
  )
}

export default App
