import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import CloseButton from '../../atoms/CloseButton/CloseButton';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import { skillsItems } from '../../../utils/skills';

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #2d2d2d;
  margin: 3rem 0;
`;

const HeaderParagraph = styled(Paragraph)`
  margin-bottom: 2rem;
  color: #2d2d2d;
  font-weight: bold;
  font-size: 32px;
  border-top: 1px solid #2d2d2d;
  padding-top: 1rem;

  ${({ theme }) => theme.mq.standard} {
    font-weight: bold;
    font-size: 42px;
  }
`;

const StyledContentSection = styled.section`
  width: 100%;
  cursor: default;
  padding: 1rem 0;

  &::before{
    content: '${({ value }) => value}';
    position: absolute;
    top: 100%;
    right: -30%;
    transform: translateY(-50%);
    left: auto;
    color: #fcfcfc;
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
`;

const StyledSpan = styled.span`
  font-size: 18px;
  color: #4d4d4d;
  font-weight: bold;
  padding-right: 2rem;
  position: relative;
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

const SkillDescription = styled(Paragraph)`
  color: #5d5d5d;
  font-size: 13px;
  letter-spacing: 0;
  font-weight: 500;
  padding-top: 0.3rem;
  padding-left: 3rem;
`;

const ItemsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SkillsBox = () => {
  const itemsRef = useRef(null);
  const [tl] = useState(gsap.timeline({ defaults: { ease: 'power3.inOut' } }));

  useEffect(() => {
    const items = itemsRef.current;

    gsap.set([...items.children], { autoAlpha: 0 });

    tl.fromTo(
      items.children,
      { y: '+=30' },
      { y: '0', autoAlpha: 1, duration: 1, stagger: 0.2 }
    );
  }, []);

  return (
    <StyledWrapper>
      <HeaderParagraph>Skills</HeaderParagraph>
      <ItemsWrapper ref={itemsRef}>
        {skillsItems.map(skill => (
          <StyledContentSection
            value={skill.name.split(',')[0]}
            key={skill.name}
          >
            <StyledDescription>
              <StyledSpan>{skill.name}</StyledSpan>
              {skill.description}
              <SkillDescription>{skill.skills}</SkillDescription>
            </StyledDescription>
          </StyledContentSection>
        ))}
      </ItemsWrapper>
    </StyledWrapper>
  );
};

export default SkillsBox;
