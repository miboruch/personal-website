import React from 'react';
import { graphql } from 'gatsby';
import Div100vh from 'react-div-100vh';
import Layout from '../components/templates/Layout';
import ContactTemplate from '../components/templates/ContactTemplate/ContactTemplate';
import SEO from '../components/seo';

const ContactPage = ({ data: { image } }) => {
  return (
    <Div100vh>
      <Layout headerTheme='light'>
        <SEO title='Contact' />
        <ContactTemplate image={image} />
      </Layout>
    </Div100vh>
  );
};

export const photoFragment = graphql`
  fragment photoFragment on File {
    childImageSharp {
      fluid(maxWidth: 1500, quality: 100) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
`;

export const query = graphql`
  query {
    image: file(name: { regex: "/portret/" }) {
      ...photoFragment
    }
  }
`;

export default ContactPage;
