import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Paragraph from '../atoms/Paragraph/Paragraph';
import { easeExpOut, easeExpInOut } from 'd3-ease';
import { Keyframes } from 'react-spring/renderprops-universal';
import { useSpring, config, animated } from 'react-spring';

const StyledMenuBox = styled(animated.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: calc(100% - 10px);
  height: calc(100vh - 10px);
  display: flex;
  background-color: ${({ theme }) => theme.color.menuBox};
  z-index: 899;
  opacity: 1;
  box-sizing: content-box !important;
`;

const AnimatedParagraph = styled(animated(Paragraph))``;

const AnimatedMenu = Keyframes.Spring({
  in: async next => {
    await next({
      transform: 'translate(0, 0) scale(1,1)',
      config: {
        duration: 3000,
        easing: easeExpInOut
      }
    });
    await next({
      border: '5px solid #fff',
      config: {
        duration: 100
      }
    });
  },
  out: async next => {
    await next({
      border: '0px solid #fff',
      config: {
        duration: 300
      }
    });
    await next({
      transform: 'translate(87%, -78%) scale(0.3, 0.08)',
      config: {
        duration: 3000,
        easing: easeExpInOut
      }
    });
  }
});

const Menu = ({ isOpen }) => {
  const setVisible = useSpring({
    to: { opacity: isOpen ? 1 : 0 },
    config: {
      duration: 1000
    },
    easing: 'cubic-bezier(.84, 0, .08, .99)'
  });

  return (
    <AnimatedMenu state={isOpen ? 'in' : 'out'}>
      {props => (
        <StyledMenuBox style={props}>
          <AnimatedParagraph props={setVisible}>hello boy</AnimatedParagraph>
        </StyledMenuBox>
      )}
    </AnimatedMenu>
  );
};

export default Menu;
/*
<StyledMenuBox>
      <StyledPseudoMenu isOpen={isOpen}>
        <AnimatedParagraph props={setVisible}>hello boy</AnimatedParagraph>
      </StyledPseudoMenu>
    </StyledMenuBox>
*/
