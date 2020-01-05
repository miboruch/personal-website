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

  ${({ theme }) => theme.mq.desktop} {
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

const StyledTitleParagraph = styled(StyledParagraph)`
  text-align: center;
  color: #000;
  font-weight: 500;
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
  text-align: left;
  cursor: pointer;
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

const StyledList = styled.ul`
  list-style-type: none;
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
      <StyledImage fluid={images[0].childImageSharp.fluid}>
        <StyledTitle title>About me</StyledTitle>
        <StyledLine />
        <ContentWrapper>
          <StyledQuote>
            &quot;Anyone who has never made a mistake has never tried anything
            new.&quot;
          </StyledQuote>
        </ContentWrapper>
      </StyledImage>
      <TextWrapper>
        <StyledTitleParagraph title>Michal Boruch</StyledTitleParagraph>
        <StyledParagraph>
          Hello, my name is Michal and I am a 21 years old aspiring junior web
          developer based in Tarnow. I am a computer science student at the
          University of Applied Sciences in Tarnow. In 2019, may I started my
          journey with Javascript, and since then I have been constantly
          increasing my skills and knowledge of web development. My main goal is
          to create modern design in combination with clean DRY code. <br />
          What can I tell about myself? I am open to new technologies and always
          happy to broaden my knowledge. In addition, I have an ability to learn
          very fast, which I consider as an important value. At the university I
          have done a few projects in groups, some of which were not connected
          to web development. Teamwork made me aware of the fact that in order
          to achieve your goal, it is crucial to listen to each other and
          cooperate by finding compromises.
          <br />
          <br />
          Technologies that I use:
          <StyledList>
            <StyledListItem>HTML, CSS/SCSS</StyledListItem>
            <StyledListItem>Javascript, ES6</StyledListItem>
            <StyledListItem>React, Redux</StyledListItem>
            <StyledListItem>Gatsby.js, GraphQL</StyledListItem>
            <StyledListItem>NodeJS, Express</StyledListItem>
            <StyledListItem>GIT</StyledListItem>
          </StyledList>
          Moreover, I have basic knowledge of
          <strong> React-native</strong>, relational and non-relational
          databases like <strong>PostreSQL</strong> or <strong>mongooDB</strong>
          <br />
          <br />
          My personal 2020 front-end roadmap:
          <StyledList>
            <StyledListItem>React advanced concepts</StyledListItem>
            <StyledListItem>Three.js</StyledListItem>
            <StyledListItem>TypeScript</StyledListItem>
          </StyledList>
          If you want to read more about my skills, click the paragraph below:
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
      <StyledPortfolioImage fluid={images[1].childImageSharp.fluid} />
      <Footer />
    </StyledWrapper>
  );
};

export default AboutTemplate;