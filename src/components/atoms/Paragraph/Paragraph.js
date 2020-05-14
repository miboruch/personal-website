import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

const Paragraph = styled(animated.p)`
  margin: 0;
  left: 0;
  letter-spacing: 2px;
  color: #fff;
  font-weight: 500;

  ${({ small }) =>
    small &&
    css`
      font-size: ${({ theme }) => theme.font.size.mobile.s};
    `}

  ${({ medium }) =>
    medium &&
    css`
      font-size: ${({ theme }) => theme.font.size.mobile.s};
      ${({ theme }) => theme.mq.mobileL} {
        font-size: ${({ theme }) => theme.font.size.mobile.m};
      }
      ${({ theme }) => theme.mq.desktop} {
        font-size: ${({ theme }) => theme.font.size.desktop.m};
      }
    `};

  ${({ large }) =>
    large &&
    css`
      font-size: ${({ theme }) => theme.font.size.mobile.m};
      ${({ theme }) => theme.mq.mobileL} {
        font-size: ${({ theme }) => theme.font.size.mobile.l};
      }
      ${({ theme }) => theme.mq.desktop} {
        font-size: ${({ theme }) => theme.font.size.desktop.l};
      }
    `};

  ${({ title }) =>
    title &&
    css`
      ${({ theme }) => theme.mq.mobileL} {
        font-size: ${({ theme }) => theme.font.size.mobile.title};
      }
      ${({ theme }) => theme.mq.standard} {
        font-size: ${({ theme }) => theme.font.size.desktop.title};
      }
      font-weight: 700;
    `}

  ${({ titleMenu }) =>
    titleMenu &&
    css`
      font-family: Avanti;
      font-size: 38px;
      ${({ theme }) => theme.mq.mobileL} {
        font-size: ${({ theme }) => theme.font.size.mobile.title};
      }
      ${({ theme }) => theme.mq.desktop} {
        font-size: ${({ theme }) => theme.font.size.desktop.title};
      }
      font-weight: 700;
      color: rgba(255, 255, 255, 0.2);
      transition: color 1s ease;

      &:hover {
        color: rgba(255, 255, 255, 1);
      }
    `}
`;

export default Paragraph;
