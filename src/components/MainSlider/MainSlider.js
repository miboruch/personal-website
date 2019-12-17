import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import SliderContent from '../SliderContent/SliderContent';
import SliderNavigation from '../molecules/SliderNavigation/SliderNavigation';

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

const MainSlider = ({ images, data }) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'cubic-bezier(.84, 0, .08, .99)'
  };

  return (
    <StyledWrapper>
      <StyledSlider {...settings}>
        {images.map((item, index) => (
          <SliderContent image={item} key={index} content={data[index]} />
        ))}
      </StyledSlider>
      <SliderNavigation next='Indeed' />
    </StyledWrapper>
  );
};

export default MainSlider;
