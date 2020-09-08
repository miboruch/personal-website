import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import OpenCircle from '../../atoms/OpenCircle/OpenCircle';
import PageTransitionProvider from '../../../providers/PageTransitionProvider';
import {
  StyledWrapper,
  CircleWrapper,
  StyledImage,
  StyledLine,
  PhotoWrapper,
  ContentWrapper,
  OverflowBox,
  ImageWrapper,
  StyledTitle,
  StyledParagraph,
  MobileLink,
  Line
} from './ProjectIntro.styles';

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals('ScrollTrigger', ScrollTrigger);
}

const ProjectIntro = ({ data, image, reverse }) => {
  const wrapperRef = useRef(null);
  const headerRef = useRef(null);
  const descriptionRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const line = lineRef.current;
    gsap.set(line, { width: 0 });

    const tl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: wrapperRef.current,
        toggleActions: 'play complete pause reverse',
        start: 'top center',
        scrub: 1
      },
      defaults: { ease: 'power3.inOut' }
    });

    tl.to(line, { width: '100%', duration: 1 });
  }, []);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const header = headerRef.current;
    const description = descriptionRef.current;

    // gsap.set([wrapper, description], { autoAlpha: 0 });
    // gsap.set(wrapper, { x: '-=50' });
    gsap.set(wrapper, { y: '+=100' });

    const tl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: wrapper,
        toggleActions: 'play complete pause reverse',
        // start: 'top center',
        start: 'top bottom',
        scrub: 3
      },
      defaults: { ease: 'power3.inOut' }
    });

    tl.to(wrapper, { autoAlpha: 1, y: '0', x: '0', duration: 1.5 })
      .fromTo(
        header,
        { transform: 'matrix(0.99, 0.33, 0, 1, 0, 100)' },
        { transform: 'matrix(1,0,0,1,0,0)', duration: 1 },
        '-=0.5'
      )
      .to(description, { autoAlpha: 1, duration: 1.2 }, '-=0.4');
  }, []);

  // * TEST
  useEffect(() => {
    const header = headerRef.current;
    const description = descriptionRef.current;

    gsap.set([header, description], { y: '+=70' });
    gsap.set(description, { autoAlpha: 0 });

    const tl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: header,
        toggleActions: 'play complete pause reverse',
        // start: 'top center',
        start: 'bottom bottom',
        scrub: 4
      },
      defaults: { ease: 'power3.inOut' }
    });

    tl.fromTo(
      header,
      { transform: 'matrix(0.99, 0.33, 0, 1, 0, 100)' },
      { transform: 'matrix(1,0,0,1,0,0)', duration: 1 },
      '-=0.5'
    ).to(description, { y: '0', autoAlpha: 1, duration: 1.2 }, '-=0.4');
  }, []);

  return (
    <>
      <StyledWrapper ref={wrapperRef} reverse={reverse}>
        <PhotoWrapper>
          <PageTransitionProvider to={data.pageLink}>
            <StyledLine />
            <ImageWrapper>
              <StyledImage fluid={image.childImageSharp.fluid} />
            </ImageWrapper>
            <CircleWrapper>
              <OpenCircle />
            </CircleWrapper>
          </PageTransitionProvider>
        </PhotoWrapper>
        <ContentWrapper>
          <PageTransitionProvider to={data.pageLink}>
            <OverflowBox>
              <StyledTitle title='true' ref={headerRef}>
                {data.name}
              </StyledTitle>
            </OverflowBox>
          </PageTransitionProvider>
          <StyledParagraph small='true' ref={descriptionRef}>
            {data.primaryDescription}
          </StyledParagraph>
          <PageTransitionProvider to={data.pageLink}>
            <MobileLink>Open {data.name}</MobileLink>
          </PageTransitionProvider>
        </ContentWrapper>
      </StyledWrapper>
      <Line ref={lineRef} />
    </>
  );
};

export default ProjectIntro;
