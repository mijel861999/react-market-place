import React from 'react'
import styled from 'styled-components'

export const ScNavbar = styled.nav`
  position: static;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  font-size: ${({ theme }) => theme.fontSizes.small};
`

export const ScIconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`

export const ScIcon = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.text};
`

export const ScNameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ScNavbarOpenContainer = styled.nav`
  background-color: ${({ theme }) => theme.background};
  color: ${({theme}) => theme.text};
  border-right: 1px solid ${({ theme }) => theme.colors.grey};
  position: fixed;
  top:0;
  left: 0;
  width: 200px;
  height: 100vh;
`


export const ButtonIcon = ({ icon, onClick }) => {
  return (
    <ScIconButton onClick={onClick}>
      <ScIcon>
        { icon }
      </ScIcon>
    </ScIconButton> 
  )
}
