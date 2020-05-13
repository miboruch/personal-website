import React, { useContext } from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import { animated } from 'react-spring';
import { Link } from 'gatsby';
import { CurrentSlideContext } from '../../../providers/CurrentSlideContext';
import { animationIn, createFade } from '../../../utils/animations';
import { textWave } from './sliderContentAnimations';
import Div100vh from 'react-div-100vh';
import PageTransitionProvider from '../../../providers/PageTransitionProvider';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #222;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #e7e5e1;
    transform: ${({ isEven }) =>
      isEven ? 'translateX(-100%)' : 'translateX(0)'};
    transition: transform 1s 2s cubic-bezier(0.66, 0.24, 0, 0.82);
  }
`;

const StyledBackgroundImage = styled(BackgroundImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  background-position: center;

  ${({ theme }) => theme.mq.standard} {
    width: 100%;
    transform: translateX(-15%);
    opacity: 1;
  }
`;

const StyledContextBox = styled.section`
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  height: 100%;
  color: ${({ isDarkTheme }) => (isDarkTheme ? '#222' : '#e7e5e1')};

  ${({ theme }) => theme.mq.standard} {
    top: 0;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  //display: flex;
  //flex-direction: column;
  //justify-content: center;
  //align-items: center;
`;

const StyledTitleWrapper = styled(animated.div)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 2rem;
  transition: transform 0.5s ease;

  &:hover {
    transform: translateY(-10px);
  }

  ${({ theme }) => theme.mq.standard} {
    margin-bottom: 1rem;
    justify-content: flex-end;
  }
`;

const StyledTitle = styled(Paragraph)`
  font-family: ${({ theme }) => theme.font.family.avanti};
  font-weight: bold;
  opacity: 1 !important;
  will-change: transform, opacity;
  overflow: hidden;
  letter-spacing: 0;
  margin: 0;
  transition: all 0.5s ease;
  text-align: inherit;
  color: inherit;
`;

const StyledDescription = styled(Paragraph)`
  font-size: 2rem;
  line-height: 1.6;
  letter-spacing: 0;
  margin-top: 2rem;
  padding: 0 2rem;
  text-align: center;
  transition: all 1s ease;
  color: inherit;

  ${({ theme }) => theme.mq.standard} {
    margin-top: 0;
    padding: 0;
    text-align: right;
  }
`;

const StyledOpenCase = styled(Paragraph)`
  font-size: 14px;
  text-align: center;
  font-weight: bold;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-decoration: underline;
  color: inherit;

  ${({ theme }) => theme.mq.standard} {
    text-align: right;
    margin: unset;
  }
`;

const TextWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: right;

  ${({ theme }) => theme.mq.standard} {
    display: flex;
    align-items: flex-end;
    left: auto;
    flex-direction: column;
    width: 80%;
    right: 176px;
    top: 50%;
    transform: translateY(-57%);
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 50%;
  }
`;

const StyledLine = styled(animated.div)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  height: 1px;
  background: ${({ isDarkTheme }) =>
    isDarkTheme ? 'rgba(214, 212, 208, 0.6)' : 'rgba(214, 212, 208, 0.2)'};
  z-index: 5;
  transition: all 1s ease;

  ${({ theme }) => theme.mq.standard} {
    top: 50%;
  }
`;

const OverflowBox = styled.div`
  overflow: hidden;
  margin-top: 2rem;
`;

const AllProjectOverflow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-100%);
  right: 0.7rem;
  overflow: hidden;
`;

const AllProjectCase = styled(Paragraph)`
  position: relative;
  padding: 0 2rem;
  font-weight: bold;
  letter-spacing: 4px;
  text-transform: uppercase;
  display: none;
  cursor: pointer;
  color: ${({ isDarkTheme }) => (isDarkTheme ? '#222' : '#fff')} !important;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ isDarkTheme }) => (isDarkTheme ? '#222' : '#fff')};
    transition: all 1s cubic-bezier(0.66, 0.24, 0, 0.82);
  }

  &:hover::after {
    width: 100%;
  }

  ${({ theme }) => theme.mq.standard} {
    display: block;
  }
`;

const SliderContent = ({ image, content, index, isDarkTheme }) => {
  const { currentSlide } = useContext(CurrentSlideContext);
  const isCurrentSlide = currentSlide === index;

  /* Animations -> sliderContentAnimations.js*/
  const fade = createFade(isCurrentSlide, 2000, 900, 0);
  const trail = textWave(content.name, isCurrentSlide);
  const bottomSlide = animationIn(isCurrentSlide, 1000, 1200, 0);

  return (
    <Div100vh>
      <StyledWrapper isEven={currentSlide % 2 === 0}>
        <StyledBackgroundImage
          preserveStackingContext={true}
          fluid={image.childImageSharp.fluid}
          isDarkTheme={isDarkTheme}
        />
        <StyledContextBox isDarkTheme={isDarkTheme}>
          <ContentWrapper>
            <TextWrapper>
              <StyledTitleWrapper>
                <StyledTitle title='true'>{content.name}</StyledTitle>
              </StyledTitleWrapper>
              <StyledDescription style={fade}>
                {content.description}
              </StyledDescription>
              <OverflowBox>
                <PageTransitionProvider to={content.pageLink}>
                  <StyledOpenCase style={bottomSlide}>
                    Open project
                  </StyledOpenCase>
                </PageTransitionProvider>
              </OverflowBox>
            </TextWrapper>
            <StyledLine isDarkTheme={isDarkTheme} />
            <AllProjectOverflow>
              <PageTransitionProvider to='/projects' dark={true}>
                <AllProjectCase small='true' isDarkTheme={isDarkTheme}>
                  all projects
                </AllProjectCase>
              </PageTransitionProvider>
            </AllProjectOverflow>
          </ContentWrapper>
        </StyledContextBox>
      </StyledWrapper>
    </Div100vh>
  );
};

export default SliderContent;
