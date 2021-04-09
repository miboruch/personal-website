import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';

import { Header } from 'components';
import { Theme } from 'types';
import { CurrentSlideContext } from 'providers/CurrentSlideContext';

import GlobalStyle from 'styles/GlobalStyle';
import { theme } from 'styles/theme';
import '../index.css';

interface Props {
  children: React.ReactNode;
  colorTheme?: Theme;
}

const Layout: React.FC<Props> = ({ children, colorTheme }) => {
  const { currentSlide } = useContext(CurrentSlideContext);

  const pageTheme: Theme = currentSlide % 2 === 0 ? 'light' : 'dark';
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header colorTheme={pageTheme} />
        {children}
      </ThemeProvider>
    </>
  );
};

export default Layout;
