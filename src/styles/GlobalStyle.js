import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Futura';
    src: url('../../static/fonts/FuturaPT-Bold.woff')   format('woff');
  }
  
  @font-face {
    font-family: 'Futura';
    src: url('../../static/fonts/FuturaPT-Book.woff')   format('woff');
  }
  
  @font-face {
    font-family: 'Futura';
    src: url('../../static/fonts/FuturaPT-Light.woff')   format('woff');
  }

  *, *::before, *::after{
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
    font-family: Futura;
    font-weight: lighter;
  }
  
  h1{
    margin: 0;
  }
`;

export default GlobalStyle;
