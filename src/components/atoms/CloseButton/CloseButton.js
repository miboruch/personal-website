import React from 'react';
import PropTypes from 'prop-types';
import { ButtonWrapper, InnerButton } from './CloseButton.styles';

const CloseButton = ({ setBoxState, lightTheme, contactPage = false }) => (
  <ButtonWrapper
    type='button'
    onClick={() => setBoxState(false)}
    contactPage={contactPage}
  >
    <InnerButton lightTheme={lightTheme} />
  </ButtonWrapper>
);

CloseButton.propTypes = {
  setBoxState: PropTypes.func.isRequired,
  lightTheme: PropTypes.bool,
  contactPage: PropTypes.bool
};

export default CloseButton;
