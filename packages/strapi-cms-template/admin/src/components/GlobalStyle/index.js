import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 60%;
  }

  body {
    font-family: 'Lato', sans-serif;
    font-size: 1.1rem;
    line-height: 1.2;
    color: #212224;
  }

  * {
    -webkit-font-smoothing: subpixel-antialiased;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    line-height: 1.2;
  }
  
  .list-header ~ div > ul {
    max-height: unset;
  }
  
  .btn {
    font-size: 1.3rem;
    padding: 0;
  }

  .cursor-pointer {
    cursor: pointer;
  }

`

export default GlobalStyle
