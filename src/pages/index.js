import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/templates/Layout';
import SEO from '../components/seo';
import { convertObjectToArray } from '../utils/functions';
import MainSlider from '../components/MainSlider/MainSlider';
import CurrentSlideContextProvider from '../providers/CurrentSlideContext';

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
    /* Three themes to choose from: light, dark, default.
    To have default, don't pass any props to Layout component  */
    <Layout>
      <CurrentSlideContextProvider>
        <SEO title='Home' />
        <MainSlider images={imagesArray} data={sliderContents} />
      </CurrentSlideContextProvider>
    </Layout>
  );
};

export const photoFragment = graphql`
  fragment photoFragment on File {
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
      ...photoFragment
    }
    image2: file(name: { regex: "/archicept-mobile/" }) {
      ...photoFragment
    }
    image3: file(name: { regex: "/weather-mobile/" }) {
      ...photoFragment
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
