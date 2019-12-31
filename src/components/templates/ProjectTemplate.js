import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Paragraph from '../atoms/Paragraph/Paragraph';
import ProjectContentBox from '../atoms/ProjectContentBox/ProjectContentBox';
import GatsbyImage from 'gatsby-image';
import Image from '../molecules/Image/Image';
import ProjectFooter from '../molecules/ProjectFooter/ProjectFooter';
import Footer from '../molecules/Footer/Footer';

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 70px;
  background-color: ${({ theme }) => theme.color.lightThemeBackground};
  margin: 0;
  overflow-y: hidden;
`;

const TextWrapper = styled.div`
  margin: 2rem;

  ${({ theme }) => theme.mq.standard} {
    margin: 3rem;
    //display: flex;
    //flex-direction: row;
  }
`;

const StyledParagraph = styled(Paragraph)`
  font-size: 10px;
  color: #1b1b1b;
  letter-spacing: 3px;
  padding-bottom: 1rem;
`;

const StyledTitle = styled(Paragraph)`
  font-size: 34px !important;
  font-family: ${({ theme }) => theme.font.family.avanti};
  color: #1b1b1b;
  
  // ${({ theme }) => theme.mq.standard} {
  //   padding: 0 4rem;
  // }
`;

const ContentBox = styled.section`
  width: 80%;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  margin: 1rem 0;

  ${({ theme }) => theme.mq.standard} {
    width: 350px;
    margin-left: 1rem;
  }
`;

const Description = styled(Paragraph)`
  font-size: 16px;
  color: #8d8d8d;
  letter-spacing: 0;
  margin: 2rem;
  text-align: center;

  ${({ theme }) => theme.mq.standard} {
    width: 50%;
    margin: 3rem auto;
  }
`;

const LinkWrapper = styled.section`
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const TechnologiesWrapper = styled.section`
  width: 100%;
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TextLabel = styled(Paragraph)`
  font-weight: bold;
  font-size: 15px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #1b1b1b;
`;

const StyledLink = styled.a`
  color: #8d8d8d;
  font-size: 18px;
  padding: 1rem;
`;

const ProjectTemplate = ({ content, images }) => {
  return (
    <StyledWrapper>
      <TextWrapper>
        <StyledParagraph>{content.date}</StyledParagraph>
        <StyledTitle>{content.name}</StyledTitle>
      </TextWrapper>
      <ContentBox>
        <ProjectContentBox title='CATEGORY' description={content.category} />
        <ProjectContentBox
          title='TECHNOLOGIES'
          description={content.mainTechnology}
        />
        <ProjectContentBox title='STATUS' description={content.developStatus} />
        <ProjectContentBox title='DATE' description={content.date} />
      </ContentBox>
      <Image image={images[0]} />
      <Description>{content.primaryDescription}</Description>
      <TechnologiesWrapper>
        <TextLabel>Technologies</TextLabel>
        <Description>{content.secondaryDescription}</Description>
      </TechnologiesWrapper>
      <LinkWrapper>
        <TextLabel>Link</TextLabel>
        <StyledLink href={content.link} target='_blank' rel='noreferrer'>
          {content.name}
        </StyledLink>
      </LinkWrapper>
      <Image image={images[1]} />
      {images[2] ? <Image image={images[2]} /> : null}
      <Footer />
    </StyledWrapper>
  );
};

export default ProjectTemplate;
