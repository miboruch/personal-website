import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledContentPiece,
  StyledSmallHeading,
  StyledAnswerParagraph
} from './ProjectContentBox.styles';

const ProjectContentBox = ({ title, description }) => (
  <StyledContentPiece>
    <StyledSmallHeading>{title}</StyledSmallHeading>
    <StyledAnswerParagraph>{description}</StyledAnswerParagraph>
  </StyledContentPiece>
);

ProjectContentBox.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default ProjectContentBox;
