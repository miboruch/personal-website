import React, { useState } from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';
import SocialNavigation from '../../molecules/SocialNavigation/SocialNavigation';
import Footer from '../../molecules/Footer/Footer';
import OpenCircle from '../../atoms/OpenCircle/OpenCircle';
import ContactForm from '../ContactForm/ContactForm';
import GatsbyImage from 'gatsby-image';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import { mediaItems } from '../../../utils/items';
import { createFade, createUpperFadeOut } from '../../../utils/animations';

// const StyledWrapper = styled.div`
//   background: #1b1b1b;
//   width: 100%;
//   height: 100%;
// `;
//
// const StyledImage = styled(GatsbyImage)`
//   z-index: 2;
//
//   ${({ theme }) => theme.mq.tabletS} {
//     height: 50%;
//   }
//
//   ${({ theme }) => theme.mq.standard} {
//     position: absolute;
//     top: 50%;
//     left: 0;
//     height: 60%;
//     width: 60%;
//     transform: translateY(-50%);
//   }
// `;
//
// const CircleWrapper = styled.div`
//   position: absolute;
//   top: 50%;
//   right: -60px;
//   transform: translate(-50%, -50%);
//   display: none;
//
//   ${({ theme }) => theme.mq.standard} {
//     display: block;
//   }
// `;
//
// const StyledLine = styled.div`
//   width: 100%;
//   height: 1px;
//   background: rgba(255, 255, 255, 0.2);
//   position: absolute;
//   top: 50%;
//   left: 0;
//   z-index: 0;
//   transform: translateY(-50%);
//   display: none;
//
//   ${({ theme }) => theme.mq.standard} {
//     display: block;
//   }
// `;
//
// const ContentWrapper = styled.div`
//   margin: auto;
//   padding: 2rem;
//   display: flex;
//   flex-direction: column;
//
//   ${({ theme }) => theme.mq.standard} {
//     width: 300px;
//     position: absolute;
//     top: 45%;
//     left: 60%;
//     transform: translateY(-50%);
//   }
//
//   ${({ theme }) => theme.mq.desktop} {
//     left: 62%;
//   }
// `;
//
// const StyledMainText = styled(Paragraph)`
//   font-size: 43px;
//   font-family: ${({ theme }) => theme.font.family.avanti};
//   padding: 2rem 0;
// `;
//
// const StyledContentBox = styled.section`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
// `;
//
// const StyledContent = styled.div`
//   width: 50%;
//   padding-top: 2rem;
//   padding-right: 2rem;
// `;
//
// const StyledContentTitle = styled(Paragraph)`
//   font-weight: bold;
//   font-size: 13px;
//   text-transform: uppercase;
//   padding: 1rem 0;
//   letter-spacing: 3px;
// `;
//
// const StyledParagraph = styled(Paragraph)`
//   font-size: 15px;
// `;
//
// const FooterWrapper = styled.div`
//   width: 100%;
//   position: absolute;
//   bottom: 0;
//   left: 0;
// `;
//
// const NavigationWrapper = styled.div`
//   width: 70%;
//
//   ${({ theme }) => theme.mq.tablet} {
//     width: 60%;
//   }
//
//   ${({ theme }) => theme.mq.tablet} {
//     width: 50%;
//   }
// `;
//
// const StyledOpenCase = styled(Paragraph)`
//   width: 150px;
//   font-size: 14px;
//   padding-top: 3rem;
//   font-weight: bold;
//   letter-spacing: 3px;
//   text-transform: uppercase;
//   text-decoration: underline;
//   cursor: pointer;
// `;

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #272727;
  color: #000;
  position: relative;
`;

const ContentWrapper = styled(animated.section)`
  width: 100%;
  padding: 90px 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mq.standard} {
    padding: 90px 2rem 2rem 3rem;
  }
`;

const StyledTitle = styled(Paragraph)`
  color: #fff;
  font-family: ${({ theme }) => theme.font.family.avanti};
  margin-top: 30px;

  ${({ theme }) => theme.mq.standard} {
    margin-top: 100px;
  }
`;

const StyledBox = styled.section`
  color: #fff;
  margin-top: 2rem;
`;

const StyledContentTitle = styled(Paragraph)`
  font-weight: bold;
  font-size: 13px;
  text-transform: uppercase;
  color: inherit;
  padding-bottom: 1rem;
`;

const StyledLink = styled.a`
  color: #fff;
