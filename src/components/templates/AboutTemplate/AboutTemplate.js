import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import gsap from 'gsap';
import PropTypes from 'prop-types';
import Footer from '../../molecules/Footer/Footer';
import BackgroundImage from 'gatsby-background-image';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import SkillsBox from '../../molecules/SkillsBox/SkillsBox';
import CloseButton from '../../atoms/CloseButton/CloseButton';
import { useScrollPosition } from '../../../utils/customHooks';
import { skills } from '../../../utils/skills';

const StyledWrapper = styled.div`
  background: #f3f3f3;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const StyledImage = styled(BackgroundImage)`
  z-index: 2;
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #3d3d3d;
  background-blend-mode: overlay;
`;

const StyledTitle = styled(Paragraph)`
  font-family: ${({ theme }) => theme.font.family.avanti};
  padding: 2rem;
  margin-top: 5rem;
`;

const StyledHeading = styled.h2`
  font-size: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #4d4d4d;
  font-weight: bold;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e3e3e3;
`;

const StyledLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.2);
`;

const ContentWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

const StyledQuote = styled(Paragraph)`
  font-size: 20px;
  color: #fff;
  letter-spacing: 0;
`;

const StyledMain = styled.main`
  font-size: 16px;
  color: #8d8d8d;
  letter-spacing: 0;
`;

const TextWrapper = styled(ContentWrapper)`
  width: 90%;
  text-align: left;
  padding: 4rem 2rem;
  line-height: 1.5;

  ${({ theme }) => theme.mq.standard} {
    width: 50%;
  }
`;

const StyledPortfolioImage = styled(StyledImage)`
  &:hover {
    background-blend-mode: normal;
  }
`;

const SmallSkillsBox = styled.div`
  width: 300px;
  background: #1d1d1d;
  position: fixed;
  bottom: 5px;
  left: 5px;
  z-index: 600;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 3rem;
  opacity: ${({ isOnTop }) => (!isOnTop ? 1 : 0)};
  transform: translateY(${({ isOnTop }) => (!isOnTop ? '0' : '20%')});
  transition: transform 1s ease, opacity 1s ease;
  text-transform: uppercase;
  line-height: 1.7;
  -webkit-box-shadow: 10px 10px 30px -15px rgba(0, 0, 0, 1);
  -moz-box-shadow: 10px 10px 30px -15px rgba(0, 0, 0, 1);
  box-shadow: 10px 10px 30px -15px rgba(0, 0, 0, 1);

  ${({ theme }) => theme.mq.tablet} {
    display: flex;
  }

  ${({ isOpen }) =>
    !isOpen &&
    css`
      opacity: 0 !important;
      visibility: hidden !important;
      transition: opacity 1s ease, visibility 1s ease;
    `}
`;

const SkillsBoxParagraph = styled(Paragraph)`
  color: #adadad;
  letter-spacing: 4px;
  font-size: 10px;
  cursor: pointer;
`;

const StyledList = styled.ul`
  list-style-type: none;
`;

const OverflowBox = styled.div`
  overflow: hidden;
`;

const StyledListItem = styled.li`
  text-decoration: none;
  font-weight: bold;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -15px;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: transparent;
    transition: background 1s ease;
    border: 1px solid #8d8d8d;
  }
`;

const AboutTemplate = ({ images }) => {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const quoteRef = useRef(null);
  const textWrapperRef = useRef(null);
  const skillsBoxRef = useRef(null);

  const [isSkillsVisible, setSkillsState] = useState(true);

  const isOnTop = useScrollPosition();

  useEffect(() => {
    const title = titleRef.current;
    const text = textRef.current;
    const quote = quoteRef.current;
    const textWrapper = textWrapperRef.current;

    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

    gsap.set([title, quote, textWrapper, ...text.children], { autoAlpha: 0 });

    tl.fromTo(title, { y: '+=40' }, { y: '0', autoAlpha: 1, delay: 1 })
      .fromTo(
        quote,
        { y: '+=20' },
        { y: '0', autoAlpha: 1, duration: 1 },
        '-=0.55'
      )
      .to(textWrapper, { autoAlpha: 1, duration: 1 })
      .fromTo(text.children, { y: '+=10' }, { y: '0', autoAlpha: 1 });
  }, []);

  // useEffect(() => {
  //   const skillsBox = skillsBoxRef.current;
  //
  //   const tl = gsap.timeline({
  //     paused: true,
  //     scrollTrigger: {
  //       trigger: skillsBox,
  //       toggleActions: 'play complete pause reverse',
  //       start: '-=200 center',
  //       markers: true
  //     },
  //     defaults: { ease: 'power3.inOut' }
  //   });
  //
  //   gsap.set([...skillsBox.children], { autoAlpha: 0 });
  //
  //   tl.to(skillsBox.children, { autoAlpha: 1, stagger: 0.4 });
  // }, []);

  return (
    <StyledWrapper className={'transition-wrapper'}>
      <StyledImage fluid={images[0].childImageSharp.fluid}>
        <OverflowBox>
          <StyledTitle ref={titleRef} title>
            About me
          </StyledTitle>
        </OverflowBox>
        <StyledLine />
        <ContentWrapper>
          <StyledQuote ref={quoteRef}>
            &quot;Anyone who has never made a mistake has never tried anything
            new.&quot;
          </StyledQuote>
        </ContentWrapper>
      </StyledImage>
      <TextWrapper ref={textWrapperRef}>
        <StyledHeading>About</StyledHeading>
        <StyledMain ref={textRef}>
          Hello, my name is Michal and I am a 21 years old aspiring junior web
          developer based in <strong>Tarnow</strong> and <strong>Krakow</strong>
          . I am a computer science student at the State Higher Vocational
          School in Tarnow. In 2019, may I started my journey with Javascript,
          and since then I have been constantly increasing my skills and
          knowledge of web development. My main goal is to create modern design
          in combination with clean DRY code. <br />
          What can I tell about myself? I am open to new technologies and always
          happy to broaden my knowledge. In addition, I have an ability to learn
          very fast, which I consider as an important value. At the university I
          have done a few projects in groups, some of which were not connected
          to web development. Teamwork made me aware of the fact that in order
          to achieve your goal, it is crucial to listen to each other and
          cooperate by finding compromises.
          <br />
          <br />
          Technologies that I use:
          <StyledList>
            {skills.map(item => (
              <StyledListItem key={item}>{item}</StyledListItem>
            ))}
            <StyledListItem>GIT</StyledListItem>
          </StyledList>
          Moreover, I have basic knowledge of
          <strong> React-native</strong>, <strong>Typescript</strong>,
          relational and non-relational databases like{' '}
          <strong>PostgreSQL</strong> and <strong>MongoDB</strong>
          <br />
          <br />
          My personal 2020 front-end roadmap:
          <StyledList>
            <StyledListItem>
              Testing - JEST/React Testing Library
            </StyledListItem>
            <StyledListItem>TypeScript advanced</StyledListItem>
          </StyledList>
        </StyledMain>
        <SkillsBox />
      </TextWrapper>
      <SmallSkillsBox isOnTop={isOnTop} isOpen={isSkillsVisible}>
        <CloseButton lightTheme setBoxState={setSkillsState} />
        <SkillsBoxParagraph>
          {skills.map(item => (
            <>
              {item}
              <br />
            </>
          ))}
        </SkillsBoxParagraph>
      </SmallSkillsBox>
      <StyledPortfolioImage fluid={images[1].childImageSharp.fluid} />
      <Footer />
    </StyledWrapper>
  );
};

AboutTemplate.propTypes = {
  images: PropTypes.array.isRequired
};

export default AboutTemplate;
