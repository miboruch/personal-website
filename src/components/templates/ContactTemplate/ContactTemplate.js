import React, { useState } from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';
import SocialNavigation from '../../molecules/SocialNavigation/SocialNavigation';
import Footer from '../../molecules/Footer/Footer';
import ContactForm from '../ContactForm/ContactForm';
import GatsbyImage from 'gatsby-image';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import { mediaItems } from '../../../utils/items';
import { createFade } from '../../../utils/animations';
import Form from '../../molecules/Form/Form';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #272727;
  color: #000;
  position: relative;

  ${({ theme }) => theme.mq.standard} {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const ContentWrapper = styled(animated.section)`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 90px 2rem 2rem 2rem;

  ${({ theme }) => theme.mq.standard} {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0 3rem;
  }
`;

const FormWrapper = styled(animated.div)`
  display: none;
  transition: all 1s ease;

  ${({ theme }) => theme.mq.standard} {
    display: block;
    width: 50%;
  }
`;

const ContentInformation = styled(animated.div)`
  margin-left: 0;
  transition: all 1s ease;

  ${({ theme }) => theme.mq.standard} {
    margin-left: 30px;
  }
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mq.standard} {
    flex-direction: row;
  }
`;

const StyledTitle = styled(Paragraph)`
  color: #fff;
  font-family: ${({ theme }) => theme.font.family.avanti};
  position: relative;
  margin-top: 30px;

  ${({ theme }) => theme.mq.tabletS} {
    margin-bottom: 30px;
  }

  ${({ theme }) => theme.mq.standard} {
    margin-top: 0;
  }

  ${({ theme }) => theme.mq.standard} {
    &::after {
      font-family: ${({ theme }) => theme.font.family.futura};
      font-weight: 500;
      content: '2020';
      font-size: 12px;
      position: absolute;
      right: 0;
      top: 50%;
    }
  }
`;

const StyledBox = styled.section`
  color: #fff;
  margin-top: 2rem;
  position: relative;
  width: 200px;

  ${({ theme }) => theme.mq.tabletS} {
    margin-bottom: 2rem;
  }

  ${({ theme }) => theme.mq.standard} {
    &::before {
      content: '';
      position: absolute;
      top: 7px;
      left: -30px;
      width: 0;
      height: 1px;
      background-color: #fff;
      transform: translate(-50%, -50%);
      transition: width 0.5s ease;
    }

    &:hover::before {
      width: 30px;
    }
  }
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

  ${({ theme }) => theme.mq.tabletS} {
    width: 50%;
  }

  ${({ theme }) => theme.mq.tabletS} {
    width: 40%;
  }

  ${({ theme }) => theme.mq.standard} {
    width: 25%;
    left: auto;
    bottom: 0;
    right: 0;
  }
`;

const StyledImage = styled(GatsbyImage)`
  width: 100%;
  background: transparent;
  background-blend-mode: overlay;
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
  font-weight: bold;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-decoration: underline;
  cursor: pointer;
  margin-bottom: 1rem;
  padding-top: 1rem;
`;

const StyledSendMessage = styled(StyledOpenCase)`
  ${({ theme }) => theme.mq.standard} {
    display: none;
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

const StyledVerticalLine = styled.div`
  display: none;
  width: 1px;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  position: absolute;
  left: 50%;
  top: 0;

  ${({ theme }) => theme.mq.standard} {
    display: block;
  }
`;

const ContactTemplate = ({ image }) => {
  const [isFormOpened, setFormState] = useState(false);
  const fade = createFade(true, 1500, 1000);
  const fadeDelayed = createFade(true, 1500, 2000);

  const githubLink = mediaItems[0].link;

  return (
    <StyledWrapper>
      <StyledVerticalLine />
      <ContentWrapper>
        <FormWrapper style={fade}>
          <Form />
        </FormWrapper>
        <ContentInformation style={fadeDelayed}>
          <StyledTitle title>Contact</StyledTitle>
          <RowWrapper>
            <StyledBox>
              <StyledContentTitle>github</StyledContentTitle>
              <StyledLink
                href={githubLink}
                target='_blank'
                rel='noreferrer noopener'
              >
                miboruch
              </StyledLink>
            </StyledBox>
            <StyledBox>
              <StyledContentTitle>email</StyledContentTitle>
              <StyledLink href='mailto:miboruch@gmail.com'>
                miboruch@gmail.com
              </StyledLink>
            </StyledBox>
          </RowWrapper>
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
          <StyledOpenCase>download my cv</StyledOpenCase>
          <StyledSendMessage onClick={() => setFormState(true)}>
            send message
          </StyledSendMessage>
        </ContentInformation>
      </ContentWrapper>
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
