import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from '../../molecules/Footer/Footer';
import BackgroundImage from 'gatsby-background-image';
import Paragraph from '../../atoms/Paragraph/Paragraph';

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
  padding: 2rem;
  margin-top: 5rem;
`;

const StyledLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.2);
`;

const ContentWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

const StyledQuote = styled(Paragraph)`
  font-size: 20px;
  color: #fff;
  letter-spacing: 0;
`;

const StyledParagraph = styled(Paragraph)`
  font-size: 16px;
  color: #8d8d8d;
  letter-spacing: 0;
`;

const StyledName = styled(Paragraph)`
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
  padding-top: 1rem;
`;

const StyledSkillsOpen = styled(StyledName)`
  color: #000;
  padding-top: 2rem;
  text-align: center;
`;

const TextWrapper = styled(ContentWrapper)`
  width: 90%;
  text-align: left;
  padding: 4rem 2rem;
  line-height: 1.5;

  ${({ theme }) => theme.mq.standard} {
    width: 40%;
  }
`;

const StyledPortfolioImage = styled(StyledImage)`
  transition: all 1s ease;
  &:hover {
    background-blend-mode: normal;
  }
`;

const AboutTemplate = ({ images }) => {
  return (
    <StyledWrapper>
      <StyledImage fluid={images[1].childImageSharp.fluid}>
        <StyledTitle title>About me</StyledTitle>
        <StyledLine />
        <ContentWrapper>
          <StyledQuote>
            dawdasdawdasdawdasd ad awd sd wd d frf gt rw
          </StyledQuote>
        </ContentWrapper>
        <StyledName>Michal Boruch</StyledName>
      </StyledImage>
      <TextWrapper>
        <StyledParagraph>
          Hello, my name is Michal, I am 21 years old and I am aspiring junior
          web developer. I am a computer science student in University of
          Applied Sciences in Tarnow. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </StyledParagraph>
        <StyledSkillsOpen>Click here to see my owned skills</StyledSkillsOpen>
      </TextWrapper>
      <StyledPortfolioImage fluid={images[2].childImageSharp.fluid} />
      <Footer />
    </StyledWrapper>
  );
};

export default AboutTemplate;
