import styled from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.lightThemeBackground};
  position: relative;
`;

const ContentWrapper = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const OverflowBox = styled.div`
  overflow: hidden;
`;

const StyledTitle = styled(Paragraph)`
  color: #1b1b1b;
`;

const StyledSubtitle = styled(StyledTitle)`
  font-size: 40px;
`;

const StyledParagraph = styled(Paragraph)`
  margin-top: 2rem;
  color: #1b1b1b;
  letter-spacing: 0;
`;

const FooterWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export {
  StyledWrapper,
  ContentWrapper,
  OverflowBox,
  StyledTitle,
  StyledSubtitle,
  StyledParagraph,
  FooterWrapper
};
