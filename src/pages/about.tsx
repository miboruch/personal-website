import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/templates/Layout';
import SEO from '../components/seo';
import AboutTemplate from '../components/templates/AboutTemplate/AboutTemplate';

interface QueryData {
  data: {
    image1: any;
    image2: any;
  };
}

const AboutPage: React.FC<QueryData> = ({ data }) => {
  const imagesArray = [data.image1, data.image2];
  return (
    <Layout headerTheme='light'>
      <SEO title='About' />
      <AboutTemplate images={imagesArray} />
    </Layout>
  );
};

export const query = graphql`
  query {
    image1: file(name: { regex: "/portfolio1/" }) {
      ...photoFragment
    }
    image2: file(name: { regex: "/portfolio2/" }) {
      ...photoFragment
    }
  }
`;

export default AboutPage;
