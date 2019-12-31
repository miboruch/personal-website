import React from 'react';
import styled from 'styled-components';
import CloseButton from '../../atoms/CloseButton/CloseButton';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import { createFade, createUpperFadeOut } from '../../../utils/animations';
import { animated } from 'react-spring';
import { AnimatedWrapper, AnimatedBox, BoxItems } from './skillsBoxAnimations';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const StyledWrapper = styled(animated.div)`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1500;
  position: fixed;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  opacity: 0;
  visibility: hidden;
`;

const HeaderParagraph = styled(Paragraph)`
  margin: 0;
  color: #000;
`;

const StyledBox = styled(animated.div)`
  width: 90%;
  height: 90%;
  background: #fff;
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;

  ${({ theme }) => theme.mq.tabletS} {
    height: 80%;
  }

  ${({ theme }) => theme.mq.standard} {
    flex-wrap: wrap;
  }
`;

const StyledContentSection = styled(animated.section)`
  width: 90%;
  padding: 1rem 2rem;
  transition: all 1s ease;

  ${({ theme }) => theme.mq.standard} {
    width: 45%;
  }
`;

const StyledSpan = styled.span`
  font-size: 18px;
  color: #4d4d4d;
  font-weight: lighter;
  padding-right: 2rem;
  position: relative;
  transition: all 1s ease;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -15px;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: transparent;
    transition: background 1s ease;
    border: 1px solid #000;

    ${StyledContentSection}:hover & {
      background: #000;
    }
  }

  ${({ theme }) => theme.mq.standard} {
    font-size: 24px;
  }
`;

const StyledDescription = styled(Paragraph)`
  color: #8d8d8d;
  text-align: left;
`;

const SkillsBox = ({ isOpen, setBoxState }) => {
  const stack = [
    {
      name: 'HTML, CSS, SCSS',
      description:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },
    {
      name: 'JavaScript',
      description:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },
    {
      name: 'React',
      description:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },
    {
      name: 'Gatsby.js',
      description:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },
    {
      name: 'NodeJS, Express',
      description:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    }
  ];

  return (
    <AnimatedWrapper state={isOpen ? 'in' : 'out'}>
      {wrapperProps => (
        <StyledWrapper style={wrapperProps}>
          <AnimatedBox state={isOpen ? 'in' : 'out'}>
            {props => (
              <StyledBox style={props}>
                <HeaderParagraph>Skills:</HeaderParagraph>
                <BoxItems
                  keys={item => item.name}
                  state={isOpen ? 'in' : 'out'}
                  reverse={!isOpen}
                  items={stack}
                >
                  {trailItem => trailProps => (
                    <StyledContentSection style={trailProps}>
                      <StyledDescription>
                        <StyledSpan>{trailItem.name}</StyledSpan>
                        {trailItem.description}
                      </StyledDescription>
                    </StyledContentSection>
                  )}
                </BoxItems>
                <CloseButton setBoxState={setBoxState} />
              </StyledBox>
            )}
          </AnimatedBox>
        </StyledWrapper>
      )}
    </AnimatedWrapper>
  );
};

export default SkillsBox;
