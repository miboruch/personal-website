import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Div100vh from 'react-div-100vh';
import Layout from '../components/templates/Layout';
import GatsbyImage from 'gatsby-image';
import SEO from '../components/seo';
import { animated } from 'react-spring';
import Footer from '../components/molecules/Footer/Footer';
import { createFade, createUpperFadeOut } from '../utils/animations';
import SlidersAccents from '../components/molecules/SlidersAccents/SlidersAccents';
import OpenCircle from '../components/atoms/OpenCircle/OpenCircle';
import Paragraph from '../components/atoms/Paragraph/Paragraph';
import SocialNavigation from '../components/molecules/SocialNavigation/SocialNavigation';

const StyledWrapper = styled.div`
  background: #1b1b1b;
  width: 100%;
  min-height: 100%;
`;

const StyledImage = styled(GatsbyImage)`
  z-index: 2;
`;

const CircleWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 70%;
  transform: translate(-50%, -50%);
`;

const StyledLine = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  position: absolute;
  top: 50%;
  left: 0;
  z-index: 0;
  transform: translateY(-50%);
  display: none;

  ${({ theme }) => theme.mq.standard} {
    display: block;
  }
`;

const ContentWrapper = styled.div`
  margin: auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

const StyledMainText = styled(Paragraph)`
  font-size: 43px;
  font-family: ${({ theme }) => theme.font.family.avanti};
  padding-bottom: 2rem;
`;

const StyledContentBox = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const StyledContent = styled.div`
  width: 50%;
  padding-top: 2rem;
  padding-right: 2rem;
`;

const StyledContentTitle = styled(Paragraph)`
  font-weight: bold;
  font-size: 13px;
  text-transform: uppercase;
  padding: 1rem 0;
`;

const StyledParagraph = styled(Paragraph)`
  font-size: 15px;
`;

const FooterWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const NavigationWrapper = styled.div`
  width: 70%;
  margin-top: 2rem;
`;

const ContactPage = ({ data: { image } }) => {
  const socialLinks = [
    {
      name: 'github',
      value: 'miboruch'
    },
    {
      name: 'email',
      value: 'miboruch@gmail.com'
    }
    // {
    //   name: 'phone',
    //   value: '+48 743 023 482'
    // }
  ];
  // const fade = createFade(true, 1000, 1000);
  return (
    /* Three themes to choose from: light, dark, default.
    To have default, don't pass any props to Layout component  */
    <Div100vh>
      <Layout headerTheme='light'>
        <StyledWrapper>
          <StyledImage fluid={image.childImageSharp.fluid} />
          <ContentWrapper>
            <StyledMainText>Contact</StyledMainText>
            <StyledParagraph>
              Feel free to send me a message. Use any of my social media
              profiles, or click here to open form
            </StyledParagraph>
            <StyledContentBox>
              {socialLinks.map((item, index) => (
                <StyledContent key={index}>
                  <StyledContentTitle>{item.name}</StyledContentTitle>
                  <StyledParagraph>{item.value}</StyledParagraph>
                </StyledContent>
              ))}
            </StyledContentBox>
          </ContentWrapper>
          <NavigationWrapper>
            <SocialNavigation toggleState={true} />
          </NavigationWrapper>
          <FooterWrapper>
            <Footer footerTheme='light' />
          </FooterWrapper>
          <CircleWrapper>
            <OpenCircle text='github' />
          </CircleWrapper>
          <StyledLine />
        </StyledWrapper>
      </Layout>
    </Div100vh>
  );
};

export const photoFragment = graphql`
  fragment photoFragment on File {
    childImageSharp {
      fluid(maxWidth: 1500, quality: 100) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
`;

export const query = graphql`
  query {
    image: file(name: { regex: "/about/" }) {
      ...photoFragment
    }
  }
`;

export default ContactPage;
