import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import { convertObjectToArray } from '../utils/functions';
import MainSlider from '../components/MainSlider/MainSlider';

const StyledHeader = styled.h1`
  font-family: ${({ theme }) => theme.font.family.futura};
`;

const IndexPage = ({ data }) => {
  const imagesArray = convertObjectToArray(
    data.image1,
    data.image2,
    data.image3
  );
  console.log(imagesArray);
  return (
    <Layout>
      <SEO title='Home' />
      <MainSlider images={imagesArray} />
    </Layout>
  );
};

export const sliderMockup = graphql`
  fragment sliderMockup on File {
    childImageSharp {
      fluid(maxWidth: 2000, quality: 100) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
`;

export const query = graphql`
  query {
    image1: file(name: { regex: "/weather-mobile/" }) {
      ...sliderMockup
    }
    image2: file(name: { regex: "/indeed-main-mobile/" }) {
      ...sliderMockup
    }
    image3: file(name: { regex: "/archicept-mobile/" }) {
      ...sliderMockup
    }
  }
`;

export default IndexPage;
