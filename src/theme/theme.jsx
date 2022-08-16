import { ThemeProvider } from 'styled-components'

const themeValues = {
  fontSizes: {
    small: '1.4em',
    medium: '2em',
    large: '2.5em'
  }
}

export const lightTheme = {
  text: '#363537',
  toggleBorder: '#FFF',
  background: '#FAFAFA',
  ...themeValues
}

export const darkTheme = {
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#363537',
  ...themeValues
}

const Theme = ({ children, theme }) => (
  <ThemeProvider theme={theme}>{ children }</ThemeProvider>
)

export default Theme

