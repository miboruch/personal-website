import React, { useState } from 'react';
import styled from 'styled-components';
import SocialNavigation from '../../molecules/SocialNavigation/SocialNavigation';
import Footer from '../../molecules/Footer/Footer';
import OpenCircle from '../../atoms/OpenCircle/OpenCircle';
import ContactForm from '../ContactForm/ContactForm';
import GatsbyImage from 'gatsby-image';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import { mediaItems } from '../../../utils/items';

const StyledWrapper = styled.div`
  background: #1b1b1b;
  width: 100%;
  height: 100%;
`;

const StyledImage = styled(GatsbyImage)`
  z-index: 2;

  ${({ theme }) => theme.mq.tabletS} {
    height: 50%;
  }

  ${({ theme }) => theme.mq.standard} {
    position: absolute;
    top: 50%;
    left: 0;
    height: 60%;
    width: 60%;
    transform: translateY(-50%);
  }
`;

const CircleWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: -60px;
  transform: translate(-50%, -50%);
  display: none;

  ${({ theme }) => theme.mq.standard} {
    display: block;
  }
`;

const StyledLine = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  position: absolute;
  top: 50%;
  left: 0;
  z-index: 0;
  transform: translateY(-50%);
  display: none;

  ${({ theme }) => theme.mq.standard} {
    display: block;
  }
`;

const ContentWrapper = styled.div`
  margin: auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mq.standard} {
    width: 300px;
    position: absolute;
    top: 45%;
    left: 60%;
    transform: translateY(-50%);
  }

  ${({ theme }) => theme.mq.desktop} {
    left: 62%;
  }
`;

const StyledMainText = styled(Paragraph)`
  font-size: 43px;
  font-family: ${({ theme }) => theme.font.family.avanti};
  padding: 2rem 0;
`;

const StyledContentBox = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const StyledContent = styled.div`
  width: 50%;
  padding-top: 2rem;
  padding-right: 2rem;
`;

const StyledContentTitle = styled(Paragraph)`
  font-weight: bold;
  font-size: 13px;
  text-transform: uppercase;
  padding: 1rem 0;
  letter-spacing: 3px;
`;

const StyledParagraph = styled(Paragraph)`
  font-size: 15px;
`;

const FooterWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const NavigationWrapper = styled.div`
  width: 70%;
`;

const StyledOpenCase = styled(Paragraph)`
  width: 150px;
  font-size: 14px;
  padding-top: 3rem;
  font-weight: bold;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-decoration: underline;
  cursor: pointer;
`;

const ContactTemplate = ({ image }) => {
  const [isFormOpened, setFormState] = useState(false);

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
    // {
    //   name: 'phone',
    //   value: '+48 743 023 482'
    // }
  ];

  return (
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
  );
};

export default ContactTemplate;
