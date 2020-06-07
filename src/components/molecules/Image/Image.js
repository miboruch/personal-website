import React from 'react';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';

const StyledImage = styled(GatsbyImage)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150%;
  transition: opacity 1s ease;

  ${({ theme }) => theme.mq.standard} {
    width: 120%;
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 100%;
  }
`;

const PhotoWrapper = styled.div`
  width: 100%;
  height: 300px;
  background-color: ${({ theme }) => theme.color.background};
  object-fit: cover;
  position: relative;
  overflow: hidden;

  ${({ theme }) => theme.mq.tablet} {
    height: 500px;
  }

  ${({ theme }) => theme.mq.standard} {
    height: 550px;
  }

  ${({ theme }) => theme.mq.desktop} {
    height: 650px;
  }
`;

const Image = ({ image, children }) => {
  return (
    <PhotoWrapper>
      <StyledImage fluid={image.childImageSharp.fluid} />
      {children}
    </PhotoWrapper>
  );
};

export default Image;
