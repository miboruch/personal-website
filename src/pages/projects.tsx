import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/templates/Layout';
import SEO from '../components/seo';
import ProjectsTemplate from '../components/templates/ProjectsTemplate/ProjectsTemplate';

interface QueryData {
  data: {
    image0: any;
    image1: any;
    image2: any;
    image3: any;
    image4: any;
    image5: any;
    projects: {
      edges: {
        node: { name: string; pageLink: string; primaryDescription: string };
      }[];
    };
  };
}

const Projects: React.FC<QueryData> = ({ data }) => {
  const imageArray = [
    data.image0,
    data.image1,
    data.image2,
    data.image3,
    data.image4,
    data.image5
  ];
  const projects = data.projects.edges.map(({ node }) => node);

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
    image1: file(name: { regex: "/chat-app-main/" }) {
      ...mockUpFragment
    }
    image2: file(name: { regex: "/buy-it-main/" }) {
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
    projects: allDatoCmsProject {
      edges {
        node {
          name
          pageLink
          primaryDescription
        }
      }
    }
  }
`;

export default Projects;
