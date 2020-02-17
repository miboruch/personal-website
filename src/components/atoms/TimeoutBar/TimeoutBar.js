import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { CurrentSlideContext } from '../../../providers/CurrentSlideContext';

const StyledBar = styled.div`
  width: 100px;
  height: 2px;
  background: #ccc;
  margin: 0 0.7rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-color: #2d2d2d;
    width: calc(
      ${({ currentSlide, allProjectsLength }) =>
        `(100% / ${allProjectsLength}) * ${currentSlide} + 33%`}
    );
    height: 2px;
    transition: width 0.5s ease;
  }
`;

const TimeoutBar = ({ allProjectsLength }) => {
  const { currentSlide } = useContext(CurrentSlideContext);
  return (
    <StyledBar
      currentSlide={currentSlide}
      allProjectsLength={allProjectsLength}
    />
  );
};

TimeoutBar.propTypes = {
  allProjectsLength: PropTypes.number
};

export default TimeoutBar;
