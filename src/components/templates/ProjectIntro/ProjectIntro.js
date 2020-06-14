import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GatsbyImage from 'gatsby-image';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import OpenCircle from '../../atoms/OpenCircle/OpenCircle';
import PageTransitionProvider from '../../../providers/PageTransitionProvider';

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals('ScrollTrigger', ScrollTrigger);
}

const StyledWrapper = styled.section`
  border-top: 1px solid rgba(141, 141, 141, 0.25);

  ${({ theme }) => theme.mq.standard} {
    display: flex;
    flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
    justify-content: center;
    align-items: center;
    height: 450px;
    margin-top: 50px;
  }

  ${({ theme }) => theme.mq.desktop} {
    margin-top: 70px;
    height: 550px;
  }
`;

const CircleWrapper = styled.div`
  display: none;

  ${({ theme }) => theme.mq.standard} {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 1s ease;
  }
`;

const StyledImage = styled(GatsbyImage)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150%;

  ${({ theme }) => theme.mq.standard} {
    width: 120%;
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 100%;
  }
`;

const StyledLine = styled.div`
  width: 0;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.2);
  position: absolute;
  top: 50%;
  left: 0;
  transition: width 1s ease;
`;

const PhotoWrapper = styled.div`
  width: 100%;
  height: 300px;
  background-color: ${({ theme }) => theme.color.background};
  object-fit: cover;
  position: relative;
  overflow: hidden;

  ${({ theme }) => theme.mq.tablet} {
    height: 500px;
  }

  ${({ theme }) => theme.mq.standard} {
    height: 100%;

    &:hover ${CircleWrapper} {
      opacity: 1;
    }

    &:hover ${StyledImage} {
      opacity: 0.25;
    }

    &:hover ${StyledLine} {
      width: 100%;
    }
  }
`;

const ContentWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  margin-bottom: 2rem;

  ${({ theme }) => theme.mq.tablet} {
    width: 70%;
  }

  ${({ theme }) => theme.mq.standard} {
    margin: 0 4rem;
    width: 50%;
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 30%;
    padding: 0 4rem;
  }
`;

const OverflowBox = styled.div`
  overflow: hidden;
  margin: 3rem 0;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const StyledTitle = styled(Paragraph)`
  font-size: 34px !important;
  font-family: ${({ theme }) => theme.font.family.avanti};
  color: #1b1b1b;
`;

const StyledParagraph = styled(Paragraph)`
  font-size: 16px;
  color: #8d8d8d;
  letter-spacing: 0;
`;

const MobileLink = styled(Paragraph)`
  color: #000;
  font-family: ${({ theme }) => theme.font.family.avanti};
  font-weight: bold;
  letter-spacing: 2px;
  display: block;
  margin-top: 3rem;

  ${({ theme }) => theme.mq.standard} {
    display: none;
  }
`;

const Line = styled.div`
  width: 0;
  height: 1px;
  background-color: #8d8d8d;
`;

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

    gsap.set([wrapper, description], { autoAlpha: 0 });
    gsap.set(wrapper, { x: '-=50' });

    const tl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: wrapper,
        toggleActions: 'play complete pause reverse',
        start: 'top center'
      },
      defaults: { ease: 'power3.inOut' }
    });

    tl.to(wrapper, { autoAlpha: 1, x: '0', duration: 1.5 })
      .fromTo(
        header,
        { transform: 'matrix(0.99, 0.33, 0, 1, 0, 100)' },
        { transform: 'matrix(1,0,0,1,0,0)', duration: 1 },
        '-=0.5'
      )
      .to(description, { autoAlpha: 1, duration: 1.2 }, '-=0.4');
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
