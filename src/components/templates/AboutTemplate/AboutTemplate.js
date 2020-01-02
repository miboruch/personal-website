import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Footer from '../../molecules/Footer/Footer';
import BackgroundImage from 'gatsby-background-image';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import SkillsBox from '../../molecules/SkillsBox/SkillsBox';
import CloseButton from '../../atoms/CloseButton/CloseButton';
import {
  useMousePosition,
  useScrollPosition
} from '../../../utils/customHooks';

const pulse = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0.9);
  }
`;

const StyledWrapper = styled.div`
  background: #fff;
  width: 100%;
  height: 100%;
  position: relative;
`;

const CustomCursor = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  background: none;
  border-radius: 50%;
  border: 2px solid #8d8d8d;
  z-index: 2000;
  transform: translate(-50%, -50%);
  transition-duration: 200ms;
  transition-timing-function: ease-out;
  pointer-events: none;
  display: none;
  //animation: ${pulse} 0.5s infinite alternate;

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
  }

  &::before {
    width: 43px;
    height: 43px;
    border: 1px solid #5d5d5d;
  }

  &::after {
    width: 33px;
    height: 33px;
    border: 1px solid #ededed;
  }
  
  ${({ theme }) => theme.mq.desktop}{
    display: block;
  }
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

const StyledParagraph = styled(Paragraph)`
  font-size: 16px;
  color: #8d8d8d;
  letter-spacing: 0;
`;

const StyledName = styled(Paragraph)`
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
  padding-top: 1rem;
`;

const StyledSkillsOpen = styled(StyledName)`
  color: #000;
  padding-top: 2rem;
  text-align: center;
  cursor: pointer;

  &:hover ${CustomCursor} {
    animation: ${pulse} 0.5s infinite alternate;
  }
`;

const TextWrapper = styled(ContentWrapper)`
  width: 90%;
  text-align: left;
  padding: 4rem 2rem;
  line-height: 1.5;

  ${({ theme }) => theme.mq.standard} {
    width: 40%;
  }
`;

const StyledPortfolioImage = styled(StyledImage)`
  transition: all 1s ease;
  &:hover {
    background-blend-mode: normal;
  }
`;

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
    `}
`;

const SkillsBoxParagraph = styled(Paragraph)`
  color: #adadad;
  letter-spacing: 4px;
  font-size: 10px;
  cursor: pointer;
`;

const AboutTemplate = ({ images }) => {
  const [isBoxOpened, setBoxState] = useState(false);
  const [isSkillsVisible, setSkillsState] = useState(true);
  const customCursorRef = useRef();
  const { x, y } = useMousePosition();
  const isOnTop = useScrollPosition();

  useEffect(() => {
    customCursorRef.current.style.transform = `translate3d(${x - 20}px, ${y -
      20}px, 0)`;
  }, [x, y]);

  return (
    <StyledWrapper>
      <CustomCursor ref={customCursorRef} />
      <StyledImage fluid={images[1].childImageSharp.fluid}>
        <StyledTitle title>About me</StyledTitle>
        <StyledLine />
        <ContentWrapper>
          <StyledQuote>
            &quot;Anyone who has never made a mistake has never tried anything
            new.&quot;
          </StyledQuote>
        </ContentWrapper>
        <StyledName>Michal Boruch</StyledName>
      </StyledImage>
      <TextWrapper>
        <StyledParagraph>
          Hello, my name is Michal, I am 21 years old and I am aspiring junior
          web developer. I am a computer science student in University of
          Applied Sciences in Tarnow. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum. <br />
          In addition I have basic knowledge of <strong>React-native</strong>,
          relational and non-relational databases like{' '}
          <strong>PostreSQL</strong> or <strong>mongooDB</strong>
        </StyledParagraph>
        <StyledSkillsOpen onClick={() => setBoxState(true)}>
          Click here to see my owned skills
        </StyledSkillsOpen>
      </TextWrapper>
      <SmallSkillsBox isOnTop={isOnTop} isOpen={isSkillsVisible}>
        <CloseButton lightTheme setBoxState={setSkillsState} />
        <SkillsBoxParagraph onClick={() => setBoxState(true)}>
          HTML, CSS
          <br />
          JavaScript
          <br />
          React, Redux
          <br />
          Gatsby.js, GraphQL
          <br />
          Node.js, Express
        </SkillsBoxParagraph>
      </SmallSkillsBox>
      <SkillsBox isOpen={isBoxOpened} setBoxState={setBoxState} />
      <StyledPortfolioImage fluid={images[2].childImageSharp.fluid} />
      <Footer />
    </StyledWrapper>
  );
};

export default AboutTemplate;
