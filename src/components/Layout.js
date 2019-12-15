import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyle from '../styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import Header from './Header/Header';

import './index.css';

const Layout = ({ children, lightTheme }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header lightTheme={lightTheme} />
        {children}
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  lightTheme: PropTypes.bool
};

Layout.defaultProps = {
  lightTheme: false
};

export default Layout;
