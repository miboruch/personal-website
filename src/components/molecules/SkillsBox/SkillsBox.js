import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
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

const StyledContentSection = styled.section`
  width: 100%;
  cursor: default;
  padding-bottom: 3rem;

  &::before{
    content: '${({ value }) => value}';
    position: absolute;
    top: 90%;
    right: -20%;
    transform: translateY(-50%);
    left: auto;
    color: #ededed;
    text-transform: uppercase;
    font-size: 60px;
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
  font-size: 16px;
  color: #4d4d4d;
  font-weight: bold;
  padding-right: 2rem;
  position: relative;
  }

  ${({ theme }) => theme.mq.standard} {
    font-size: 16px;
  }
`;

const StyledDescription = styled(Paragraph)`
  color: #8d8d8d;
  text-align: left;
  letter-spacing: 0;
  font-size: 16px;
`;

const SkillDescription = styled.span`
  color: #5d5d5d;
  font-size: 13px;
  letter-spacing: 0;
  font-weight: 500;
  padding-top: 1.5rem;
`;

const ItemsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledHeading = styled.h2`
  font-family: ${({ theme }) => theme.font.family.futura};
  font-size: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #4d4d4d;
  font-weight: bold;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e3e3e3;
`;

const SkillsBox = () => {
  const skillsBoxRef = useRef(null);

  useEffect(() => {
    const skillsBox = skillsBoxRef.current;

    const tl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: skillsBox,
        toggleActions: 'play complete pause reverse',
        start: '-=100 center'
      },
      defaults: { ease: 'power3.inOut' }
    });

    gsap.set([...skillsBox.children], { autoAlpha: 0 });

    tl.fromTo(
      skillsBox.children,
      { x: '-=15', y: '+=20' },
      { x: '0', y: '0', autoAlpha: 1, stagger: 0.3 }
    );
  }, []);

  return (
    <StyledWrapper>
      <StyledHeading>Skills</StyledHeading>
      <ItemsWrapper ref={skillsBoxRef}>
        {skillsItems.map(skill => (
          <StyledContentSection
            value={skill.name.split(',')[0]}
            key={skill.name}
          >
            <StyledDescription>
              <StyledSpan>{skill.name}</StyledSpan>
              <br />
              {skill.description}
              <br />
              <SkillDescription>{skill.skills}</SkillDescription>
            </StyledDescription>
          </StyledContentSection>
        ))}
      </ItemsWrapper>
    </StyledWrapper>
  );
};

export default SkillsBox;
