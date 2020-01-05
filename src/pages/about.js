import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/templates/Layout';
import SEO from '../components/seo';
import AboutTemplate from '../components/templates/AboutTemplate/AboutTemplate';
import { convertObjectToArray } from '../utils/functions';

const AboutPage = ({ data }) => {
  console.log(data);
  const imagesArray = convertObjectToArray(data.image1, data.image2);
  return (
    <Layout headerTheme='light'>
      <SEO title='About' />
      <AboutTemplate images={imagesArray} />
    </Layout>
  );
};

export const photoFragmentLowerQuality = graphql`
  fragment photoFragmentLowerQuality on File {
    childImageSharp {
      fluid(maxWidth: 1500, quality: 80) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
`;

export const query = graphql`
  query {
    image1: file(name: { regex: "/portfolio1/" }) {
      ...photoFragmentLowerQuality
    }
    image2: file(name: { regex: "/portfolio2/" }) {
      ...photoFragmentLowerQuality
    }
  }
`;

export default AboutPage;
