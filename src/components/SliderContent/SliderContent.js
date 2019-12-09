import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

const StyledImage = styled(BackgroundImage)`
  width: 100%;
  height: 100vh;
  z-index: 10;
  padding-left: 15rem;
`;

const SliderContent = ({ image }) => {
  return <StyledImage fluid={image.childImageSharp.fluid} />;
};

export default SliderContent;
