import React from 'react'

const ToggleButtonTheme = ({ setTheme }) => {
  const changeTeam = () => {
    setTheme(theme => {
      if(theme==='light') return 'dark'
      else return 'light'
    })
  }

  return (
    <button onClick={changeTeam}>Theme</button> 
  )
}

const Navbar = ({ setTheme }) => {
  return (
    <nav>
      <ToggleButtonTheme setTheme={setTheme} /> 
    </nav> 
  )
}

export default Navbar
