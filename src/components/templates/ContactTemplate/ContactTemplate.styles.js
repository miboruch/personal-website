import styled from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import GatsbyImage from 'gatsby-image';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-image: ${({ theme }) => theme.color.backgroundDarkGradient};

  ${({ theme }) => theme.mq.standard} {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const ContentWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 90px 2rem 2rem 2rem;

  ${({ theme }) => theme.mq.standard} {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0 3rem;
  }
`;

const FormWrapper = styled.div`
  display: none;

  ${({ theme }) => theme.mq.standard} {
    display: block;
    width: 50%;
  }
`;

const ContentInformation = styled.div`
  margin-left: 2rem;

  ${({ theme }) => theme.mq.standard} {
    margin-left: 100px;
  }
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mq.standard} {
    flex-direction: row;
  }
`;

const StyledTitle = styled(Paragraph)`
  color: #fff;
  font-family: ${({ theme }) => theme.font.family.avanti};
  position: relative;
  margin-top: 30px;

  &:hover {
    transform: translateY(-10px);
  }

  ${({ theme }) => theme.mq.tabletS} {
    margin-bottom: 30px;
  }

  ${({ theme }) => theme.mq.standard} {
    margin-top: 0;
    font-size: 58px;
  }

  ${({ theme }) => theme.mq.desktop} {
    font-size: 89px;
  }
`;

const StyledBox = styled.section`
  color: #fff;
  margin-top: 2rem;
  position: relative;
  width: 200px;

  ${({ theme }) => theme.mq.tabletS} {
    margin-bottom: 2rem;
  }

  ${({ theme }) => theme.mq.standard} {
    &::before {
      content: '';
      position: absolute;
      top: 7px;
      left: -30px;
      width: 0;
      height: 1px;
      background-color: #fff;
      transform: translate(-50%, -50%);
      transition: width 0.5s ease;
    }

    &:hover::before {
      width: 30px;
    }
  }
`;

const StyledContentTitle = styled(Paragraph)`
  font-weight: bold;
  font-size: 13px;
  text-transform: uppercase;
  color: inherit;
  padding-bottom: 1rem;
`;

const StyledLink = styled.a`
  color: #fff;
`;

const ImageWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 70%;
  left: 50%;

  ${({ theme }) => theme.mq.tabletS} {
    width: 50%;
  }

  ${({ theme }) => theme.mq.tabletS} {
    width: 40%;
  }

  ${({ theme }) => theme.mq.standard} {
    width: 25%;
    left: auto;
    bottom: 0;
    right: 0;
  }
`;

const StyledImage = styled(GatsbyImage)`
  width: 100%;
  background: transparent;
  background-blend-mode: overlay;
`;

const FooterWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
`;

const StyledOpenCase = styled(Paragraph)`
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-decoration: underline;
  cursor: pointer;
  margin-bottom: 1rem;
  padding-top: 1rem;
`;

const CVLink = styled.a`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-decoration: underline !important;
  cursor: pointer;
  margin-bottom: 1rem;
`;

const StyledSendMessage = styled(StyledOpenCase)`
  ${({ theme }) => theme.mq.standard} {
    display: none;
  }
`;

const NavigationWrapper = styled.div`
  width: 70%;

  ${({ theme }) => theme.mq.tablet} {
    width: 60%;
  }

  ${({ theme }) => theme.mq.tablet} {
    width: 50%;
  }
`;

const StyledCVWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

const StyledVerticalLine = styled.div`
  display: none;
  width: 1px;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  position: absolute;
  left: 50%;
  top: 0;

  ${({ theme }) => theme.mq.standard} {
    display: block;
  }
`;

export {
  StyledWrapper,
  ContentWrapper,
  FormWrapper,
  ContentInformation,
  RowWrapper,
  StyledTitle,
  StyledBox,
  StyledContentTitle,
  StyledLink,
  ImageWrapper,
  StyledImage,
  FooterWrapper,
  StyledOpenCase,
  CVLink,
  StyledSendMessage,
  NavigationWrapper,
  StyledCVWrapper,
  StyledVerticalLine
};
