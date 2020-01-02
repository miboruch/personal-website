import React from 'react';
import styled from 'styled-components';
import Paragraph from '../Paragraph/Paragraph';

const StyledContentPiece = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;

  ${({ theme }) => theme.mq.standard} {
    width: 130px;
    border-right: 1px solid rgba(63, 63, 63, 0.2);
  }
`;

const StyledSmallHeading = styled(Paragraph)`
  color: #1b1b1b;
  font-family: ${({ theme }) => theme.font.family.avanti};
  font-weight: bold;
  letter-spacing: 2px;
  font-size: 13px;
  text-transform: uppercase;
`;

const StyledAnswerParagraph = styled(Paragraph)`
  font-size: 15px;
  letter-spacing: 0;
  color: #8d8d8d;
  padding-top: 1rem;
`;

const ProjectContentBox = ({ title, description }) => {
  return (
    <StyledContentPiece>
      <StyledSmallHeading>{title}</StyledSmallHeading>
      <StyledAnswerParagraph>{description}</StyledAnswerParagraph>
    </StyledContentPiece>
  );
};

export default ProjectContentBox;
