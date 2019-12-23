import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Paragraph from '../atoms/Paragraph/Paragraph';
import ProjectContentBox from '../atoms/ProjectContentBox/ProjectContentBox';

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

const ProjectTemplate = ({ content, images }) => {
  return (
    <StyledWrapper>
      <TextWrapper>
        <StyledParagraph>October 2019</StyledParagraph>
        <StyledTitle>Indeed</StyledTitle>
      </TextWrapper>
      <ContentBox>
        <ProjectContentBox title='CATEGORY' description='e-commerce' />
        <ProjectContentBox title='TECHNOLOGIES' description='React, Redux' />
        <ProjectContentBox title='STATUS' description='finished' />
        <ProjectContentBox title='DATE' description='October 2019' />
      </ContentBox>
    </StyledWrapper>
  );
};

export default ProjectTemplate;
