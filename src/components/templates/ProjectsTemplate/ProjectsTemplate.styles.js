import styled from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 70px;
  background-color: ${({ theme }) => theme.color.lightThemeBackground};
  margin: 0;
  overflow-y: hidden;
  position: relative;
`;

const TextWrapper = styled.div`
  margin: 3rem;

  ${({ theme }) => theme.mq.standard} {
    display: flex;
    flex-direction: row;
  }
`;

const StyledParagraph = styled(Paragraph)`
  font-size: 10px;
  color: #1b1b1b;
  letter-spacing: 3px;
  padding-bottom: 1rem;
`;

const OverflowBox = styled.div`
  overflow: hidden;
`;

const StyledTitle = styled(Paragraph)`
  font-size: 34px !important;
  font-family: ${({ theme }) => theme.font.family.avanti};
  color: #1b1b1b;

  ${({ theme }) => theme.mq.standard} {
    padding: 0 4rem;
  }
`;

export {
  StyledWrapper,
  TextWrapper,
  StyledParagraph,
  OverflowBox,
  StyledTitle
};
