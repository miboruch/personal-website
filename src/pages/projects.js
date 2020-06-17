import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/templates/Layout';
import SEO from '../components/seo';
import { convertObjectToArray } from '../utils/functions';
import ProjectsTemplate from '../components/templates/ProjectsTemplate/ProjectsTemplate';

const Projects = ({ data }) => {
  const imageArray = convertObjectToArray(
    data.image0,
    data.image1,
    data.image2,
    data.image3,
    data.image4,
    data.image5
  );
  const { projects } = data.projectData;

  return (
    <Layout headerTheme='dark'>
      <SEO title='Projects' />
      <ProjectsTemplate projectsData={projects} images={imageArray} />
    </Layout>
  );
};

export const query = graphql`
  query {
    image0: file(name: { regex: "/grades-main/" }) {
      ...mockUpFragment
    }
    image1: file(name: { regex: "/chat-main/" }) {
      ...mockUpFragment
    }
    image2: file(name: { regex: "/buyit-main/" }) {
      ...mockUpFragment
    }
    image3: file(name: { regex: "/indeed-main-mobile/" }) {
      ...mockUpFragment
    }
    image4: file(name: { regex: "/wallpapers-mobile/" }) {
      ...mockUpFragment
    }
    image5: file(name: { regex: "/weather-mobile/" }) {
      ...mockUpFragment
    }
    projectData: portfolio {
      projects(orderBy: index_ASC) {
        name
        primaryDescription
        pageLink
      }
    }
  }
`;

export default Projects;
