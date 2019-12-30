import React from 'react';
import { graphql } from 'gatsby';
import Div100vh from 'react-div-100vh';
import Layout from '../components/templates/Layout';
import SEO from '../components/seo';
import AboutTemplate from '../components/templates/AboutTemplate/AboutTemplate';

const AboutPage = ({ data: { image } }) => {
  return (
    <Layout>
      <SEO title='About' />
      <AboutTemplate image={image} />
    </Layout>
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

export default AboutPage;
