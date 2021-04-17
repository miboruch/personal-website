import React from 'react';

import { Theme } from 'types';

import { ButtonWrapper, InnerButton } from './CloseButton.styles';

interface Props {
  handleClose: () => void;
  isContactPage?: boolean;
  theme?: Theme;
}

const CloseButton: React.FC<Props> = ({ handleClose, theme = 'light', isContactPage = false }) => (
  <ButtonWrapper type='button' onClick={handleClose} isContactPage={isContactPage}>
    <InnerButton theme={theme} />
  </ButtonWrapper>
);

export default CloseButton;
