import React from 'react';
import { graphql } from 'gatsby';
import Div100vh from 'react-div-100vh';
import Layout from '../components/templates/Layout';
import ContactTemplate from '../components/templates/ContactTemplate/ContactTemplate';

const ContactPage = ({ data: { image } }) => {
  return (
    <Div100vh>
      <Layout headerTheme='light'>
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
    image: file(name: { regex: "/about/" }) {
      ...photoFragment
    }
  }
`;

export default ContactPage;
