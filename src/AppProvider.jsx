import React, { useContext, useReducer } from 'react'

const AppContext = React.createContext()

export const useAppContext = () => {
  return useContext(AppContext)
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_THEME':
      return {
        ...state,
        theme: action.value
      }
    default: 
      return state
  }

  return state;
}

const initialState = {
  theme: 'dark'
}


const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      { children }
    </AppContext.Provider>
  )
}

export default AppProvider

