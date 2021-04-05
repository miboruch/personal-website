import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

import ProjectIntro from '../ProjectIntro/ProjectIntro';
import ProjectNavigation from '../../molecules/ProjectNavigation/ProjectNavigation';
import { Footer } from 'src/components';
import { useScroll } from 'src/components/hooks/use-scroll.hook';

import {
  StyledWrapper,
  TextWrapper,
  StyledParagraph,
  OverflowBox,
  StyledTitle
} from './ProjectsTemplate.styles';

const ProjectsTemplate = ({ projectsData, images }) => {
  const titleRef = useRef(null);
  const { isOnTop } = useScroll();

  useEffect(() => {
    const title = titleRef.current;
    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

    gsap.set(title, {
      transform: 'matrix(0.99, 0.33, 0, 1, 0, 100)'
    });

    tl.to(title, {
      transform: 'matrix(1,0,0,1,0,0)',
      duration: 2
    });
  }, []);

  return (
    <StyledWrapper className={'transition-wrapper'}>
      <TextWrapper>
        <StyledParagraph>2019/20</StyledParagraph>
        <OverflowBox>
          <StyledTitle ref={titleRef}>Projects</StyledTitle>
        </OverflowBox>
      </TextWrapper>
      {projectsData.map((item, index) => (
        <ProjectIntro
          data={item}
          image={images[index]}
          key={index}
          reverse={index % 2 !== 0 ? 'true' : null}
        />
      ))}
      <ProjectNavigation isOnTop={isOnTop} />
      <Footer />
    </StyledWrapper>
  );
};

export default ProjectsTemplate;
