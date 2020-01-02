import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const ButtonWrapper = styled.button`
  cursor: pointer;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  position: absolute;
  top: 1rem;
  right: 1rem;
  margin: 0 0.5rem;

  :focus {
    outline: none;
  }
`;

const InnerButton = styled.div`
  position: relative;

  ::before,
  ::after {
    content: '';
    width: ${({ lightTheme }) => (lightTheme ? '18px' : '24px')};
    height: 1px;
    background: ${({ lightTheme }) => (lightTheme ? '#fff' : '#000')};
    position: absolute;
    left: 0;
    transition: all 0.5s ease;
    top: 0;
  }

  ::before {
    transform: rotate(40deg);
  }
  ::after {
    transform: rotate(-40deg);
  }
`;

const CloseButton = ({ setBoxState, lightTheme }) => {
  return (
    <ButtonWrapper type='button' onClick={() => setBoxState(false)}>
      <InnerButton lightTheme={lightTheme} />
    </ButtonWrapper>
  );
};

export default CloseButton;
