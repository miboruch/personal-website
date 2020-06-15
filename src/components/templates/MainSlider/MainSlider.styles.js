import styled, { css } from 'styled-components';
import Slider from 'react-slick';
import Arrow from '../../../assets/icons/arrow.svg';
import Paragraph from '../../atoms/Paragraph/Paragraph';

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
  bottom: 150px;

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
  transition: transform 0.7s ease;

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
    transform: translateX(-35%);
  }

  ${({ theme }) => theme.mq.desktop} {
    transform: translateX(-50%);
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

export {
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
};
