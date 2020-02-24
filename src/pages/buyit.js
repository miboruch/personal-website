import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/templates/Layout';
import SEO from '../components/seo';
import { convertObjectToArray } from '../utils/functions';
import ProjectTemplate from '../components/templates/ProjectTemplate/ProjectTemplate';

const BuyItPage = ({ data }) => {
  const {
    buyItData: { projects }
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
      <SEO title='Buy IT' />
      <ProjectTemplate content={projects[0]} images={imagesArray} />
    </Layout>
  );
};

export const query = graphql`
  query {
    image1: file(name: { regex: "/buyit-main/" }) {
      ...mockUpFragment
    }
    image2: file(name: { regex: "/buyit-mobile/" }) {
      ...mockUpFragment
    }
    image3: file(name: { regex: "/buyit-standard/" }) {
      ...mockUpFragment
    }
    buyItData: portfolio {
      projects(where: { name: "Buy IT" }) {
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

export default BuyItPage;
