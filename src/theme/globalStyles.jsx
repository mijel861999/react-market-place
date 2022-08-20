import { createGlobalStyle } from 'styled-components'

/*
    1 - Posicionamiento
    2 - Modelo caja (Box model - Margin, Padding, width, height)
    3 - Tipografía
    4 - Visuales
    5 - Otros
*/


const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  }

  a {
    font-weight: 500;
    text-decoration: inherit;
  }

  body, html {
    font-size: 62.5%;
    background: ${({ theme }) => theme.text};
  }
  
  /* width */
  ::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`
export default GlobalStyles

