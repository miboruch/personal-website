import styled, { css } from 'styled-components';

export type ParagraphSizes = 'small' | 'medium' | 'large' | 'title' | 'titleMenu';

interface ParagraphProps {
  size: ParagraphSizes;
}

const Paragraph = styled.p<ParagraphProps>`
  margin: 0;
  left: 0;
  letter-spacing: 2px;
  color: #fff;
  font-weight: 500;
  
  ${({ size }) =>
    size === 'small' &&
    css`
      font-size: ${({ theme }) => theme.font.size.mobile.s};
    `}

  ${({ size, theme }) =>
    size === 'medium' &&
    css`
      font-size: ${theme.font.size.mobile.s};

      ${theme.mq.mobileL} {
        font-size: ${theme.font.size.mobile.m};
      }
      ${theme.mq.desktop} {
        font-size: ${theme.font.size.desktop.m};
      }
    `}

  ${({ size, theme }) =>
    size === 'large' &&
    css`
      font-size: ${theme.font.size.mobile.m};

      ${theme.mq.mobileL} {
        font-size: ${theme.font.size.mobile.l};
      }
      ${theme.mq.desktop} {
        font-size: ${theme.font.size.desktop.l};
      }
    `}

  ${({ size, theme }) =>
    size === 'title' &&
    css`
      ${theme.mq.mobileL} {
        font-size: ${theme.font.size.mobile.title};
      }
      ${theme.mq.standard} {
        font-size: ${theme.font.size.desktop.title};
      }
      font-weight: 700;
    `}

  ${({ size, theme }) =>
    size === 'titleMenu' &&
    css`
      font-family: Avanti, sans-serif;
      font-size: 38px;
      font-weight: 700;
      color: rgba(255, 255, 255, 0.2);
      transition: color 1s ease;

      &:hover {
        color: rgba(255, 255, 255, 1);
      }

      ${theme.mq.mobileL} {
        font-size: ${theme.font.size.mobile.title};
      }
      ${theme.mq.desktop} {
        font-size: ${theme.font.size.desktop.title};
      }
    `}
`;

export default Paragraph;
