import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import gsap from 'gsap';
import { Scene, Controller } from 'react-scrollmagic';
import { Tween } from 'react-gsap';
import { easeExpInOut } from 'd3-ease';
import Layout from '../components/templates/Layout';
import SEO from '../components/seo';
import { convertObjectToArray } from '../utils/functions';
import ProjectIntro from '../components/templates/ProjectIntro/ProjectIntro';
import Paragraph from '../components/atoms/Paragraph/Paragraph';
import Footer from '../components/molecules/Footer/Footer';
import { useScrollPosition } from '../utils/customHooks';
import ProjectNavigation from '../components/molecules/ProjectNavigation/ProjectNavigation';

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 70px;
  background-color: ${({ theme }) => theme.color.lightThemeBackground};
  margin: 0;
  overflow-y: hidden;
  position: relative;
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
    data.image0,
    data.image1,
    data.image2,
    data.image3,
    data.image4,
    data.image5
  );
  const { projects } = data.projectData;

  const titleRef = useRef(null);

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
    <Layout headerTheme='dark'>
      <SEO title='Projects' />
      <StyledWrapper className={'transition-wrapper'}>
        <TextWrapper>
          <StyledParagraph>2019/20</StyledParagraph>
          <OverflowBox>
            <StyledTitle ref={titleRef}>Projects</StyledTitle>
          </OverflowBox>
        </TextWrapper>
        <Controller>
          {projects.map((item, index) => (
            <Scene
              key={index}
              offset={index === 0 ? -200 : -440}
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
                        visibility: 'hidden',
                        y: '50px',
                        ease: easeExpInOut
                      }}
                      to={{
                        opacity: 1,
                        y: 0,
                        visibility: 'visible',
                        ease: easeExpInOut
                      }}
                      paused={index !== 0}
                      playState={
                        index === 0
                          ? null
                          : event.type === 'enter' &&
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
        <ProjectNavigation isOnTop={isOnTop} />
        <Footer />
      </StyledWrapper>
    </Layout>
  );
};

export const query = graphql`
  query {
    image0: file(name: { regex: "/grades-main/" }) {
      ...mockUpFragment
    }
    image1: file(name: { regex: "/chat-main/" }) {
      ...mockUpFragment
    }
    image2: file(name: { regex: "/buyit-main/" }) {
      ...mockUpFragment
    }
    image3: file(name: { regex: "/indeed-main-mobile/" }) {
      ...mockUpFragment
    }
    image4: file(name: { regex: "/wallpapers-mobile/" }) {
      ...mockUpFragment
    }
    image5: file(name: { regex: "/weather-mobile/" }) {
      ...mockUpFragment
    }
    projectData: portfolio {
      projects(orderBy: index_ASC) {
        name
        primaryDescription
        pageLink
      }
    }
  }
`;

export default Projects;
