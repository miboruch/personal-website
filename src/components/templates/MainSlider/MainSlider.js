import React, { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import SliderContent from '../SliderContent/SliderContent';
import SliderNavigation from '../../molecules/SliderNavigation/SliderNavigation';
import SocialNavigation from '../../molecules/SocialNavigation/SocialNavigation';
import Arrow from '../../../assets/icons/arrow.svg';
import { CurrentSlideContext } from '../../../providers/CurrentSlideContext';
import TransitionLink from 'gatsby-plugin-transition-link';
import { Transition } from 'react-spring/renderprops-universal';

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
  height: 30px;
  fill: #000;
  margin: 0 1rem;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.5s ease;

  ${({ theme }) => theme.mq.standard} {
    fill: #fff;

    width: 90px;
    height: 90px;
    position: absolute;
    top: 50%;
    left: 100px;
    transform: translate(-50%, -50%);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;

    //&:hover {
    //  transform: translateX(-10px);
    //}
  }
`;

const ArrowRight = styled(ArrowLeft)`
  transform: rotate(180deg);

  ${({ theme }) => theme.mq.standard} {
    transform: translate(-50%, -50%) rotate(180deg);
    right: 100px;
    left: auto;
    //&:hover {
    //  transform: translateX(10px) rotate(180deg);
    //}
  }
`;

const NavigationWrapper = styled.div`
  display: none;
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  padding: 0 2rem;

  ${({ theme }) => theme.mq.standard} {
    display: block;
  }
`;

const MainSlider = ({ images, data }) => {
  const sliderRef = useRef();
  const { currentSlide, setSlide } = useContext(CurrentSlideContext);

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
      <StyledSlider {...settings} ref={sliderRef}>
        {images.map((item, index) => (
          <SliderContent
            image={item}
            key={index}
            content={data[index]}
            index={index}
          />
        ))}
      </StyledSlider>
      <SliderNavigation next={data[currentSlide].next}>
        <ArrowLeft onClick={() => sliderRef.current.slickPrev()} />
        <ArrowRight onClick={() => sliderRef.current.slickNext()} />
      </SliderNavigation>
      {/*<ArrowLeft onClick={() => sliderRef.current.slickPrev()} />*/}
      {/*<ArrowRight onClick={() => sliderRef.current.slickNext()} />*/}
      <NavigationWrapper>
        <SocialNavigation toggleState={true} lightTheme={false} />
      </NavigationWrapper>
    </StyledWrapper>
  );
};

export default MainSlider;
