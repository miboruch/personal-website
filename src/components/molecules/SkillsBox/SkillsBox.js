import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import CloseButton from '../../atoms/CloseButton/CloseButton';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import { skillsItems } from '../../../utils/skills';

const StyledWrapper = styled.div`
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
  color: #2d2d2d;
`;

const HeaderParagraph = styled(Paragraph)`
  margin: 0;
  color: #2d2d2d;
  font-weight: bold;

  ${({ theme }) => theme.mq.standard} {
    font-weight: bold;
    font-size: 42px;
  }
`;

const StyledBox = styled.div`
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

const StyledContentSection = styled.section`
  width: 90%;
  padding: 1rem 2rem;
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

const ItemsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SkillsBox = ({ isOpen, setBoxState }) => {
  const wrapperRef = useRef(null);
  const wrapperBox = useRef(null);
  const itemsRef = useRef(null);
  const [tl] = useState(gsap.timeline({ defaults: { ease: 'power3.inOut' } }));

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const box = wrapperBox.current;
    const items = itemsRef.current;

    gsap.set([wrapper, box], { autoAlpha: 0 });
    gsap.set([...items.children], { autoAlpha: 0 });

    tl.to(wrapper, { autoAlpha: 1, duration: 0.5 })
      .fromTo(box, { y: '+=50' }, { y: '0', autoAlpha: 1, duration: 0.7 })
      .fromTo(
        items.children,
        { y: '+=30' },
        { y: '0', autoAlpha: 1, duration: 1, stagger: 0.2 }
      );
  }, []);

  useEffect(() => {
    isOpen ? tl.play() : tl.reverse();
  }, [isOpen]);

  return (
    <StyledWrapper ref={wrapperRef}>
      <StyledBox ref={wrapperBox}>
        <HeaderParagraph>Skills:</HeaderParagraph>
        <ItemsWrapper ref={itemsRef}>
          {skillsItems.map(skill => (
            <StyledContentSection
              value={skill.name.split(',')[0]}
              key={skill.name}
            >
              <StyledDescription>
                <StyledSpan>{skill.name}</StyledSpan>
                {skill.description}
              </StyledDescription>
            </StyledContentSection>
          ))}
        </ItemsWrapper>
        <CloseButton setBoxState={setBoxState} />
      </StyledBox>
    </StyledWrapper>
  );
};

SkillsBox.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setBoxState: PropTypes.func.isRequired
};

export default SkillsBox;
