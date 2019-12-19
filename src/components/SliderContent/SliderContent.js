import React, { useContext } from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import Paragraph from '../atoms/Paragraph/Paragraph';
import { animated } from 'react-spring';
import { CurrentSlideContext } from '../../providers/CurrentSlideContext';
import {
  textWave,
  slideFade,
  slideFadeDelayed,
  lineSlide
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
  top: 55%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  height: 100vh;
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
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.3);
`;

const StyledDescription = styled(Paragraph)`
  text-align: center;
  margin-top: 2rem;
  width: 90%;
  font-size: 2rem;
  line-height: 1.6;
`;

const StyledOpenCase = styled(Paragraph)`
  font-size: 14px;
  margin-top: 2rem;
  padding: 2rem;
  font-weight: bold;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-decoration: underline;
`;

const StyledTitleWrapper = styled(animated.div)`
  display: flex;
  flex-direction: row;
`;

const SliderContent = ({ image, content, index }) => {
  const { currentSlide } = useContext(CurrentSlideContext);
  const isCurrentSlide = currentSlide === index;

  const fade = slideFade(isCurrentSlide);
  const fadeDelayed = slideFadeDelayed(isCurrentSlide);
  const line = lineSlide(isCurrentSlide);
  const trail = textWave(content.name, isCurrentSlide);

  return (
    <StyledWrapper>
      <StyledBackgroundImage
        preserveStackingContext={true}
        fluid={image.childImageSharp.fluid}
      />
      <StyledContextBox>
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
        <StyledLine style={line} />
        <StyledDescription large='true' style={fade}>
          {content.description}
        </StyledDescription>
        <StyledOpenCase style={fadeDelayed}>Open project</StyledOpenCase>
      </StyledContextBox>
    </StyledWrapper>
  );
};

export default SliderContent;
