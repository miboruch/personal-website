import React from 'react';
import { graphql } from 'gatsby';
import Div100vh from 'react-div-100vh';
import Layout from '../components/templates/Layout';
import SEO from '../components/seo';
import AboutTemplate from '../components/templates/AboutTemplate/AboutTemplate';
import { convertObjectToArray } from '../utils/functions';

const AboutPage = ({ data }) => {
  console.log(data);
  const imagesArray = convertObjectToArray(
    data.image1,
    data.image2,
    data.image3
  );
  return (
    <Layout headerTheme='light'>
      <SEO title='About' />
      <AboutTemplate images={imagesArray} />
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
    image1: file(name: { regex: "/about/" }) {
      ...photoFragment
    }
    image2: file(name: { regex: "/portfolio1/" }) {
      ...photoFragment
    }
    image3: file(name: { regex: "/portfolio2/" }) {
      ...photoFragment
    }
  }
`;

export default AboutPage;
