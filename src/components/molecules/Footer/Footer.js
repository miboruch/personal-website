import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const StyledFooter = styled.footer`
  padding: 3rem;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ footerTheme }) => (footerTheme === 'light' ? '#fff' : '#000')};
`;

const StyledParagraph = styled(Paragraph)`
  font-size: 10px;
  letter-spacing: 4px;
  color: inherit;
`;

const StyledSpan = styled.span`
  color: ${({ footerTheme }) =>
    footerTheme === 'light' ? '#929292' : '#9d9d9d'};
`;

const Footer = ({ footerTheme }) => {
  return (
    <StyledFooter footerTheme={footerTheme}>
      <StyledParagraph>2020</StyledParagraph>
      <StyledParagraph>
        <StyledSpan footerTheme={footerTheme}>MICHAL</StyledSpan> BORUCH
      </StyledParagraph>
    </StyledFooter>
  );
};

Footer.propTypes = {
  footerTheme: PropTypes.oneOf(['dark, light'])
};

export default Footer;
