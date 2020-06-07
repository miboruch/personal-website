import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after{
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -moz-text-size-adjust: none;
    -webkit-text-size-adjust: none;
  }
  
  html, body{
    margin: 0;
    padding: 0;
  }
  
  html{
    font-size: 62.5%;
  }
  
  body{
    font-size: 1.6rem;
    color: #fff;
    font-family: Futura;
    font-weight: 500;
  }
  
  h1{
    margin: 0;
  }
  
  a {
    text-decoration: none !important;
  }
`;

export default GlobalStyle;
