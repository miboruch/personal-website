import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PropTypes from 'prop-types';
import Footer from '../../molecules/Footer/Footer';
import SkillsBox from '../../molecules/SkillsBox/SkillsBox';
import { skills } from '../../../utils/skills';
import SkillToggleBox from '../../molecules/SkillToggleBox/SkillToggleBox';
import {
  StyledWrapper,
  StyledImage,
  StyledTitle,
  StyledHeading,
  StyledLine,
  ContentWrapper,
  StyledQuote,
  StyledMain,
  TextWrapper,
  StyledPortfolioImage,
  StyledList,
  OverflowBox,
  StyledListItem
} from './AboutTemplate.styles';

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals('ScrollTrigger', ScrollTrigger);
}

const AboutTemplate = ({ images }) => {
  const titleRef = useRef(null);
  const quoteRef = useRef(null);
  const textWrapperRef = useRef(null);

  const [areSkillsVisible, setSkillsState] = useState(true);

  useEffect(() => {
    const title = titleRef.current;
    const quote = quoteRef.current;

    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

    gsap.set([title, quote], { autoAlpha: 0 });

    tl.fromTo(title, { y: '+=40' }, { y: '0', autoAlpha: 1, delay: 1 }).fromTo(
      quote,
      { y: '+=20' },
      { y: '0', autoAlpha: 1, duration: 1 },
      '-=0.55'
    );
  }, []);

  useEffect(() => {
    const textWrapper = textWrapperRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textWrapper,
        start: '-=100 center',
        toggleActions: 'play complete pause reverse'
      },
      defaults: { ease: 'power3.inOut' }
    });

    gsap.set(textWrapper.children, { autoAlpha: 0, y: '+=20' });

    tl.to(textWrapper.children, {
      autoAlpha: 1,
      y: 0,
      duration: 1.2,
      stagger: 0.3
    });
  }, []);

  return (
    <StyledWrapper className={'transition-wrapper'}>
      <StyledImage fluid={images[0].childImageSharp.fluid} fadeIn>
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
        <StyledMain>
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
            <StyledListItem>advanced TypeScript</StyledListItem>
          </StyledList>
        </StyledMain>
        <SkillsBox />
      </TextWrapper>
      <SkillToggleBox isOpen={areSkillsVisible} setState={setSkillsState} />
      <StyledPortfolioImage fluid={images[1].childImageSharp.fluid} fadeIn />
      <Footer />
    </StyledWrapper>
  );
};

AboutTemplate.propTypes = {
  images: PropTypes.array.isRequired
};

export default AboutTemplate;
