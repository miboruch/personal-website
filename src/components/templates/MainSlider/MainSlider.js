import React, { useContext, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import SliderContent from '../SliderContent/SliderContent';
import SliderNavigation from '../../molecules/SliderNavigation/SliderNavigation';
import SocialNavigation from '../../molecules/SocialNavigation/SocialNavigation';
import { CurrentSlideContext } from '../../../providers/CurrentSlideContext';
import SliderBoxInfo from '../../molecules/SliderBoxInfo/SliderBoxInfo';
import {
  StyledWrapper,
  StyledSlider,
  ArrowLeft,
  StandardArrowWrapper,
  ArrowWrapper,
  ArrowRightWrapper,
  ArrowLeftStandard,
  ArrowRightStandard,
  ArrowRight,
  NavigationWrapper,
  StyledProjectSmallNavigation,
  StyledParagraph
} from './MainSlider.styles';

const MainSlider = ({ images, data }) => {
  const sliderRef = useRef();
  const navigationRef = useRef(null);
  const arrowWrapperRef = useRef(null);
  const { currentSlide, setSlide } = useContext(CurrentSlideContext);
  const [isDarkTheme, setDarkTheme] = useState(currentSlide % 2 !== 0);

  useEffect(() => {
    setDarkTheme(currentSlide % 2 !== 0);
  }, [currentSlide]);

  useEffect(() => {
    const navigation = navigationRef.current;
    const arrowWrapper = arrowWrapperRef.current;
    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

    gsap.set([...navigation.children, ...arrowWrapper.children], {
      autoAlpha: 0
    });

    tl.fromTo(
      navigation.children,
      { y: '+=20' },
      { y: '0', autoAlpha: 1, duration: 1.2, stagger: 0.3, delay: 1.2 }
    ).fromTo(
      arrowWrapper.children,
      { y: '+=30' },
      { autoAlpha: 1, y: '0', stagger: 0.3, duration: 1 },
      '-=1.5'
    );
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'cubic-bezier(.84, 0, .08, .99)',
    beforeChange: (oldIndex, nextSlide) => setSlide(nextSlide),
    afterChange: current => setSlide(current)
  };

  return (
    <StyledWrapper>
      <StyledSlider
        {...settings}
        ref={sliderRef}
        className={'transition-wrapper'}
      >
        {images.map((item, index) => (
          <SliderContent
            image={item}
            key={index}
            content={data[index]}
            index={index}
            isDarkTheme={isDarkTheme}
          />
        ))}
      </StyledSlider>
      <StandardArrowWrapper ref={arrowWrapperRef}>
        <ArrowWrapper isDarkTheme={isDarkTheme}>
          <ArrowLeftStandard
            onClick={() => sliderRef.current.slickPrev()}
            isDarkTheme={isDarkTheme}
          />
        </ArrowWrapper>
        <ArrowRightWrapper isDarkTheme={isDarkTheme}>
          <ArrowRightStandard
            onClick={() => sliderRef.current.slickNext()}
            isDarkTheme={isDarkTheme}
          />
        </ArrowRightWrapper>
      </StandardArrowWrapper>
      <StyledProjectSmallNavigation ref={navigationRef}>
        {data.map((item, index) => (
          <StyledParagraph
            key={index}
            isDarkTheme={isDarkTheme}
            isCurrent={currentSlide === index}
            onClick={() => sliderRef.current.slickGoTo(item.index)}
          >
            {item.name}
          </StyledParagraph>
        ))}
      </StyledProjectSmallNavigation>
      <SliderNavigation
        next={data[currentSlide].next}
        isDarkTheme={isDarkTheme}
      >
        <ArrowLeft
          onClick={() => sliderRef.current.slickPrev()}
          isDarkTheme={isDarkTheme}
        />
        <ArrowRight
          onClick={() => sliderRef.current.slickNext()}
          isDarkTheme={isDarkTheme}
        />
      </SliderNavigation>
      <SliderBoxInfo
        nextProjectName={data[currentSlide].next}
        allProjectsLength={data.length}
        isDarkTheme={isDarkTheme}
      />
      <NavigationWrapper>
        <SocialNavigation
          lightTheme={false}
          noPadding
          isDarkTheme={isDarkTheme}
        />
      </NavigationWrapper>
    </StyledWrapper>
  );
};

export default MainSlider;
