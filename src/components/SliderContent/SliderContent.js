import React, { useContext } from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import Paragraph from '../atoms/Paragraph/Paragraph';
import { animated } from 'react-spring';
import { CurrentSlideContext } from '../../providers/CurrentSlideContext';
import {
  textWave,
  slideFadeDelayed,
  lineSlide,
  createFade
} from './sliderContentAnimations';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background: ${({ theme }) => theme.color.backgroundGradient};
`;

const StyledBackgroundImage = styled(BackgroundImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  opacity: 0.5;
  background-color: transparent;
  background-position: center;

  ${({ theme }) => theme.mq.standard} {
    width: 100%;
    transform: translateX(15%);
  }
`;

const StyledContextBox = styled.section`
  position: absolute;
  top: 5rem;
  left: 0;
  width: 100%;
  height: 100vh;

  ${({ theme }) => theme.mq.standard} {
    top: 0;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled(Paragraph)`
  font-size: 58px;
  text-align: center;
  font-family: Avanti;
  font-weight: bold;
  opacity: 1 !important;
  margin-bottom: 2rem;
  will-change: transform, opacity;
  overflow: hidden;
`;

const StyledLine = styled(animated.div)`
  position: relative;
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
`;

const StyledCircle = styled(animated.div)`
  position: absolute;
  top: 50%;
  left: 150px;
  transform: translate(-50%, -50%);
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

const StyledDescription = styled(Paragraph)`
  text-align: center;
  margin-top: 2rem;
  font-size: 2rem;
  line-height: 1.6;
  letter-spacing: 0;
`;

const StyledOpenCase = styled(Paragraph)`
  font-size: 14px;
  margin-top: 2rem;
  padding: 2rem;
  font-weight: bold;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-decoration: underline;

  ${({ theme }) => theme.mq.standard} {
    display: none;
  }
`;

const StyledTitleWrapper = styled(animated.div)`
  display: flex;
  flex-direction: row;
`;

const AllProjectCase = styled(Paragraph)`
  position: absolute;
  top: 0;
  left: auto;
  right: 0;
  padding: 0 2rem;
  transform: translateY(-100%);
  border-bottom: 2px solid #fff;
  font-weight: bold;
  letter-spacing: 4px;
  text-transform: uppercase;
  display: none;

  ${({ theme }) => theme.mq.standard} {
    display: block;
  }
`;

const SliderContent = ({ image, content, index }) => {
  const { currentSlide } = useContext(CurrentSlideContext);
  const isCurrentSlide = currentSlide === index;

  /* Animations -> sliderContentAnimations.js*/
  const fade = createFade(isCurrentSlide, 2000, 1500);
  const circleFade = createFade(isCurrentSlide, 1000, 3600, 0);
  const projectsFade = createFade(isCurrentSlide, 1000, 4000, 0);
  const slideDelayed = slideFadeDelayed(isCurrentSlide);
  const line = lineSlide(isCurrentSlide);
  const trail = textWave(content.name, isCurrentSlide);

  return (
    <StyledWrapper>
      <StyledBackgroundImage
        preserveStackingContext={true}
        fluid={image.childImageSharp.fluid}
      />
      <StyledContextBox>
        <ContentWrapper>
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
          <StyledLine style={line}>
            <StyledCircle style={circleFade}>
              <StyledCircleText small='true' style={circleFade}>
                open project
              </StyledCircleText>
            </StyledCircle>
            <AllProjectCase small='true' style={projectsFade}>
              all projects
            </AllProjectCase>
          </StyledLine>
          <StyledDescription style={fade}>
            {content.description}
          </StyledDescription>
          <StyledOpenCase style={slideDelayed}>Open project</StyledOpenCase>
        </ContentWrapper>
      </StyledContextBox>
    </StyledWrapper>
  );
};

export default SliderContent;
