import React, { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import SliderContent from '../SliderContent/SliderContent';
import SliderNavigation from '../molecules/SliderNavigation/SliderNavigation';
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
  width: 50px;
  height: 30px;
  fill: #fff;
  margin: 0 1rem;
`;

const ArrowLeft = styled(ArrowRight)`
  transform: rotate(180deg);
`;

const MainSlider = ({ images, data }) => {
  const sliderRef = useRef();
  const { currentSlide, setSlide, setOldSlide } = useContext(CurrentSlideContext);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    // autoplaySpeed: 7000,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'cubic-bezier(.84, 0, .08, .99)',
    // beforeChange: oldIndex => setOldSlide(oldIndex),
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
    </StyledWrapper>
  );
};

export default MainSlider;
