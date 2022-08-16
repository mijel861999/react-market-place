import React from 'react'
import styled from 'styled-components'

const ScMain = styled.main`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.background};
`

const Main = () => {
  return (
    <ScMain>Main</ScMain>
  )
}

export default Main

