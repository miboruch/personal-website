import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import Div100vh from 'react-div-100vh';
import Layout from '../components/templates/Layout';
import SEO from '../components/seo';
import Paragraph from '../components/atoms/Paragraph/Paragraph';
import Footer from '../components/molecules/Footer/Footer';
import PageTransitionProvider from '../providers/PageTransitionProvider';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.lightThemeBackground};
  position: relative;
`;

const ContentWrapper = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const OverflowBox = styled.div`
  overflow: hidden;
`;

const StyledTitle = styled(Paragraph)`
  color: #1b1b1b;
`;

const StyledSubtitle = styled(StyledTitle)`
  font-size: 40px;
`;

const StyledParagraph = styled(Paragraph)`
  margin-top: 2rem;
  color: #1b1b1b;
  letter-spacing: 0;
`;

const FooterWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const NotFoundPage = () => {
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
    <Layout headerTheme='dark'>
      <SEO title='Not found' />
      <Div100vh>
        <StyledWrapper>
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
    </Layout>
  );
};

export default NotFoundPage;
