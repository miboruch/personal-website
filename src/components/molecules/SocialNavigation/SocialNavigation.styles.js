import styled, { css } from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: ${({ noPadding }) => (noPadding ? 'left' : 'space-between')};
  align-items: center;
  flex-direction: row;

  &:first-child {
    padding-left: 0;
  }
`;

const StyledLink = styled.a`
  color: ${({ headerTheme }) => (headerTheme === 'light' ? '#000' : '#fff')};
  text-decoration: none;
  padding: ${({ noPadding }) =>
    noPadding ? '0 4rem 0.5rem 0' : '2rem 2rem 0.5rem 2rem'};
  letter-spacing: 1px;
  transition: color 0.5s ease;

  ${({ isDarkTheme }) =>
    isDarkTheme &&
    css`
      color: ${({ isDarkTheme }) => (isDarkTheme ? '#222' : '#e7e5e1')};
    `}
`;

export { StyledWrapper, StyledLink };
