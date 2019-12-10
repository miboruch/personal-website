import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

const Paragraph = styled(animated.p)`
  margin: 0;
  left: 0;
  letter-spacing: 2px;
  color: #fff;

  ${({ small }) =>
    small &&
    css`
      font-size: ${({ theme }) => theme.font.size.mobile.s};
    `}
  
  ${({ medium }) =>
    medium &&
    css`
      ${({ theme }) => theme.mq.mobileL} {
        font-size: ${({ theme }) => theme.font.size.mobile.m};
      }
      ${({ theme }) => theme.mq.desktop} {
        font-size: ${({ theme }) => theme.font.size.desktop.m};
      }
    `}
  
  ${({ large }) =>
    large &&
    css`
      ${({ theme }) => theme.mq.mobileL} {
        font-size: ${({ theme }) => theme.font.size.mobile.l};
      }
      ${({ theme }) => theme.mq.desktop} {
        font-size: ${({ theme }) => theme.font.size.desktop.l};
      }
    `}
  
  ${({ title }) =>
    title &&
    css`
      ${({ theme }) => theme.mq.mobileL} {
        font-size: ${({ theme }) => theme.font.size.mobile.title};
      }
      ${({ theme }) => theme.mq.desktop} {
        font-size: ${({ theme }) => theme.font.size.desktop.title};
      }
    `}
`;

export default Paragraph;
