import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/templates/Layout';
import SEO from '../components/seo';
import { convertObjectToArray } from '../utils/functions';
import ProjectTemplate from '../components/templates/ProjectTemplate';

const IndeedPage = ({ data }) => {
  const {
    indeedData: { projects }
  } = data;
  const imagesArray = convertObjectToArray(
    data.image1,
    data.image2,
    data.image3
  );

  return (
    /* Three themes to choose from: light, dark, default.
    To have default, don't pass any props to Layout component  */
    <Layout headerTheme='dark'>
      <SEO title='Indeed' />
      <ProjectTemplate content={projects[0]} images={imagesArray} />
    </Layout>
  );
};

export const query = graphql`
  query {
    image1: file(name: { regex: "/indeed-main-mobile/" }) {
      ...mockUpFragment
    }
    image2: file(name: { regex: "/indeed-standard/" }) {
      ...mockUpFragment
    }
    image3: file(name: { regex: "/indeed-mobile/" }) {
      ...mockUpFragment
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
