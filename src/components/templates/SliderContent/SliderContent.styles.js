import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-image: ${({ theme }) => theme.color.backgroundDarkGradient};
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: ${({ theme }) => theme.color.backgroundLightGradient};
    transform: ${({ isEven }) =>
      isEven ? 'translateX(-100%)' : 'translateX(0)'};
    transition: transform 1s 2s cubic-bezier(0.66, 0.24, 0, 0.82);
  }
`;

const StyledImage = styled(GatsbyImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.6;
  z-index: 10;

  ${({ theme }) => theme.mq.standard} {
    opacity: 1;
    left: -20%;
  }
`;

const StyledContextBox = styled.section`
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  height: 100%;
  color: ${({ isDarkTheme }) => (isDarkTheme ? '#222' : '#e7e5e1')};
  transition: color 1s 2s ease;

  ${({ theme }) => theme.mq.standard} {
    top: 0;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 12;
`;

const StyledTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 2rem;
  transition: transform 0.5s ease;

  &:hover {
    transform: translateY(-10px);
  }

  ${({ theme }) => theme.mq.standard} {
    margin-bottom: 1rem;
    justify-content: flex-end;
  }
`;

const StyledTitle = styled(Paragraph)`
  font-family: ${({ theme }) => theme.font.family.avanti};
  font-weight: bold;
  overflow: hidden;
  letter-spacing: 0;
  margin: 0;
  color: inherit;
  visibility: hidden;
`;

const StyledDescription = styled(Paragraph)`
  font-size: 2rem;
  line-height: 1.6;
  letter-spacing: 0;
  margin-top: 2rem;
  padding: 0 2rem;
  text-align: center;
  color: inherit;
  visibility: hidden;

  ${({ theme }) => theme.mq.standard} {
    margin-top: 0;
    padding: 0;
    text-align: right;
  }
`;

const StyledOpenCase = styled(Paragraph)`
  font-size: 14px;
  text-align: center;
  font-weight: bold;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-decoration: underline;
  color: inherit;
  visibility: hidden;

  ${({ theme }) => theme.mq.standard} {
    text-align: right;
    margin: unset;
  }
`;

const TextWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: right;

  ${({ theme }) => theme.mq.standard} {
    display: flex;
    align-items: flex-end;
    left: auto;
    flex-direction: column;
    width: 80%;
    right: 176px;
    top: 50%;
    transform: translateY(-57%);
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 50%;
  }
`;

const StyledLine = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 0;
  height: 1px;
  background: ${({ isDarkTheme }) =>
    isDarkTheme ? 'rgba(214, 212, 208, 0.6)' : 'rgba(214, 212, 208, 0.2)'};
  z-index: 5;
  display: none;

  ${({ theme }) => theme.mq.standard} {
    top: 50%;
    display: block;
  }
`;

const OverflowBox = styled.div`
  overflow: hidden;
  margin-top: 2rem;
`;

const AllProjectOverflow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-100%);
  right: 0.7rem;
  overflow: hidden;
`;

const AllProjectCase = styled(Paragraph)`
  position: relative;
  padding: 0 2rem;
  font-weight: bold;
  letter-spacing: 4px;
  text-transform: uppercase;
  display: none;
  cursor: pointer;
  color: ${({ isDarkTheme }) => (isDarkTheme ? '#222' : '#fff')} !important;
  transition: color 1s ease;
  visibility: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ isDarkTheme }) => (isDarkTheme ? '#222' : '#fff')};
    transition: all 1s cubic-bezier(0.66, 0.24, 0, 0.82);
  }

  &:hover::after {
    width: 100%;
  }

  ${({ theme }) => theme.mq.standard} {
    display: block;
  }
`;

export {
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
};
