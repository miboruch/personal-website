import React, { useContext } from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import Paragraph from '../atoms/Paragraph/Paragraph';
import { animated } from 'react-spring';
import { CurrentSlideContext } from '../../providers/CurrentSlideContext';
import { createFade } from '../../utils/animations';
import { textWave, slideFadeDelayed } from './sliderContentAnimations';
import SlidersAccents from '../molecules/SlidersAccents/SlidersAccents';

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
  font-family: ${({ theme }) => theme.font.family.avanti};
  font-weight: bold;
  opacity: 1 !important;
  margin-bottom: 2rem;
  will-change: transform, opacity;
  overflow: hidden;
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

const SliderContent = ({ image, content, index }) => {
  const { currentSlide } = useContext(CurrentSlideContext);
  const isCurrentSlide = currentSlide === index;

  /* Animations -> sliderContentAnimations.js*/
  const fade = createFade(isCurrentSlide, 2000, 1500);
  const slideDelayed = slideFadeDelayed(isCurrentSlide);
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
          <SlidersAccents index={index} />
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
