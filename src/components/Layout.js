import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import GlobalStyle from '../styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import Header from './Header/Header';

import './layout.css';
import Menu from './Menu/Menu';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        {children}
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
