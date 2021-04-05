import React, { useEffect, useRef } from 'react';
import Div100vh from 'react-div-100vh';
import gsap from 'gsap';
import PageTransitionProvider from '../../../providers/PageTransitionProvider';
import { Footer } from 'src/components/index';
import {
  StyledWrapper,
  ContentWrapper,
  OverflowBox,
  StyledTitle,
  StyledSubtitle,
  StyledParagraph,
  FooterWrapper
} from './NotFoundPageTemplate.styles';

const NotFoundPageTemplate = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    const content = contentRef.current;

    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

    gsap.set([...content.children], { autoAlpha: 0 });

    tl.fromTo(
      content.children,
      { y: '-=30' },
      { y: '0', autoAlpha: 1, stagger: 0.3, duration: 1.6, delay: 1 }
    );
  }, []);

  return (
    <Div100vh>
      <StyledWrapper className={'transition-wrapper'}>
        <ContentWrapper ref={contentRef}>
          <StyledTitle title>Page not found</StyledTitle>
          <OverflowBox>
            <StyledSubtitle>404</StyledSubtitle>
          </OverflowBox>
          <PageTransitionProvider to='/'>
            <StyledParagraph>Go back</StyledParagraph>
          </PageTransitionProvider>
        </ContentWrapper>
        <FooterWrapper>
          <Footer />
        </FooterWrapper>
      </StyledWrapper>
    </Div100vh>
  );
};

export default NotFoundPageTemplate;
