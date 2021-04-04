import styled, { css } from 'styled-components';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin-bottom: 10px;
  height: 62px;
  background: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  transition: all 1s ease;
  z-index: 901;

  ${({ isOnTop }) =>
    !isOnTop &&
    css`
      transition: all 1s 1s ease;
      background: ${({ headerTheme }) =>
        headerTheme === 'dark'
          ? 'rgba(241, 241, 241, 0.9)'
          : 'rgba(0,0,0,0.7)'};
    `}

  ${({ isOpen }) =>
    isOpen &&
    css`
      background: transparent;
      transition: all 1s ease;
    `}
`;

const StyledLink = styled.a`
  position: absolute;
  right: 345px;
  display: none;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  color: #fff;
  transition: color 1s ease;
  visibility: hidden;

  ${({ headerTheme }) =>
    headerTheme === 'dark' &&
    css`
      color: ${({ isOpen }) => (isOpen ? '#fff' : '#000')};
    `}
  
  ${({ headerTheme }) =>
    headerTheme === 'light' &&
    css`
      color: ${({ isOpen }) => (isOpen ? '#000' : '#fff')};
    `}

  ${({ theme }) => theme.mq.standard} {
    display: flex;
  }
`;

export { StyledHeader, StyledLink };
