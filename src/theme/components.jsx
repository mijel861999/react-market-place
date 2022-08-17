import styled from 'styled-components'

export const ScButton = styled.button`
  margin: 10px;
  padding: 7px;
  background: transparent;
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 20px;
  cursor: pointer;
`
