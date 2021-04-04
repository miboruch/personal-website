import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../styles/GlobalStyle';
import { theme } from '../../styles/theme';
import Header from 'src/components/navigation/Header/Header';

import '../index.css';
import { CurrentSlideContext } from '../../providers/CurrentSlideContext';

const Layout = ({ children, headerTheme }) => {
  const { currentSlide } = useContext(CurrentSlideContext);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header
          headerTheme={
            headerTheme
              ? headerTheme
              : currentSlide % 2 === 0
              ? 'light'
              : 'dark'
          }
          // headerTheme={headerTheme}
        />
        {children}
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headerTheme: PropTypes.oneOf(['dark', 'light'])
};

export default Layout;
