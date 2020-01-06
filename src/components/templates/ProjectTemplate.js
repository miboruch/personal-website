import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Paragraph from '../atoms/Paragraph/Paragraph';
import ProjectContentBox from '../atoms/ProjectContentBox/ProjectContentBox';
import GatsbyImage from 'gatsby-image';
import Image from '../molecules/Image/Image';
import ProjectFooter from '../molecules/ProjectFooter/ProjectFooter';
import Footer from '../molecules/Footer/Footer';
import { animationIn } from '../../utils/animations';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';
import { easeExpOut } from 'd3-ease';
import ProjectIntro from './ProjectIntro/ProjectIntro';

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 70px;
  background-color: ${({ theme }) => theme.color.lightThemeBackground};
  margin: 0;
  overflow-y: hidden;
`;

const TextWrapper = styled.div`
  margin: 2rem;

  ${({ theme }) => theme.mq.standard} {
    margin: 3rem;
    //display: flex;
    //flex-direction: row;
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
`;

const ContentBox = styled.section`
  width: 80%;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  margin: 1rem 0;

  ${({ theme }) => theme.mq.standard} {
    //width: 350px;
    display: flex;
    flex-direction: row;
    margin-left: 1rem;
  }
`;

const OverflowDescriptionBox = styled(OverflowBox)`
  margin: 2rem;

  ${({ theme }) => theme.mq.standard} {
    width: 50%;
    margin: 3rem auto;
  }
`;

const Description = styled(Paragraph)`
  font-size: 16px;
  color: #8d8d8d;
  letter-spacing: 0;
  text-align: center;
`;

const LinkWrapper = styled.section`
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const TechnologiesWrapper = styled.section`
  width: 100%;
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TextLabel = styled(Paragraph)`
  font-weight: bold;
  font-size: 15px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #1b1b1b;
`;

const StyledLink = styled.a`
  color: #8d8d8d;
  font-size: 18px;
  padding: 1rem;
`;

const ProjectTemplate = ({ content, images }) => {
  const bottomSlide = animationIn(true, 1000, 1000, 0);

  return (
    <StyledWrapper>
      <TextWrapper>
        <StyledParagraph>{content.date}</StyledParagraph>
        <OverflowBox>
          <StyledTitle style={bottomSlide}>{content.name}</StyledTitle>
        </OverflowBox>
      </TextWrapper>
      <ContentBox>
        <ProjectContentBox title='CATEGORY' description={content.category} />
        <ProjectContentBox title='STATUS' description={content.developStatus} />
        <ProjectContentBox title='DATE' description={content.date} />
        <ProjectContentBox
          title='TECHNOLOGIES'
          description={content.mainTechnology}
        />
      </ContentBox>
      <Image image={images[0]} />
      <OverflowDescriptionBox>
        <Controller>
          <Scene offset={250} triggerHook={0} duration={1} reverse={false}>
            {(progress, event) => {
              console.log(event);
              return (
                <Tween
                  from={{
                    opacity: 0,
                    transform: 'matrix(0.99, 0.1, 0, 1, 0, 100)',
                    ease: easeExpOut
                  }}
                  to={{
                    opacity: 1,
                    transform: 'matrix(1,0,0,1,0,0)',
                    ease: easeExpOut
                  }}
                  paused={true}
                  playState={
                    event.type === 'enter' &&
                    event.scrollDirection === 'FORWARD'
                      ? 'play'
                      : null
                  }
                >
                  <div>
                    <Description>{content.primaryDescription}</Description>
                  </div>
                </Tween>
              );
            }}
          </Scene>
        </Controller>
      </OverflowDescriptionBox>
      <TechnologiesWrapper>
        <TextLabel>Technologies</TextLabel>
        <Description>{content.secondaryDescription}</Description>
      </TechnologiesWrapper>
      <LinkWrapper>
        <TextLabel>Link</TextLabel>
        <StyledLink href={content.link} target='_blank' rel='noreferrer'>
          {content.name}
        </StyledLink>
      </LinkWrapper>
      <Image image={images[1]} />
      {images[2] ? <Image image={images[2]} /> : null}
      <Footer />
    </StyledWrapper>
  );
};

export default ProjectTemplate;
