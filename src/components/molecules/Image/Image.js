import React from 'react';
import { StyledImage, PhotoWrapper } from './Image.styles';

const Image = ({ image, children }) => (
  <PhotoWrapper>
    <StyledImage fluid={image.childImageSharp.fluid} />
    {children}
  </PhotoWrapper>
);

export default Image;
