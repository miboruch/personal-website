import styled, { css } from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const StyledBox = styled.div`
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

  ${({ headerTheme }) =>
    headerTheme === 'light' &&
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

const StyledParagraph = styled(Paragraph)`
  font-family: ${({ theme }) => theme.font.family.futura};
  padding-left: 2rem;
  width: 120px;
  margin: auto 0;
  text-transform: uppercase;
  color: #fff;

  ${({ headerTheme }) =>
    headerTheme === 'light' &&
    css`
      color: #000;
    `}

  ${({ theme }) => theme.mq.tablet} {
    width: auto;
  }
`;

export { StyledBox, StyledParagraph };
