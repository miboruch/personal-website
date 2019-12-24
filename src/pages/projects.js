import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import { Scene, Controller } from 'react-scrollmagic';
import { Tween } from 'react-gsap';
import Layout from '../components/templates/Layout';
import SEO from '../components/seo';
import { convertObjectToArray } from '../utils/functions';
import ProjectIntro from '../components/ProjectIntro/ProjectIntro';
import Paragraph from '../components/atoms/Paragraph/Paragraph';
import Footer from '../components/molecules/Footer/Footer';
import { easeQuadIn } from 'd3-ease';

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 70px;
  // background-color: ${({ theme }) => theme.color.lightThemeBackground};
  background-color: #fff;
  margin: 0;
  overflow-y: hidden;
`;

const TextWrapper = styled.div`
  margin: 3rem;
`;

const StyledParagraph = styled(Paragraph)`
  font-size: 10px;
  color: #1b1b1b;
  letter-spacing: 3px;
  padding-bottom: 1rem;
`;

const StyledTitle = styled(Paragraph)`
  font-size: 34px !important;
  font-family: ${({ theme }) => theme.font.family.avanti};
  color: #1b1b1b;
`;

const Projects = ({ data }) => {
  const imageArray = convertObjectToArray(
    data.image1,
    data.image2,
    data.image3
  );
  const { projects } = data.projectData;

  return (
    <Layout headerTheme='dark'>
      <SEO title='Projects' />
      <StyledWrapper>
        <TextWrapper>
          <StyledParagraph>2019/20</StyledParagraph>
          <StyledTitle>Projects</StyledTitle>
        </TextWrapper>
        <Controller>
          {projects.map((item, index) => (
            <Scene triggerHook={0} duration={500} offset={-860} key={index}>
              <Tween
                from={{
                  opacity: 0,
                  ease: easeQuadIn
                }}
                to={{ opacity: 1, ease: easeQuadIn }}
              >
                <div>
                  <ProjectIntro
                    data={item}
                    image={imageArray[index]}
                    key={index}
                    reverse={index % 2 !== 0 ? 'true' : null}
                  />
                </div>
              </Tween>
            </Scene>
          ))}
        </Controller>
        <Footer />
      </StyledWrapper>
    </Layout>
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
    image1: file(name: { regex: "/indeed-main-mobile/" }) {
      ...photoFragment
    }
    image2: file(name: { regex: "/archicept-mobile/" }) {
      ...photoFragment
    }
    image3: file(name: { regex: "/weather-mobile/" }) {
      ...photoFragment
    }
    projectData: portfolio {
      projects {
        name
        primaryDescription
      }
    }
  }
`;

export default Projects;
