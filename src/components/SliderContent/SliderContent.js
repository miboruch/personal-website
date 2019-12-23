import React, { useContext } from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import Div100vh from 'react-div-100vh';
import Paragraph from '../atoms/Paragraph/Paragraph';
import { animated } from 'react-spring';
import { Link } from 'gatsby';
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
  top: 40px;
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

const StyledTitleWrapper = styled(animated.div)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 2rem;

  ${({ theme }) => theme.mq.standard} {
    width: 80%;
    margin-bottom: 1rem;
    justify-content: flex-start;
  }
`;

const StyledTitle = styled(Paragraph)`
  font-size: 58px;
  font-family: ${({ theme }) => theme.font.family.avanti};
  font-weight: bold;
  opacity: 1 !important;
  will-change: transform, opacity;
  overflow: hidden;
  letter-spacing: 0;
  margin: 0;
`;

const StyledDescription = styled(Paragraph)`
  text-align: center;
  font-size: 2rem;
  line-height: 1.6;
  letter-spacing: 0;
  margin-top: 2rem;
  padding: 0 2rem;

  ${({ theme }) => theme.mq.standard} {
    margin-top: 0;
    padding: 0;
  }
`;

const StyledOpenCase = styled(Paragraph)`
  font-size: 14px;
  padding: 2rem;
  text-align: center;
  font-weight: bold;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-decoration: underline;

  ${({ theme }) => theme.mq.standard} {
    display: none;
  }
`;

const TextWrapper = styled.div`
  height: 140px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  ${({ theme }) => theme.mq.standard} {
    left: 300px;
    transform: translateY(-70%);
  }
`;

const SliderContent = ({ image, content, index }) => {
  const { currentSlide } = useContext(CurrentSlideContext);
  const isCurrentSlide = currentSlide === index;

  /* Animations -> sliderContentAnimations.js*/
  const fade = createFade(isCurrentSlide, 2000, 1500);
  const slideDelayed = slideFadeDelayed(isCurrentSlide);
  const trail = textWave(content.name, isCurrentSlide);

  return (
    <Div100vh>
      <StyledWrapper>
        <StyledBackgroundImage
          preserveStackingContext={true}
          fluid={image.childImageSharp.fluid}
        />
        <StyledContextBox>
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
              <Link to='/projects'>
                <StyledOpenCase style={slideDelayed}>
                  Open project
                </StyledOpenCase>
              </Link>
            </TextWrapper>
            <SlidersAccents index={index} />
          </ContentWrapper>
          {/*</ContentWrapper>*/}
        </StyledContextBox>
      </StyledWrapper>
    </Div100vh>
  );
};

export default SliderContent;
