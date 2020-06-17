import React from 'react';
import PropTypes from 'prop-types';
import { StyledHamburger, InnerHamburger } from './Hamburger.styles';

const Hamburger = ({ isOpen, headerTheme }) => (
  <StyledHamburger isOpen={isOpen} headerTheme={headerTheme}>
    <InnerHamburger isOpen={isOpen} headerTheme={headerTheme} />
  </StyledHamburger>
);

Hamburger.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  headerTheme: PropTypes.oneOf(['dark', 'light'])
};

export default Hamburger;
