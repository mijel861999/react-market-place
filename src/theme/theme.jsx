import { ThemeProvider } from 'styled-components'

const themeValues = {
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em'
  }
}

export const lightTheme = {
  body: '#FFF',
  text: '#363537',
  toggleBorder: '#FFF',
  background: '#363537',
  ...themeValues
}

export const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#999',
  ...themeValues
}

const Theme = ({ children, theme }) => (
  <ThemeProvider theme={theme}>{ children }</ThemeProvider>
)

export default Theme

