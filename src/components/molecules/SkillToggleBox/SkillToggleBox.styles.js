import styled, { css } from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const SmallSkillsBox = styled.div`
  width: 300px;
  background: #1d1d1d;
  position: fixed;
  bottom: 5px;
  left: 5px;
  z-index: 600;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 3rem;
  opacity: ${({ isOnTop }) => (!isOnTop ? 1 : 0)};
  transform: translateY(${({ isOnTop }) => (!isOnTop ? '0' : '20%')});
  transition: transform 1s ease, opacity 1s ease;
  text-transform: uppercase;
  line-height: 1.7;
  -webkit-box-shadow: 10px 10px 30px -15px rgba(0, 0, 0, 1);
  -moz-box-shadow: 10px 10px 30px -15px rgba(0, 0, 0, 1);
  box-shadow: 10px 10px 30px -15px rgba(0, 0, 0, 1);

  ${({ theme }) => theme.mq.tablet} {
    display: flex;
  }

  ${({ isOpen }) =>
    !isOpen &&
    css`
      opacity: 0 !important;
      visibility: hidden !important;
      transition: opacity 1s ease, visibility 1s ease;
    `}
`;

const SkillsBoxParagraph = styled(Paragraph)`
  color: #adadad;
  letter-spacing: 4px;
  font-size: 10px;
  cursor: pointer;
`;

export { SmallSkillsBox, SkillsBoxParagraph };