`;

const ImageWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 70%;
  left: 50%;
  //background: #000;
  //background: #fff;
  //background: #272727;
  //transform: translateX(-50%);

  ${({ theme }) => theme.mq.tabletS} {
    width: 50%;
  }

  ${({ theme }) => theme.mq.tabletS} {
    width: 40%;
  }

  ${({ theme }) => theme.mq.standard} {
    width: 30%;
    left: auto;
    right: 0;
  }
`;

const StyledImage = styled(GatsbyImage)`
  //z-index: 2; /* change to 2 */
  width: 100%;
  background: transparent;
  background-blend-mode: overlay;

  //&::before {
  //  content: 'kill me';
  //  font-weight: bold;
  //  position: absolute;
  //  font-size: 100px;
  //  word-spacing: 100px;
  //  top: 30%;
  //  color: #393939;
  //}
`;

const StyledLine = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
`;

const FooterWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  //background: #272727;
  z-index: 10;
`;

const StyledOpenCase = styled(Paragraph)`
  width: 200px;
  font-size: 14px;
  color: #fff;
  padding-top: 3rem;
  font-weight: bold;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-decoration: underline;
  cursor: pointer;
  padding-left: 2rem;

  ${({ theme }) => theme.mq.standard} {
    padding-left: 3rem;
  }
`;

const NavigationWrapper = styled.div`
  width: 70%;

  ${({ theme }) => theme.mq.tablet} {
    width: 60%;
  }

  ${({ theme }) => theme.mq.tablet} {
    width: 50%;
  }
`;

const ContactTemplate = ({ image }) => {
  const [isFormOpened, setFormState] = useState(false);
  const fade = createFade(!isFormOpened, 1000, 0);

  const githubLink = mediaItems[1].link;
  const socialLinks = [
    {
      name: 'github',
      value: 'miboruch'
    },
    {
      name: 'email',
      value: 'miboruch@gmail.com'
    }
  ];

  return (
    <StyledWrapper>
      <ContentWrapper>
        <StyledTitle title>Contact</StyledTitle>
        <StyledBox>
          <StyledContentTitle>github</StyledContentTitle>
          <StyledLink href={githubLink}>miboruch</StyledLink>
        </StyledBox>
        <StyledBox>
          <StyledContentTitle>email</StyledContentTitle>
          <StyledLink href='mailto:miboruch@gmail.com'>
            miboruch@gmail.com
          </StyledLink>
        </StyledBox>
        <StyledBox>
          <StyledContentTitle>social links</StyledContentTitle>
          <NavigationWrapper>
            <SocialNavigation
              toggleState={true}
              headerTheme='dark'
              noPadding={true}
            />
          </NavigationWrapper>
        </StyledBox>
      </ContentWrapper>
      <StyledLine />
      <StyledOpenCase onClick={() => setFormState(true)}>
        send message
      </StyledOpenCase>
      <ImageWrapper>
        <StyledImage fluid={image.childImageSharp.fluid} />
      </ImageWrapper>
      <FooterWrapper>
        <Footer footerTheme='light' />
      </FooterWrapper>
      <ContactForm isOpen={isFormOpened} setFormState={setFormState} />
    </StyledWrapper>
  );
};

export default ContactTemplate;

/*

<StyledWrapper>
      <StyledImage fluid={image.childImageSharp.fluid} />
      <ContentWrapper>
        <StyledMainText>Contact</StyledMainText>
        <StyledContentBox>
          {socialLinks.map((item, index) => (
            <StyledContent key={index}>
              <StyledContentTitle>{item.name}</StyledContentTitle>
              <StyledParagraph>{item.value}</StyledParagraph>
            </StyledContent>
          ))}
        </StyledContentBox>
        <StyledOpenCase onClick={() => setFormState(true)}>
          send message
        </StyledOpenCase>
        <NavigationWrapper>
          <SocialNavigation toggleState={true} noPadding={true} />
        </NavigationWrapper>
      </ContentWrapper>
      <FooterWrapper>
        <Footer footerTheme='light' />
      </FooterWrapper>
      <a href={githubLink} target='_blank' rel='noopener noreferrer'>
        <CircleWrapper>
          <OpenCircle text='github' />
        </CircleWrapper>
      </a>
      <StyledLine />
      <ContactForm isOpen={isFormOpened} setFormState={setFormState} />
    </StyledWrapper>

 */
