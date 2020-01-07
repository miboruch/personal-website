import React, { useState } from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import { Scene, Controller } from 'react-scrollmagic';
import { Tween } from 'react-gsap';
import Layout from '../components/templates/Layout';
import SEO from '../components/seo';
import { convertObjectToArray } from '../utils/functions';
import ProjectIntro from '../components/templates/ProjectIntro/ProjectIntro';
import Paragraph from '../components/atoms/Paragraph/Paragraph';
import Footer from '../components/molecules/Footer/Footer';
import { easeExpOut } from 'd3-ease';
import { useScrollPosition } from '../utils/customHooks';
import ProjectNavigation from '../components/molecules/ProjectNavigation/ProjectNavigation';
import { animationIn } from '../utils/animations';

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 70px;
  background-color: ${({ theme }) => theme.color.lightThemeBackground};
  margin: 0;
  overflow-y: hidden;
`;

const TextWrapper = styled.div`
  margin: 3rem;

  ${({ theme }) => theme.mq.standard} {
    display: flex;
    flex-direction: row;
  }
`;

const StyledParagraph = styled(Paragraph)`
  font-size: 10px;
  color: #1b1b1b;
  letter-spacing: 3px;
  padding-bottom: 1rem;
`;

const OverflowBox = styled.div`
  overflow: hidden;
`;

const StyledTitle = styled(Paragraph)`
  font-size: 34px !important;
  font-family: ${({ theme }) => theme.font.family.avanti};
  color: #1b1b1b;

  ${({ theme }) => theme.mq.standard} {
    padding: 0 4rem;
  }
`;

const Projects = ({ data }) => {
  const isOnTop = useScrollPosition();
  const imageArray = convertObjectToArray(
    data.image1,
    data.image2,
    data.image3
  );
  const { projects } = data.projectData;
  const bottomSlide = animationIn(true, 1000, 1000, 0);

  return (
    <Layout headerTheme='dark'>
      <SEO title='Projects' />
      <StyledWrapper>
        <TextWrapper>
          <StyledParagraph>2019/20</StyledParagraph>
          <OverflowBox>
            <StyledTitle style={bottomSlide}>Projects</StyledTitle>
          </OverflowBox>
        </TextWrapper>
        <ProjectNavigation isOnTop={isOnTop} />
        <Controller>
          {projects.map((item, index) => (
            <Scene
              key={index}
              offset={index === 0 ? -170 : -400}
              triggerHook={0}
              reverse={true}
              duration={1}
            >
              {(progress, event) => {
                return (
                  <div>
                    <Tween
                      from={{
                        opacity: 0,
                        x: '50px',
                        ease: easeExpOut
                      }}
                      to={{ opacity: 1, x: 0, ease: easeExpOut }}
                      paused={true}
                      playState={
                        event.type === 'enter' &&
                        event.scrollDirection === 'FORWARD'
                          ? 'play'
                          : event.type === 'enter' &&
                            event.scrollDirection === 'REVERSE'
                          ? 'reverse'
                          : null
                      }
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
                  </div>
                );
              }}
            </Scene>
          ))}
        </Controller>
        <Footer />
      </StyledWrapper>
    </Layout>
  );
};

export const query = graphql`
  query {
    image1: file(name: { regex: "/indeed-main-mobile/" }) {
      ...mockUpFragment
    }
    image2: file(name: { regex: "/archicept-mobile/" }) {
      ...mockUpFragment
    }
    image3: file(name: { regex: "/weather-mobile/" }) {
      ...mockUpFragment
    }
    projectData: portfolio {
      projects {
        name
        primaryDescription
        pageLink
      }
    }
  }
`;

export default Projects;
