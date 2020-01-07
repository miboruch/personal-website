import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CloseButton from '../../atoms/CloseButton/CloseButton';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import { animated } from 'react-spring';
import { AnimatedWrapper, AnimatedBox, BoxItems } from './skillsBoxAnimations';
import { skillsItems } from '../../../utils/items';

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
  min-height: 90%;
  background: #fff;
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;

  ${({ theme }) => theme.mq.standard} {
    flex-wrap: wrap;
  }
`;

const StyledContentSection = styled(animated.section)`
  width: 90%;
  padding: 1rem 2rem;
  transition: all 1s ease;
  cursor: default;

  &::before{
    content: '${({ value }) => value}';
    position: absolute;
    top: 100%;
    right: -60%;
    transform: translateY(-50%);
    left: auto;
    color: #fafafa;
    text-transform: uppercase;
    font-size: 80px;
    letter-spacing: 5px;
    z-index: -1;
    text-align: left;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: transparent;
    transition: all 1s ease;
    display: none;
    
    ${({ theme }) => theme.mq.standard}{
      display: block;
    }
  }
  
  &:hover::before{
    -webkit-text-stroke-color: #ccc;
  }

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
  letter-spacing: 0;
  font-size: 16px;

  ${({ theme }) => theme.mq.tablet} {
    font-size: 16px;
  }
`;

const SkillsBox = ({ isOpen, setBoxState }) => {
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
                  items={skillsItems}
                >
                  {trailItem => trailProps => (
                    <StyledContentSection
                      style={trailProps}
                      value={trailItem.name.split(',')[0]}
                    >
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

SkillsBox.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setBoxState: PropTypes.func.isRequired
};

export default SkillsBox;
