import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/templates/Layout';
import SEO from '../components/seo';
import { convertObjectToArray } from '../utils/functions';
import ProjectTemplate from '../components/templates/ProjectTemplate/ProjectTemplate';

const WeatherPage = ({ data }) => {
  const {
    indeedData: { projects }
  } = data;
  const imagesArray = convertObjectToArray(data.image1, data.image2);

  return (
    /* Three themes to choose from: light, dark, default.
    To have default, don't pass any props to Layout component  */
    <Layout headerTheme='dark'>
      <SEO title='Weather' />
      <ProjectTemplate content={projects[0]} images={imagesArray} />
    </Layout>
  );
};

export const query = graphql`
  query {
    image1: file(name: { regex: "/weather-mobile/" }) {
      ...mockUpFragment
    }
    image2: file(name: { regex: "/weather-standard/" }) {
      ...mockUpFragment
    }
    indeedData: portfolio {
      projects(where: { name: "weather" }) {
        id
        category
        date
        developStatus
        mainTechnology
        link
        githubLink
        name
        next
        primaryDescription
        secondaryDescription
      }
    }
  }
`;

export default WeatherPage;
