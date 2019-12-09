import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import SliderContent from '../SliderContent/SliderContent';

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.color.background};
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
    autoplaySpeed: 2500,
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
    </StyledWrapper>
  );
};

export default MainSlider;
