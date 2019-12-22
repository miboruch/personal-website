import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Paragraph from '../atoms/Paragraph/Paragraph';

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

  ${({ theme }) => theme.mq.standard} {
    width: 350px;
    margin-left: 1rem;
  }
`;

const StyledSmallHeading = styled(Paragraph)`
  color: #1b1b1b;
  font-family: ${({ theme }) => theme.font.family.avanti};
  font-weight: bold;
  letter-spacing: 2px;
  font-size: 13px;
`;

const StyledAnswerParagraph = styled(Paragraph)`
  font-size: 15px;
  letter-spacing: 0;
  color: #8d8d8d;
  padding-top: 1rem;
`;

const StyledContentPiece = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
`;

const ProjectTemplate = ({ content, images }) => {
  return (
    <StyledWrapper>
      <TextWrapper>
        <StyledParagraph>October 2019</StyledParagraph>
        <StyledTitle>Indeed</StyledTitle>
      </TextWrapper>
      <ContentBox>
        <StyledContentPiece>
          <StyledSmallHeading>CATEGORY</StyledSmallHeading>
          <StyledAnswerParagraph>e-commerce</StyledAnswerParagraph>
        </StyledContentPiece>
        <StyledContentPiece>
          <StyledSmallHeading>TECHNOLOGIES</StyledSmallHeading>
          <StyledAnswerParagraph>React, Redux</StyledAnswerParagraph>
        </StyledContentPiece>
        <StyledContentPiece>
          <StyledSmallHeading>STATUS</StyledSmallHeading>
          <StyledAnswerParagraph>finished</StyledAnswerParagraph>
        </StyledContentPiece>
        <StyledContentPiece>
          <StyledSmallHeading>DATE</StyledSmallHeading>
          <StyledAnswerParagraph>October 2019</StyledAnswerParagraph>
        </StyledContentPiece>
      </ContentBox>
    </StyledWrapper>
  );
};

export default ProjectTemplate;
