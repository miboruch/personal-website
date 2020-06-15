import React, { useEffect, useRef, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import gsap from 'gsap';
import SocialNavigation from '../../molecules/SocialNavigation/SocialNavigation';
import Footer from '../../molecules/Footer/Footer';
import ContactForm from '../ContactForm/ContactForm';
import Form from '../../molecules/Form/Form';
import { mediaItems } from '../../../utils/items';
import {
  StyledWrapper,
  ContentWrapper,
  FormWrapper,
  ContentInformation,
  RowWrapper,
  StyledTitle,
  StyledBox,
  StyledContentTitle,
  StyledLink,
  ImageWrapper,
  StyledImage,
  FooterWrapper,
  CVLink,
  StyledSendMessage,
  NavigationWrapper,
  StyledCVWrapper,
  StyledVerticalLine
} from './ContactTemplate.styles';

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
