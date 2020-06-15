import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  background: #f3f3f3;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const StyledImage = styled(BackgroundImage)`
  z-index: 2;
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #3d3d3d;
  background-blend-mode: overlay;
`;

const StyledTitle = styled(Paragraph)`
  font-family: ${({ theme }) => theme.font.family.avanti};
  padding: 2rem;
  margin-top: 5rem;
`;

const StyledHeading = styled.h2`
  font-size: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #4d4d4d;
  font-weight: bold;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e3e3e3;
`;

const StyledLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.2);
`;

const ContentWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

const StyledQuote = styled(Paragraph)`
  font-size: 20px;
  color: #fff;
  letter-spacing: 0;
`;

const StyledMain = styled.main`
  font-size: 16px;
  color: #8d8d8d;
  letter-spacing: 0;
`;

const TextWrapper = styled(ContentWrapper)`
  width: 90%;
  text-align: left;
  padding: 4rem 2rem;
  line-height: 1.5;

  ${({ theme }) => theme.mq.standard} {
    width: 50%;
  }
`;

const StyledPortfolioImage = styled(StyledImage)`
  &:hover {
    background-blend-mode: normal;
  }
`;

const StyledList = styled.ul`
  list-style-type: none;
`;

const OverflowBox = styled.div`
  overflow: hidden;
`;

const StyledListItem = styled.li`
  text-decoration: none;
  font-weight: bold;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -15px;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: transparent;
    transition: background 1s ease;
    border: 1px solid #8d8d8d;
  }
`;

export {
  StyledWrapper,
  StyledImage,
  StyledTitle,
  StyledHeading,
  StyledLine,
  ContentWrapper,
  StyledQuote,
  StyledMain,
  TextWrapper,
  StyledPortfolioImage,
  StyledList,
  OverflowBox,
  StyledListItem
};
