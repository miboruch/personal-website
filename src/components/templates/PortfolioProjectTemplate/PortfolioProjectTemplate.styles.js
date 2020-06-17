import styled from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 70px;
  background-color: ${({ theme }) => theme.color.lightThemeBackground};
  margin: 0;
  overflow-y: hidden;
`;

const TextWrapper = styled.div`
  margin: 2rem;

  ${({ theme }) => theme.mq.standard} {
    margin: 3rem;
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
`;

const ContentBox = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  margin: 1rem 0;

  ${({ theme }) => theme.mq.standard} {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-right: 3rem;
  }
`;

const OverflowDescriptionBox = styled(OverflowBox)`
  margin: 2rem;

  ${({ theme }) => theme.mq.standard} {
    width: 50%;
    margin: 3rem auto;
  }
`;

const Description = styled(Paragraph)`
  font-size: 16px;
  color: #8d8d8d;
  letter-spacing: 0;
  text-align: center;
`;

const LinkWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const TechnologiesWrapper = styled.section`
  width: 100%;
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TextLabel = styled(Paragraph)`
  font-weight: bold;
  font-size: 15px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #1b1b1b;
`;

const StyledLink = styled.a`
  color: #8d8d8d;
  font-size: 18px;
  padding-bottom: 1rem;
`;

const LinkContentWrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export {
  StyledWrapper,
  TextWrapper,
  StyledParagraph,
  OverflowBox,
  StyledTitle,
  ContentBox,
  OverflowDescriptionBox,
  Description,
  LinkWrapper,
  TechnologiesWrapper,
  TextLabel,
  StyledLink,
  LinkContentWrapper
};
