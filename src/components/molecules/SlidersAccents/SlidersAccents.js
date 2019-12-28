import React, { useContext } from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import { lineSlide } from './slidersAccentsAnimations';
import { createFade } from '../../../utils/animations';
import { CurrentSlideContext } from '../../../providers/CurrentSlideContext';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import OpenCircle from '../../atoms/OpenCircle/OpenCircle';
import Link from '../../atoms/Link/Link';
import { TransitionLink } from 'gatsby-plugin-transition-link';

const StyledLine = styled(animated.div)`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);

  ${({ theme }) => theme.mq.standard} {
    top: 50%;
  }
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

const CircleWrapper = styled(animated.div)`
  position: absolute;
  top: 100%;
  left: 150px;
  transform: translate(-50%, -50%);
`;

const SlidersAccents = ({ index, link }) => {
  const { currentSlide } = useContext(CurrentSlideContext);
  const isCurrentSlide = currentSlide === index;

  const projectsFade = createFade(isCurrentSlide, 1000, 4000, 0);
  const circleFade = createFade(isCurrentSlide, 1000, 3600, 0);
  const line = lineSlide(isCurrentSlide);

  return (
    <StyledLine style={line}>
      <Link to={link}>
        <CircleWrapper style={circleFade}>
          <OpenCircle />
        </CircleWrapper>
      </Link>
      <Link to='/projects'>
        <AllProjectCase small='true' style={projectsFade}>
          all projects
        </AllProjectCase>
      </Link>
    </StyledLine>
  );
};

export default SlidersAccents;
