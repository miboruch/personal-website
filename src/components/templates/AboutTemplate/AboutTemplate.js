import React, { useState } from 'react';
import styled from 'styled-components';
import SocialNavigation from '../../molecules/SocialNavigation/SocialNavigation';
import Footer from '../../molecules/Footer/Footer';
import OpenCircle from '../../atoms/OpenCircle/OpenCircle';
import ContactForm from '../ContactForm/ContactForm';
import BackgroundImage from 'gatsby-background-image';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import { mediaItems } from '../../../utils/items';

const StyledWrapper = styled.div`
  background: #fff;
  width: 100%;
  height: 100%;
  position: relative;
`;

const StyledImage = styled(BackgroundImage)`
  z-index: 2;
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #3d3d3d;
  background-blend-mode: overlay;
`;

const StyledTitle = styled(Paragraph)`
  font-family: ${({ theme }) => theme.font.family.avanti};
`;

const StyledLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.2);
`;

const AboutTemplate = ({ image }) => {
  return (
    <StyledWrapper>
      <StyledImage fluid={image.childImageSharp.fluid}>
        <StyledTitle title>About me</StyledTitle>
        <StyledLine />
      </StyledImage>
    </StyledWrapper>
  );
};

export default AboutTemplate;
