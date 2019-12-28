import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import GlobalStyle from '../../styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import Header from '../molecules/Header/Header';
import TransitionProvider from '../../providers/TransitionProvider';

import '../index.css';
import { useScreenSize } from '../../utils/customHooks';
import Loader from './Loader/Loader';

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
