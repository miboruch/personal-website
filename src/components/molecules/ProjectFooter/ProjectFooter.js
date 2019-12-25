import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

const StyledFooter = styled.footer`
  width: 100%;
  height: 150px;
  position: relative;
  overflow: hidden;
  background: #1d1d1d;
`;

const StyledBackgroundImage = styled(BackgroundImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 300px;
  filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
  background-color: transparent;
  background-position: center;

  ${({ theme }) => theme.mq.standard} {
    background-position: left;
  }
`;

const ProjectFooter = ({ image }) => {
  return (
    <StyledFooter>
      {/*<StyledBackgroundImage fluid={image.childImageSharp.fluid}>*/}
      {/*  dasdawdasdw*/}
      {/*</StyledBackgroundImage>*/}
    </StyledFooter>
  );
};

export default ProjectFooter;
