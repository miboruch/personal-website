import React from 'react';
import styled from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const StyledFooter = styled.footer`
  background: transparent;
  padding: 0 3rem 3rem;
  display: flex;
  justify-content: space-between;
`;

const StyledParagraph = styled(Paragraph)`
  font-size: 10px;
  color: #000;
  letter-spacing: 4px;
`;

const StyledSpan = styled.span`
  color: #9d9d9d;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledParagraph>2019</StyledParagraph>
      <StyledParagraph>
        <StyledSpan>MICHAL</StyledSpan> BORUCH
      </StyledParagraph>
    </StyledFooter>
  );
};

export default Footer;
