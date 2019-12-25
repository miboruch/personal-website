import React from 'react';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import OpenCircle from '../../atoms/OpenCircle/OpenCircle';
import { Link } from 'gatsby';
import Image from '../../molecules/Image/Image';

const StyledWrapper = styled.section`
  border-top: 1px solid rgba(141, 141, 141, 0.25);
  border-bottom: 1px solid rgba(141, 141, 141, 0.25);

  ${({ theme }) => theme.mq.standard} {
    display: flex;
    flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
    justify-content: center;
    align-items: center;
    height: 450px;
    margin-top: 50px;
  }

  ${({ theme }) => theme.mq.desktop} {
    margin-top: 70px;
    height: 550px;
  }
`;

const CircleWrapper = styled.div`
  display: none;

  ${({ theme }) => theme.mq.standard} {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 1s ease;
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

const StyledLine = styled.div`
  width: 0;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.2);
  position: absolute;
  top: 50%;
  left: 0;
  transition: width 1s ease;
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
    height: 100%;

    &:hover ${CircleWrapper} {
      opacity: 1;
    }

    &:hover ${StyledImage} {
      opacity: 0.25;
    }

    &:hover ${StyledLine} {
      width: 100%;
    }
  }
`;

const ContentWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  margin-bottom: 2rem;

  ${({ theme }) => theme.mq.tablet} {
    width: 70%;
  }

  ${({ theme }) => theme.mq.standard} {
    margin: 0 4rem;
    width: 50%;
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 30%;
    padding: 0 4rem;
  }
`;

const StyledTitle = styled(Paragraph)`
  font-size: 34px !important;
  font-family: ${({ theme }) => theme.font.family.avanti};
  color: #1b1b1b;
  margin: 3rem 0;
`;

const StyledParagraph = styled(Paragraph)`
  font-size: 16px;
  color: #8d8d8d;
  letter-spacing: 0;
`;

const StyledLink = styled(Link)`
  border-radius: 50%;
`;

const MobileLink = styled(Link)`
  color: #000;
  font-family: ${({ theme }) => theme.font.family.avanti};
  letter-spacing: 2px;
  display: block;
  margin-top: 3rem;

  ${({ theme }) => theme.mq.standard} {
    display: none;
  }
`;

const ProjectIntro = ({ data, image, reverse }) => {
  return (
    <StyledWrapper reverse={reverse}>
      <PhotoWrapper>
        <StyledLine />
        <StyledImage fluid={image.childImageSharp.fluid} />
        <StyledLink to={data.pageLink}>
          <CircleWrapper>
            <OpenCircle />
          </CircleWrapper>
        </StyledLink>
      </PhotoWrapper>
      <ContentWrapper>
        <StyledTitle title='true'>{data.name}</StyledTitle>
        <StyledParagraph small='true'>
          {data.primaryDescription}
        </StyledParagraph>
        <MobileLink to={data.pageLink}>
          Open project, link to another page here
        </MobileLink>
      </ContentWrapper>
    </StyledWrapper>
  );
};

export default ProjectIntro;
