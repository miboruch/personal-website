import React from 'react';
import PropTypes from 'prop-types';
import { StyledFooter, StyledParagraph, StyledSpan } from './Footer.styles';

const Footer = ({ footerTheme }) => (
  <StyledFooter footerTheme={footerTheme}>
    <StyledParagraph>2020</StyledParagraph>
    <StyledParagraph>
      <StyledSpan footerTheme={footerTheme}>MICHAL</StyledSpan> BORUCH
    </StyledParagraph>
  </StyledFooter>
);

Footer.propTypes = {
  footerTheme: PropTypes.oneOf(['dark, light'])
};

export default Footer;
