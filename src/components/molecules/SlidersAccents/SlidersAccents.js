import React, { useContext } from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import { lineSlide } from './slidersAccentsAnimations';
import { createFade } from '../../../utils/animations';
import { CurrentSlideContext } from '../../../providers/CurrentSlideContext';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

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

const AllProjectCase = styled(Paragraph)`
  position: absolute;
  top: 0;
  left: auto;
  right: 0;
  padding: 0 2rem;
  transform: translateY(-100%);
  font-weight: bold;
  letter-spacing: 4px;
  text-transform: uppercase;
  display: none;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: #fff;
    transition: all 1s cubic-bezier(0.66, 0.24, 0, 0.82);
  }

  &:hover::after {
    width: 100%;
  }

  ${({ theme }) => theme.mq.standard} {
    display: block;
  }
`;

const SlidersAccents = ({ index }) => {
  const { currentSlide } = useContext(CurrentSlideContext);
  const isCurrentSlide = currentSlide === index;

  const circleFade = createFade(isCurrentSlide, 1000, 3600, 0);
  const projectsFade = createFade(isCurrentSlide, 1000, 4000, 0);
  const line = lineSlide(isCurrentSlide);

  return (
    <StyledLine style={line}>
      <StyledCircle style={circleFade}>
        <StyledCircleText small='true' style={circleFade}>
          open project
        </StyledCircleText>
      </StyledCircle>
      <AniLink
        cover
        direction='down'
        to='/projects'
        duration={1.3}
        bg='#212121'
      >
        <AllProjectCase small='true' style={projectsFade}>
          all projects
        </AllProjectCase>
      </AniLink>
    </StyledLine>
  );
};

export default SlidersAccents;
