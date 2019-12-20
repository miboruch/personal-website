import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyle from '../styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import Header from './Header/Header';

import './index.css';

const Layout = ({ children, headerTheme }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header headerTheme={headerTheme} />
        {children}
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headerTheme: PropTypes.oneOf(['dark, light'])
};

export default Layout;
