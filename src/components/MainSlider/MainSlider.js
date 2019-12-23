import React, { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Div100vh from 'react-div-100vh';
import SliderContent from '../SliderContent/SliderContent';
import SliderNavigation from '../molecules/SliderNavigation/SliderNavigation';
import SocialNavigation from '../molecules/SocialNavigation/SocialNavigation';
import Arrow from '../../assets/icons/arrow-right.svg';
import { CurrentSlideContext } from '../../providers/CurrentSlideContext';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: -1;
`;

const StyledSlider = styled(Slider)`
  width: 100%;
  height: 100vh;
  z-index: 0;
`;

const ArrowRight = styled(Arrow)`
  width: 60px;
  height: 30px;
  fill: #fff;
  margin: 0 1rem;
  cursor: pointer;
  transition: all 0.5s ease;

  ${({ theme }) => theme.mq.standard} {
    fill: #000;

    &:hover {
      transform: translateX(10px);
    }
  }
`;

const ArrowLeft = styled(ArrowRight)`
  transform: rotate(180deg);

  ${({ theme }) => theme.mq.standard} {
    &:hover {
      transform: translateX(-10px) rotate(180deg);
    }
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
      <Div100vh>
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
        <NavigationWrapper>
          <SocialNavigation toggleState={true} lightTheme={false} />
        </NavigationWrapper>
      </Div100vh>
    </StyledWrapper>
  );
};

export default MainSlider;
