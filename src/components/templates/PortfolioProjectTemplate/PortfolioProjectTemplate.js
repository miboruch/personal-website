import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectContentBox from '../../atoms/ProjectContentBox/ProjectContentBox';
import Image from '../../molecules/Image/Image';
import Footer from '../../molecules/Footer/Footer';
import {
  StyledWrapper,
  TextWrapper,
  StyledParagraph,
  OverflowBox,
  StyledTitle,
  ContentBox,
  OverflowDescriptionBox,
  Description,
  LinkWrapper,
  TechnologiesWrapper,
  TextLabel,
  StyledLink,
  LinkContentWrapper
} from './PortfolioProjectTemplate.styles';

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals('ScrollTrigger', ScrollTrigger);
}

const PortfolioProjectTemplate = ({ content, images }) => {
  const titleRef = useRef(null);
  const projectInfoRef = useRef(null);
  const projectDescriptionRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    const projectInfo = projectInfoRef.current;

    gsap.set(title, {
      transform: 'matrix(0.99, 0.33, 0, 1, 0, 100)'
    });

    gsap.set([...projectInfo.children], { autoAlpha: 0 });

    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

    tl.to(title, {
      transform: 'matrix(1,0,0,1,0,0)',
      duration: 2
    }).to(projectInfo.children, { autoAlpha: 1, stagger: 0.4 });
  }, []);

  useEffect(() => {
    const projectDescription = projectDescriptionRef.current;

    const tl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: projectDescription,
        toggleActions: 'play complete pause reverse',
        start: '-=200 center'
      },
      defaults: { ease: 'power3.inOut' }
    });

    gsap.set([...projectDescription.children], { autoAlpha: 0 });

    tl.to(projectDescription.children, { autoAlpha: 1, stagger: 0.4 });
  }, []);

  return (
    <StyledWrapper className={'transition-wrapper'}>
      {content && images && (
        <>
          <TextWrapper>
            <StyledParagraph>{content.date}</StyledParagraph>
            <OverflowBox>
              <StyledTitle ref={titleRef}>{content.name}</StyledTitle>
            </OverflowBox>
          </TextWrapper>
          <ContentBox ref={projectInfoRef}>
            <ProjectContentBox
              title='CATEGORY'
              description={content.category}
            />
            <ProjectContentBox
              title='STATUS'
              description={content.developStatus}
            />
            <ProjectContentBox title='DATE' description={content.date} />
            <ProjectContentBox
              title='TECHNOLOGIES'
              description={content.mainTechnology}
            />
          </ContentBox>
          <Image image={images && images[0].node} />
          <OverflowDescriptionBox>
            <div ref={projectDescriptionRef}>
              <Description>{content.primaryDescription}</Description>
              <TechnologiesWrapper>
                <TextLabel>Technologies</TextLabel>
                <Description>{content.secondaryDescription}</Description>
              </TechnologiesWrapper>
              <LinkWrapper>
                <LinkContentWrapper>
                  <TextLabel>Link - Live</TextLabel>
                  <StyledLink
                    href={content.link}
                    target='_blank'
                    rel='noreferrer'
                  >
                    {content.name}
                  </StyledLink>
                </LinkContentWrapper>
                <LinkContentWrapper>
                  <TextLabel>Link - Github</TextLabel>
                  <StyledLink
                    href={content.githubLink}
                    target='_blank'
                    rel='noreferrer'
                  >
                    {content.name} - github.com
                  </StyledLink>
                </LinkContentWrapper>
              </LinkWrapper>
            </div>
          </OverflowDescriptionBox>
          <Image image={images && images[1].node} />
          {images[2] && <Image image={images[2].node} />}
          <Footer />
        </>
      )}
    </StyledWrapper>
  );
};

export default PortfolioProjectTemplate;
