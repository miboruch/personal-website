import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CurrentSlideContext } from '../../../providers/CurrentSlideContext';
import { StyledBar } from './TimeoutBar.styles';

const TimeoutBar = ({ allProjectsLength, isDarkTheme }) => {
  const { currentSlide } = useContext(CurrentSlideContext);
  return (
    <StyledBar
      currentSlide={currentSlide}
      allProjectsLength={allProjectsLength}
      isDarkTheme={isDarkTheme}
    />
  );
};

TimeoutBar.propTypes = {
  allProjectsLength: PropTypes.number
};

export default TimeoutBar;
