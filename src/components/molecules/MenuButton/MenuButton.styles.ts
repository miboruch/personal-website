import styled, { css } from 'styled-components';

import { Theme } from 'types';

import { Paragraph, ParagraphSizes } from 'styles';

interface MenuButtonProps {
  colorTheme: Theme;
}

const StyledBox = styled.div<MenuButtonProps>`
  text-align: right;
  width: 200px;
  height: 62px;
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.color.menuBox};
  display: flex;
  flex-direction: row;
  z-index: 901;
  cursor: pointer;
  visibility: hidden;
  transition: background-color 0.5s ease;

  ${({ colorTheme }) =>
    colorTheme === 'light' &&
    css`
      background-color: ${({ theme }) => theme.color.lightThemeBackground};
    `}

  ${({ theme }) => theme.mq.mobileL} {
    width: 220px;
  }

  ${({ theme }) => theme.mq.tablet} {
    width: 300px;
  }
`;

interface ParagraphProps extends MenuButtonProps {
  size: ParagraphSizes;
}

const StyledParagraph = styled(Paragraph)<ParagraphProps>`
  font-family: ${({ theme }) => theme.font.family.futura};
  padding-left: 2rem;
  width: 120px;
  margin: auto 0;
  text-transform: uppercase;
  color: #fff;

  ${({ colorTheme }) =>
    colorTheme === 'light' &&
    css`
      color: #000;
    `}

  ${({ theme }) => theme.mq.tablet} {
    width: auto;
  }
`;

export { StyledBox, StyledParagraph };
