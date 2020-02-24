import React from 'react';
import { graphql } from 'gatsby';
import Div100vh from 'react-div-100vh';
import Layout from '../components/templates/Layout';
import SEO from '../components/seo';
import { convertObjectToArray } from '../utils/functions';
import MainSlider from '../components/templates/MainSlider/MainSlider';
import CurrentSlideContextProvider from '../providers/CurrentSlideContext';

const IndexPage = ({ data }) => {
  const {
    mainPageData: { projects }
  } = data;
  const imagesArray = convertObjectToArray(
    data.image4,
    data.image1,
    data.image2,
    data.image3
  );

  return (
    /* Three themes to choose from: light, dark, default.
    To have default, don't pass any props to Layout component  */
    <Div100vh>
      <Layout headerTheme='light'>
        <CurrentSlideContextProvider>
          <SEO title='Home' />
          <MainSlider images={imagesArray} data={projects} />
        </CurrentSlideContextProvider>
      </Layout>
    </Div100vh>
  );
};

export const mockUpFragment = graphql`
  fragment mockUpFragment on File {
    childImageSharp {
      fluid(maxWidth: 1100, quality: 100) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
`;

export const photoFragment = graphql`
  fragment photoFragment on File {
    childImageSharp {
      fluid(maxWidth: 1200, quality: 100) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
`;

export const query = graphql`
  query {
    image1: file(name: { regex: "/indeed-main-mobile/" }) {
      ...mockUpFragment
    }
    image2: file(name: { regex: "/archicept-mobile/" }) {
      ...mockUpFragment
    }
    image3: file(name: { regex: "/weather-mobile/" }) {
      ...mockUpFragment
    }
    image4: file(name: { regex: "/buyit-main/" }) {
      ...mockUpFragment
    }
    mainPageData: portfolio {
      projects(orderBy: index_ASC) {
        index
        name
        next
        description
        pageLink
      }
    }
  }
`;

export default IndexPage;
