import React from 'react';
import styled from 'styled-components';
import Paragraph from '../atoms/Paragraph/Paragraph';

const StyledMenuBox = styled.div`
  position: absolute;
  top: 2px;
  right: 2px;
  width: 215px;
  height: 62px;
  background-color: ${({ theme }) => theme.color.menuBox};
  display: flex;
  align-items: center;
  z-index: 899;
`;

const StyledParagraph = styled(Paragraph)`
  text-transform: uppercase;
  justify-content: flex-start;
  width: 50%;
  padding: 5px;
  text-align: right;
`;

const Menu = () => {
  return (
    <StyledMenuBox>
      <StyledParagraph small>web design & code</StyledParagraph>
    </StyledMenuBox>
  );
};

export default Menu;
