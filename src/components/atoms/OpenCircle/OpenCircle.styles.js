import styled from 'styled-components';
import Paragraph from '../Paragraph/Paragraph';

const StyledCircle = styled.div`
  display: none;
  width: 200px;
  height: 200px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: transparent;
  border-radius: 50%;
  transition: border 1s ease;

  ${({ theme }) => theme.mq.standard} {
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      border: 1px solid rgba(255, 255, 255, 0.7);
      cursor: pointer;
    }
  }
`;

const StyledCircleText = styled(Paragraph)`
  width: auto;
  text-align: center;
  line-height: 2;
  font-family: ${({ theme }) => theme.font.family.futura};
  font-weight: bold;
  word-spacing: 100vw;
  letter-spacing: 4px;
  text-transform: uppercase;
`;

export { StyledCircle, StyledCircleText };
