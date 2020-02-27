import React, { useContext, useRef } from 'react';
import styled from 'styled-components';
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
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  fill: #fff;
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

const LeftArrowWrapper = styled.div`
  display: none;
  position: absolute;
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center;
  top: 50%;
  transform: translateY(-50%);
  right: 150px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  cursor: pointer;
  transition: border 1s ease;

  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.8);
  }

  &::before {
    content: 'PREVIOUS';
    position: absolute;
    left: -100%;
    font-size: 11px;
    letter-spacing: 3px;
    color: #fff;
  }

  ${({ theme }) => theme.mq.standard} {
    display: flex;
  }
`;

const RightArrowWrapper = styled(LeftArrowWrapper)`
  right: 10px;

  &::before {
    content: '';
  }

  &::after {
    content: 'NEXT';
    position: absolute;
    right: 100%;
    font-size: 11px;
    letter-spacing: 3px;
    color: #fff;
  }
`;

const ArrowLeftStandard = styled(Arrow)`
  padding: 1rem;
  display: none;
  border: none;
  fill: #fff;

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
  right: -10px;

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
    right: 0;
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
  transition: all 1s ease;
  position: relative;
  margin: 0 1rem;
  letter-spacing: 0;

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: 50%;
    width: 10px;
    height: 10px;
    border: 1px solid #fff;
    border-radius: 50%;
    transform: translateX(-50%);
    background-color: ${({ isCurrent }) =>
      isCurrent ? 'white' : 'transparent'};
    transition: background-color 1s ease;
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
      <VerticalBox />
      <LeftArrowWrapper>
        <ArrowLeftStandard onClick={() => sliderRef.current.slickPrev()} />
      </LeftArrowWrapper>
      <RightArrowWrapper>
        <ArrowRightStandard onClick={() => sliderRef.current.slickNext()} />
      </RightArrowWrapper>
      <StyledProjectSmallNavigation>
        {data.map((item, index) => (
          <StyledParagraph
            key={index}
            isCurrent={currentSlide === index}
            onClick={() => sliderRef.current.slickGoTo(item.index)}
          >
            {item.name}
          </StyledParagraph>
        ))}
      </StyledProjectSmallNavigation>
      <SliderNavigation next={data[currentSlide].next}>
        <ArrowLeft onClick={() => sliderRef.current.slickPrev()} />
        <ArrowRight onClick={() => sliderRef.current.slickNext()} />
      </SliderNavigation>
      <SliderBoxInfo
        nextProjectName={data[currentSlide].next}
        allProjectsLength={data.length}
      />
      <NavigationWrapper>
        <SocialNavigation toggleState={true} lightTheme={false} noPadding />
      </NavigationWrapper>
    </StyledWrapper>
  );
};

export default MainSlider;
