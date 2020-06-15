import styled from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const NavigationBox = styled.div`
  width: 200px;
  background: #fff;
  position: fixed;
  bottom: 5px;
  right: 5px;
  z-index: 600;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem 3rem;
  opacity: ${({ isOnTop }) => (isOnTop ? 1 : 0)};
  transform: translateY(${({ isOnTop }) => (isOnTop ? '0' : '10%')});
  transition: transform 2s ease, opacity 2s ease;
  text-transform: uppercase;
  line-height: 1.7;
  -webkit-box-shadow: 10px 10px 30px -15px rgba(0, 0, 0, 1);
  -moz-box-shadow: 10px 10px 30px -15px rgba(0, 0, 0, 1);
  box-shadow: 10px 10px 30px -15px rgba(0, 0, 0, 1);
`;

const NavigationParagraph = styled(Paragraph)`
  color: #8d8d8d;
  letter-spacing: 4px;
  font-size: 10px;
`;

export { NavigationBox, NavigationParagraph };
