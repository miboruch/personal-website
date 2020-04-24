import React, { useContext } from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import { animated } from 'react-spring';
import { Link } from 'gatsby';
import { CurrentSlideContext } from '../../../providers/CurrentSlideContext';
import { animationIn, createFade } from '../../../utils/animations';
import { textWave } from './sliderContentAnimations';
import SlidersAccents from '../../molecules/SlidersAccents/SlidersAccents';
import Div100vh from 'react-div-100vh';

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    width: 100%;
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
  margin: auto;
  color: inherit;

  ${({ theme }) => theme.mq.standard} {
    text-align: right;
    margin: unset;
  }
`;

const StyledLink = styled(Link)`
  color: inherit;
`;

const TextWrapper = styled.div`
  height: 140px;
  position: absolute;
  top: 45%;
  transform: translateY(-50%);
  text-align: right;

  ${({ theme }) => theme.mq.standard} {
    right: 166px;
    top: 50%;
    transform: translateY(-70%);
  }
`;

const OverflowBox = styled.div`
  overflow: hidden;
  margin-top: 2rem;
  z-index: 1000;
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
                {trail.map(({ x, height, ...rest }, index) => (
                  <animated.div
                    key={index}
                    style={{
                      ...rest,
                      transform: x.interpolate(
                        x => `rotate(${x}px)`,
                        `translate3d(0, ${x}px, 0)`
                      )
                    }}
                  >
                    <StyledTitle title='true' style={{ height }}>
                      {content.name[index]}
                    </StyledTitle>
                  </animated.div>
                ))}
              </StyledTitleWrapper>
              <StyledDescription style={fade}>
                {content.description}
              </StyledDescription>
              <OverflowBox>
                <StyledLink to={content.pageLink}>
                  <StyledOpenCase style={bottomSlide}>
                    Open project
                  </StyledOpenCase>
                </StyledLink>
              </OverflowBox>
            </TextWrapper>
            <SlidersAccents
              index={index}
              link={content.pageLink}
              isDarkTheme={isDarkTheme}
            />
          </ContentWrapper>
        </StyledContextBox>
      </StyledWrapper>
    </Div100vh>
  );
};

export default SliderContent;
