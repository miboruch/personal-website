import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import Paragraph from '../atoms/Paragraph/Paragraph';
import { animated } from 'react-spring';
import { textWave } from './sliderContentAnimations';

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
  width: 100%;
  text-align: center;
  font-family: Avanti;
  font-weight: bold;
  opacity: 1 !important;
  margin-bottom: 2rem;
  will-change: transform, opacity;
  overflow: hidden;
`;

const StyledLine = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
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
  margin-top: 4rem;
  font-weight: bold;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-decoration: underline;
`;

const StyledTitleWrapper = styled(animated.div)`
  display: flex;
  flex-direction: row;
`;

const SliderContent = ({ image, content }) => {
  // const trail = textWave(1, true);
  const trail = textWave(content.name, true);

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
                {/*{content.name}*/}
                {content.name[index]}
              </StyledTitle>
            </animated.div>
          ))}
        </StyledTitleWrapper>
        <StyledLine />
        <StyledDescription large='true'>
          {content.description}
        </StyledDescription>
        <StyledOpenCase>Open project</StyledOpenCase>
      </StyledContextBox>
      {/*<SliderNavigation next={content.next} />*/}
    </StyledWrapper>
  );
};

export default SliderContent;
