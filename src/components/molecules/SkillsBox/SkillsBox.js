import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { skillsItems } from '../../../utils/skills';
import {
  StyledWrapper,
  StyledContentSection,
  StyledSpan,
  StyledDescription,
  SkillDescription,
  ItemsWrapper,
  StyledHeading
} from './SkillsBox.styles';

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
