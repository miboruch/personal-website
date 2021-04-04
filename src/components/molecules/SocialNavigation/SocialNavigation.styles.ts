import styled, { css } from 'styled-components';
import { HeaderTheme } from 'types';

interface WrapperProps {
  noPadding?: boolean;
}

const StyledWrapper = styled.div<WrapperProps>`
  display: flex;
  justify-content: ${({ noPadding }) => (noPadding ? 'left' : 'space-between')};
  align-items: center;
  flex-direction: row;

  &:first-child {
    padding-left: 0;
  }
`;

interface LinkProps extends WrapperProps {
  headerTheme: HeaderTheme;
  isDarkTheme?: boolean;
}

const StyledLink = styled.a<LinkProps>`
  color: ${({ headerTheme }) => (headerTheme === 'light' ? '#000' : '#fff')};
  text-decoration: none;
  padding: ${({ noPadding }) =>
    noPadding ? '0 4rem 0.5rem 0' : '2rem 2rem 0.5rem 2rem'};
  letter-spacing: 1px;
  transition: color 0.5s ease;

  ${({ isDarkTheme, headerTheme }) =>
    isDarkTheme &&
    css`
      color: ${headerTheme ? '#222' : '#e7e5e1'};
    `}
`;

export { StyledWrapper, StyledLink };
