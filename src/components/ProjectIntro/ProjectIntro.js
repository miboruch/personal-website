import React from 'react';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';
import Paragraph from '../atoms/Paragraph/Paragraph';

const StyledWrapper = styled.section`
  border-top: 1px solid rgba(141, 141, 141, 0.25);
  padding: 4rem 2rem;
`;

const StyledImage = styled(GatsbyImage)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150%;
`;

const PhotoWrapper = styled.div`
  width: 100%;
  height: 300px;
  background-color: ${({ theme }) => theme.color.background};
  object-fit: cover;
  position: relative;
  overflow: hidden;
`;

const StyledTitle = styled(Paragraph)`
  font-size: 34px !important;
  font-family: ${({ theme }) => theme.font.family.avanti};
  color: #1b1b1b;
  margin: 3rem 0;
`;

const StyledParagraph = styled(Paragraph)`
  font-size: 16px;
  color: #7d7d7d;
  letter-spacing: 0;
`;

const ProjectIntro = ({ data, image }) => {
  return (
    <StyledWrapper>
      <PhotoWrapper>
        <StyledImage fluid={image.childImageSharp.fluid} />
      </PhotoWrapper>
      <StyledTitle title='true'>{data.name}</StyledTitle>
      <StyledParagraph small='true'>{data.primaryDescription}</StyledParagraph>
    </StyledWrapper>
  );
};

export default ProjectIntro;
