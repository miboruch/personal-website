import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/templates/Layout';
import SEO from '../components/seo';
import { convertObjectToArray } from '../utils/functions';
import MainSlider from '../components/MainSlider/MainSlider';
import CurrentSlideContextProvider from '../providers/CurrentSlideContext';
import ProjectTemplate from '../components/templates/ProjectTemplate';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 70px;
  // background-color: ${({ theme }) => theme.color.lightThemeBackground};
  background-color: #fff;
  margin: 0;
  overflow-y: hidden;
`;

const IndeedPage = ({ data }) => {
  // const {
  //   mainPageData: { sliderContents }
  // } = data;
  // const imagesArray = convertObjectToArray(
  //   data.image1,
  //   data.image2,
  //   data.image3
  // );

  console.log(data);

  return (
    /* Three themes to choose from: light, dark, default.
    To have default, don't pass any props to Layout component  */
    <Layout headerTheme='dark'>
      <SEO title='Projects' />
      <StyledWrapper>
        <ProjectTemplate />
      </StyledWrapper>
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
    image2: file(name: { regex: "/indeed-standard/" }) {
      ...photoFragment
    }
    image3: file(name: { regex: "/indeed-mobile/" }) {
      ...photoFragment
    }
    indeedData: portfolio {
      projects(where: { name: "indeed" }) {
        id
        category
        date
        developStatus
        mainTechnology
        link
        name
        next
        primaryDescription
        secondaryDescription
      }
    }
  }
`;

export default IndeedPage;
