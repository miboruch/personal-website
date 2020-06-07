import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import gsap from 'gsap';
import SocialNavigation from '../../molecules/SocialNavigation/SocialNavigation';
import Footer from '../../molecules/Footer/Footer';
import ContactForm from '../ContactForm/ContactForm';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Form from '../../molecules/Form/Form';
import { mediaItems } from '../../../utils/items';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-image: ${({ theme }) => theme.color.backgroundDarkGradient};

  ${({ theme }) => theme.mq.standard} {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const ContentWrapper = styled.section`
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

const FormWrapper = styled.div`
  display: none;

  ${({ theme }) => theme.mq.standard} {
    display: block;
    width: 50%;
  }
`;

const ContentInformation = styled.div`
  margin-left: 2rem;

  ${({ theme }) => theme.mq.standard} {
    margin-left: 100px;
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

  &:hover {
    transform: translateY(-10px);
  }

  ${({ theme }) => theme.mq.tabletS} {
    margin-bottom: 30px;
  }

  ${({ theme }) => theme.mq.standard} {
    margin-top: 0;
    font-size: 58px;
  }

  ${({ theme }) => theme.mq.desktop} {
    font-size: 89px;
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
  z-index: 10;
`;

const StyledOpenCase = styled(Paragraph)`
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

const CVLink = styled.a`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-decoration: underline !important;
  cursor: pointer;
  margin-bottom: 1rem;
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

const StyledCVWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
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
  const {
    allFile: { edges }
  } = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `);

  const formRef = useRef(null);
  const contactInfoRef = useRef(null);

  const [isFormOpened, setFormState] = useState(false);

  const githubLink = mediaItems[0].link;

  useEffect(() => {
    const form = formRef.current;
    const contact = contactInfoRef.current;

    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

    gsap.set([form, ...contact.children], { autoAlpha: 0 });

    tl.fromTo(
      form,
      { y: '+=30' },
      { y: '0', autoAlpha: 1, stagger: 0.3, duration: 1.2 }
    ).fromTo(
      contact.children,
      { y: '+=30' },
      {
        y: '0',
        autoAlpha: 1,
        stagger: 0.7
      }
    );
  }, []);

  return (
    <StyledWrapper className={'transition-wrapper'}>
      <StyledVerticalLine />
      <ContentWrapper>
        <FormWrapper ref={formRef}>
          <Form />
        </FormWrapper>
        <ContentInformation ref={contactInfoRef}>
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
          <StyledCVWrapper>
            {edges.map((file, index) => (
              <CVLink
                href={file.node.publicURL}
                key={`CV${index}`}
                download={`Michał Boruch CV - ${file.node.name}`}
              >
                download {file.node.name} cv
              </CVLink>
            ))}
          </StyledCVWrapper>
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
