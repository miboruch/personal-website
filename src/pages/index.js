import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import { convertObjectToArray } from '../utils/functions';
import MainSlider from '../components/MainSlider/MainSlider';

const IndexPage = ({ data }) => {
  const {
    mainPageData: { sliderContents }
  } = data;

  const imagesArray = convertObjectToArray(
    data.image1,
    data.image2,
    data.image3
  );

  return (
    <Layout>
      <SEO title='Home' />
      <MainSlider images={imagesArray} data={sliderContents} />
    </Layout>
  );
};

export const sliderMockup = graphql`
  fragment sliderMockup on File {
    childImageSharp {
      fluid(maxWidth: 1000, quality: 100) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
`;

export const query = graphql`
  query {
    image1: file(name: { regex: "/indeed-main-mobile/" }) {
      ...sliderMockup
    }
    image2: file(name: { regex: "/archicept-mobile/" }) {
      ...sliderMockup
    }
    image3: file(name: { regex: "/weather-mobile/" }) {
      ...sliderMockup
    }
    mainPageData: portfolio {
      sliderContents {
        index
        name
        next
        description
      }
    }
  }
`;

export default IndexPage;
