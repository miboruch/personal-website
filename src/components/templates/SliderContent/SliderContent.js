import React, { useContext, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { CurrentSlideContext } from '../../../providers/CurrentSlideContext';
import Div100vh from 'react-div-100vh';
import SlidePageTransitionProvider from '../../../providers/SlidePageTransitionProvider';
import {
  StyledWrapper,
  StyledImage,
  StyledContextBox,
  ContentWrapper,
  StyledTitleWrapper,
  StyledTitle,
  StyledDescription,
  StyledOpenCase,
  TextWrapper,
  StyledLine,
  OverflowBox,
  AllProjectOverflow,
  AllProjectCase
} from './SliderContent.styles';

const SliderContent = ({ image, content, index, isDarkTheme }) => {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const openProjectRef = useRef(null);
  const lineRef = useRef(null);
  const allProjectRef = useRef(null);

  const { currentSlide } = useContext(CurrentSlideContext);

  const [tl] = useState(gsap.timeline({ defaults: { ease: 'power3.inOut' } }));

  useEffect(() => {
    const title = titleRef.current;
    const description = descriptionRef.current;
    const openProject = openProjectRef.current;
    const allProject = allProjectRef.current;
    const line = lineRef.current;

    gsap.set([title, description, allProject, openProject], { autoAlpha: 0 });
    gsap.set([line], { width: 0 });

    tl.to(title, { autoAlpha: 1, duration: 1, delay: 1 })
      .to(line, { width: '100%', duration: 1.2 }, '-=0.4')
      .fromTo(
        description,
        { y: '+=10' },
        { y: '0', autoAlpha: 1, duration: 0.6 },
        '-=0.4'
      )
      .fromTo(
        allProject,
        { transform: 'matrix(0.99, 0.33, 0, 1, 0, 100)' },
        { transform: 'matrix(1,0,0,1,0,0)', autoAlpha: 1, duration: 1.5 },
        '-=0.8'
      )
      .fromTo(
        openProject,
        { transform: 'matrix(0.99, 0.33, 0, 1, 0, 100)' },
        { transform: 'matrix(1,0,0,1,0,0)', autoAlpha: 1, duration: 1.5 },
        '-=1.1'
      );
  }, []);

  useEffect(() => {
    currentSlide === index ? tl.play() : tl.delay(0).reverse();
  }, [currentSlide]);

  return (
    <Div100vh>
      <StyledWrapper isEven={currentSlide % 2 === 0}>
        {/*<StyledImage fluid={image.childImageSharp.fluid} />*/}
        <StyledContextBox isDarkTheme={isDarkTheme}>
          <ContentWrapper>
            <TextWrapper>
              <StyledTitleWrapper>
                <StyledTitle title='true' ref={titleRef}>
                  {content.name}
                </StyledTitle>
              </StyledTitleWrapper>
              <StyledDescription ref={descriptionRef}>
                {content.description}
              </StyledDescription>
              <OverflowBox>
                <SlidePageTransitionProvider
                  to={content.pageLink}
                  isDark={currentSlide % 2 === 0}
                >
                  <StyledOpenCase ref={openProjectRef}>
                    Open project
                  </StyledOpenCase>
                </SlidePageTransitionProvider>
              </OverflowBox>
            </TextWrapper>
            <AllProjectOverflow>
              <SlidePageTransitionProvider
                to='/projects'
                isDark={currentSlide % 2 === 0}
              >
                <AllProjectCase
                  small='true'
                  isDarkTheme={isDarkTheme}
                  ref={allProjectRef}
                >
                  all projects
                </AllProjectCase>
              </SlidePageTransitionProvider>
            </AllProjectOverflow>
          </ContentWrapper>
          <StyledLine isDarkTheme={isDarkTheme} ref={lineRef} />
        </StyledContextBox>
      </StyledWrapper>
    </Div100vh>
  );
};

export default SliderContent;
