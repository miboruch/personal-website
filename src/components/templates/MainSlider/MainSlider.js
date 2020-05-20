import React, { useContext, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import gsap from 'gsap';
import Slider from 'react-slick';
import SliderContent from '../SliderContent/SliderContent';
import SliderNavigation from '../../molecules/SliderNavigation/SliderNavigation';
import SocialNavigation from '../../molecules/SocialNavigation/SocialNavigation';
import Arrow from '../../../assets/icons/arrow.svg';
import { CurrentSlideContext } from '../../../providers/CurrentSlideContext';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import SliderBoxInfo from '../../molecules/SliderBoxInfo/SliderBoxInfo';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 10;
`;

const StyledSlider = styled(Slider)`
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const ArrowLeft = styled(Arrow)`
  width: 60px;
  height: 60px;
  border: ${({ isDarkTheme }) =>
    isDarkTheme
      ? '1px solid rgba(0, 0, 0, 0.5)'
      : '1px solid rgba(255, 255, 255, 0.2)'};
  border-radius: 50%;
  fill: ${({ isDarkTheme }) => (isDarkTheme ? '#222' : '#fff')};
  margin: 0 1rem;
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.5s ease;

  ${({ theme }) => theme.mq.tablet} {
    padding: 0.3rem;
  }

  ${({ theme }) => theme.mq.standard} {
    display: none;
  }
`;

const StandardArrowWrapper = styled.div`
  position: absolute;
  justify-content: flex-end;
  align-items: center;
  width: 200px;
  height: 70px;
  display: none;
  bottom: 200px;

  ${({ theme }) => theme.mq.standard} {
    display: flex;
    right: 166px;
  }
`;

const ArrowWrapper = styled.div`
  display: none;
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center;
  border: ${({ isDarkTheme }) =>
    isDarkTheme
      ? '1px solid rgba(34, 34, 34, 0.6)'
      : '1px solid rgba(231, 229, 225, 0.4)'};
  border-radius: 50%;
  cursor: pointer;

  ${({ theme }) => theme.mq.standard} {
    display: flex;
  }

  &:hover {
    transform: translateX(-10px);
  }
`;

const ArrowRightWrapper = styled(ArrowWrapper)`
  margin-left: 2rem;

  &:hover {
    transform: translateX(10px);
  }
`;

const ArrowLeftStandard = styled(Arrow)`
  padding: 1rem;
  display: none;
  border: none;
  fill: ${({ isDarkTheme }) => (isDarkTheme ? '#222' : '#e7e5e1')};

  ${({ theme }) => theme.mq.standard} {
    display: block;
  }
`;

const ArrowRightStandard = styled(ArrowLeftStandard)`
  transform: rotate(180deg);
`;

const ArrowRight = styled(ArrowLeft)`
  transform: rotate(180deg);
`;

const NavigationWrapper = styled.div`
  display: none;
  position: absolute;
  bottom: 2rem;
  right: 2rem;

  ${({ theme }) => theme.mq.standard} {
    display: block;
  }
`;

const VerticalBox = styled.div`
  display: none;

  ${({ theme }) => theme.mq.standard} {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 320px;
    height: 100%;
    background: transparent;
    border-left: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 1s ease;
    -webkit-box-shadow: -11px 10px 19px 3px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -11px 10px 19px 3px rgba(0, 0, 0, 0.75);
    box-shadow: -11px 10px 19px 3px rgba(0, 0, 0, 0.75);
  }
`;

const StyledProjectSmallNavigation = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  justify-content: flex-end;
  flex-direction: row;
  display: none;
  transform: translateX(-50%);

  ${({ theme }) => theme.mq.standard} {
    display: flex;
  }
`;

const StyledParagraph = styled(Paragraph)`
  text-align: right;
  cursor: pointer;
  position: relative;
  margin: 0 1rem;
  letter-spacing: 0;
  color: #878787;

  ${({ isCurrent }) =>
    isCurrent &&
    css`
      color: ${({ isDarkTheme }) => (isDarkTheme ? '#000' : '#fff')};
    `}

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 50%;
    width: 25px;
    height: 1px;
    transform: translateX(-50%);
    background-color: #878787;
    transition: background-color 1s ease;

    ${({ isCurrent }) =>
      isCurrent &&
      css`
        background-color: ${({ isDarkTheme }) =>
          isDarkTheme ? '#000' : '#fff'};
      `}
  }
`;

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
      { y: '0', autoAlpha: 1, duration: 2, stagger: 0.3, delay: 1.6 }
    ).fromTo(
      arrowWrapper.children,
      { y: '+=30' },
      { autoAlpha: 1, y: '0', stagger: 0.3, duration: 1 },
      '-=1'
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
      <VerticalBox />
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
      {/*Mobile*/}
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
