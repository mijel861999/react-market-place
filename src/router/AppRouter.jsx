import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import styled from 'styled-components'

import Navbar from '../components/Navbar'
import Main from '../pages/Main'
import Cart from '../pages/Cart'

const ScApp = styled.div`
  padding: 20px;
  color: ${({ theme }) => theme.text };
  background-color: ${({ theme }) => theme.background};
`

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <ScApp>
        <Routes>
          <Route index path='/' element={<Main />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </ScApp>
    </Router>
  )
}

export default AppRouter
