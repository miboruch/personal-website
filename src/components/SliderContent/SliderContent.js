import React from 'react';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: ${({ theme }) => theme.color.background};
`;

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  height: 100vh;
  opacity: 0.7;
`;

const StyledHeading = styled.h1`
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);
`;

const SliderContent = ({ image, content }) => {
  return (
    <StyledWrapper>
      <StyledBackgroundImage
        preserveStackingContext={true}
        fluid={image.childImageSharp.fluid}
      />
      <StyledHeading>{content.name}</StyledHeading>
    </StyledWrapper>
  );
};

export default SliderContent;
