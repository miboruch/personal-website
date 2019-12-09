import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

const StyledImage = styled(BackgroundImage)`
  width: 100%;
  height: 100vh;
  z-index: 10;
  padding-left: 15rem;
  background-color: transparent;
`;

const StyledHeading = styled.h1`
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);
`;

const SliderContent = ({ image, content }) => {
  return (
    <StyledImage fluid={image.childImageSharp.fluid}>
      <StyledHeading>{content.name}</StyledHeading>
    </StyledImage>
  );
};

export default SliderContent;
