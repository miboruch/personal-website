import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  position: absolute;
  color: #fff;
  top: 2rem;
  left: 110px;
  width: 20px;
  height: 20px;
  background: ${({ lightTheme }) =>
    lightTheme ? 'rgba(255,255,255,0.3)' : 'transparent'};
  border: 1px solid #fff;
  border-radius: 50%;
  transition: all 0.5s ease;

  &:focus {
    outline: none;
  }
`;

const ThemeButton = ({ lightTheme, changeTheme }) => (
  <StyledButton lightTheme={lightTheme} onClick={() => changeTheme()} />
);

ThemeButton.propTypes = {
  lightTheme: PropTypes.bool.isRequired
};

export default ThemeButton;
