import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Paragraph from '../atoms/Paragraph/Paragraph';
import ProjectContentBox from '../atoms/ProjectContentBox/ProjectContentBox';
import GatsbyImage from 'gatsby-image';

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const TextWrapper = styled.div`
  margin: 2rem;

  ${({ theme }) => theme.mq.standard} {
    margin: 3rem;
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

const Description = styled(Paragraph)`
  font-size: 16px;
  color: #8d8d8d;
  letter-spacing: 0;
  margin: 2rem;

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

const LinkLabel = styled(Paragraph)`
  font-weight: bold;
  font-size: 15px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #1b1b1b;
`;

const StyledLink = styled.a`
  color: #8d8d8d;
  font-size: 18px;
  letter-spacing: 1px;
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
      <PhotoWrapper>
        <StyledImage fluid={images[0].childImageSharp.fluid} />
      </PhotoWrapper>
      <Description>{content.primaryDescription}</Description>
      <PhotoWrapper>
        <StyledImage fluid={images[1].childImageSharp.fluid} />
      </PhotoWrapper>
      {images[2] ? (
        <PhotoWrapper>
          <StyledImage fluid={images[2].childImageSharp.fluid} />
        </PhotoWrapper>
      ) : null}
      <LinkWrapper>
        <LinkLabel>Link</LinkLabel>
        <StyledLink href={content.link} target='_blank' rel='noreferrer'>
          {content.category}
        </StyledLink>
      </LinkWrapper>
    </StyledWrapper>
  );
};

export default ProjectTemplate;
