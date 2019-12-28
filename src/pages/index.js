import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Div100vh from 'react-div-100vh';
import Layout from '../components/templates/Layout';
import SEO from '../components/seo';
import { convertObjectToArray } from '../utils/functions';
import MainSlider from '../components/templates/MainSlider/MainSlider';
import CurrentSlideContextProvider from '../providers/CurrentSlideContext';
import { TransitionState } from 'gatsby-plugin-transition-link';
import TransitionProvider from '../providers/TransitionProvider';

const IndexPage = ({ data }) => {
  const {
    mainPageData: { projects }
  } = data;
  const imagesArray = convertObjectToArray(
    data.image1,
    data.image2,
    data.image3
  );

  return (
    /* Three themes to choose from: light, dark, default.
    To have default, don't pass any props to Layout component  */
    <Div100vh>
      <Layout>
        <CurrentSlideContextProvider>
          <SEO title='Home' />
          <Div100vh>
            <MainSlider images={imagesArray} data={projects} />;
          </Div100vh>
        </CurrentSlideContextProvider>
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
      projects {
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
