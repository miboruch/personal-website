import React from 'react';
import styled from 'styled-components';
import Div100vh from 'react-div-100vh';
import { Link } from 'gatsby';
import Layout from '../components/templates/Layout';
import SEO from '../components/seo';
import Paragraph from '../components/atoms/Paragraph/Paragraph';
import Footer from '../components/molecules/Footer/Footer';
import { animationIn, createFade } from '../utils/animations';

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
  const fadeIn = createFade(true, 1500, 2000, 0);
  const fadeInDelayed = createFade(true, 1500, 3000, 0);
  const bottomSlide = animationIn(true, 1500, 1000, 0);

  return (
    <Layout headerTheme='dark'>
      <SEO title='404: Not found' />
      <Div100vh>
        <StyledWrapper>
          <ContentWrapper>
            <StyledTitle style={fadeIn} title>
              Page not found
            </StyledTitle>
            <OverflowBox>
              <StyledSubtitle style={bottomSlide}>404</StyledSubtitle>
            </OverflowBox>
            <Link to='/'>
              <StyledParagraph style={fadeInDelayed} large>
                Go back
              </StyledParagraph>
            </Link>
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
