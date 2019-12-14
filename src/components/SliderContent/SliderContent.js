import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import Paragraph from '../atoms/Paragraph/Paragraph';

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
  background-color: transparent;
  background-position: center;

  ${({ theme }) => theme.mq.standard} {
    width: 70%;
    background-position: right center;
  }
`;

const StyledTitle = styled(Paragraph)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: Futura;
  font-weight: bold;
`;

const SliderContent = ({ image, content }) => {
  return (
    <StyledWrapper>
      <StyledBackgroundImage
        preserveStackingContext={true}
        fluid={image.childImageSharp.fluid}
      />
      <StyledTitle title='true'>{content.name}</StyledTitle>
    </StyledWrapper>
  );
};

export default SliderContent;
