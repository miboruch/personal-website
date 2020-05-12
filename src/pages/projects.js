import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
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
import { animationIn } from '../utils/animations';
import ScrollIcon from '../assets/icons/next.svg';

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

const MiddleInfoBox = styled.div`
  position: absolute;
  top: 400px;
  left: 50%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: translate(-50%);
  display: flex;
  visibility: ${({ isOnTop }) => (isOnTop ? 'visible' : 'hidden')};
  opacity: ${({ isOnTop }) => (isOnTop ? 1 : 0)};
  transition: visibility 1s ease, opacity 1s ease;
`;

const StyledOverflowBox = styled.div`
  overflow: hidden;
`;

const StyledScrollInfo = styled(Paragraph)`
  color: rgba(63, 63, 63, 0.4);
`;

const StyledIcon = styled(ScrollIcon)`
  transform: rotate(90deg);
  width: 30px;
  height: 30px;
  fill: rgba(63, 63, 63, 0.4);
`;

const Projects = ({ data }) => {
  const isOnTop = useScrollPosition();
  const imageArray = convertObjectToArray(
    data.image4,
    data.image1,
    data.image5,
    data.image2,
    data.image3
  );
  const { projects } = data.projectData;
  const bottomSlide = animationIn(true, 1000, 1000, 0);
  const bottomSlideDelayed = animationIn(isOnTop, 1000, 1200, 0);

  return (
    <Layout headerTheme='dark'>
      <SEO title='Projects' />
      <StyledWrapper>
        <MiddleInfoBox isOnTop={isOnTop}>
          <StyledOverflowBox>
            <StyledScrollInfo style={bottomSlideDelayed}>
              scroll down
            </StyledScrollInfo>
          </StyledOverflowBox>
          <StyledIcon />
        </MiddleInfoBox>
        <TextWrapper>
          <StyledParagraph>2019/20</StyledParagraph>
          <OverflowBox>
            <StyledTitle style={bottomSlide}>Projects</StyledTitle>
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
    image1: file(name: { regex: "/indeed-main-mobile/" }) {
      ...mockUpFragment
    }
    image2: file(name: { regex: "/archicept-mobile/" }) {
      ...mockUpFragment
    }
    image3: file(name: { regex: "/weather-mobile/" }) {
      ...mockUpFragment
    }
    image4: file(name: { regex: "/buyit-main/" }) {
      ...mockUpFragment
    }
    image5: file(name: { regex: "/wallpapers-mobile/" }) {
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
