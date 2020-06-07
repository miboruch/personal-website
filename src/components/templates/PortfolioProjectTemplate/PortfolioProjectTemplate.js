import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';
import { easeExpOut } from 'd3-ease';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import ProjectContentBox from '../../atoms/ProjectContentBox/ProjectContentBox';
import Image from '../../molecules/Image/Image';
import Footer from '../../molecules/Footer/Footer';

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
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  margin: 1rem 0;

  ${({ theme }) => theme.mq.standard} {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-right: 3rem;
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
  padding-bottom: 1rem;
`;

const LinkContentWrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const PortfolioProjectTemplate = ({ content, images }) => {
  const titleRef = useRef(null);
  const projectInfoRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    const projectInfo = projectInfoRef.current;

    gsap.set(title, {
      transform: 'matrix(0.99, 0.33, 0, 1, 0, 100)'
    });

    gsap.set([...projectInfo.children], { autoAlpha: 0 });

    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

    tl.to(title, {
      transform: 'matrix(1,0,0,1,0,0)',
      duration: 2
    }).to(projectInfo.children, { autoAlpha: 1, stagger: 0.4 });
  }, []);

  return (
    <StyledWrapper className={'transition-wrapper'}>
      {content && images && (
        <>
          <TextWrapper>
            <StyledParagraph>{content.date}</StyledParagraph>
            <OverflowBox>
              <StyledTitle ref={titleRef}>{content.name}</StyledTitle>
            </OverflowBox>
          </TextWrapper>
          <ContentBox ref={projectInfoRef}>
            <ProjectContentBox
              title='CATEGORY'
              description={content.category}
            />
            <ProjectContentBox
              title='STATUS'
              description={content.developStatus}
            />
            <ProjectContentBox title='DATE' description={content.date} />
            <ProjectContentBox
              title='TECHNOLOGIES'
              description={content.mainTechnology}
            />
          </ContentBox>
          <Image image={images && images[0].node} />
          <OverflowDescriptionBox>
            <Controller>
              <Scene offset={250} triggerHook={0} duration={1}>
                {(progress, event) => {
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
                          : event.type === 'enter' &&
                            event.scrollDirection === 'REVERSE'
                          ? 'reverse'
                          : null
                      }
                    >
                      <div>
                        <Description>{content.primaryDescription}</Description>
                        <TechnologiesWrapper>
                          <TextLabel>Technologies</TextLabel>
                          <Description>
                            {content.secondaryDescription}
                          </Description>
                        </TechnologiesWrapper>
                        <LinkWrapper>
                          <LinkContentWrapper>
                            <TextLabel>Link - Live</TextLabel>
                            <StyledLink
                              href={content.link}
                              target='_blank'
                              rel='noreferrer'
                            >
                              {content.name}
                            </StyledLink>
                          </LinkContentWrapper>
                          <LinkContentWrapper>
                            <TextLabel>Link - Github</TextLabel>
                            <StyledLink
                              href={content.githubLink}
                              target='_blank'
                              rel='noreferrer'
                            >
                              {content.name} - github.com
                            </StyledLink>
                          </LinkContentWrapper>
                        </LinkWrapper>
                      </div>
                    </Tween>
                  );
                }}
              </Scene>
            </Controller>
          </OverflowDescriptionBox>
          <Image image={images && images[1].node} />
          {images[2] && <Image image={images[2].node} />}
          <Footer />
        </>
      )}
    </StyledWrapper>
  );
};

export default PortfolioProjectTemplate;
