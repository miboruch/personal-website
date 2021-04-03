import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/templates/Layout';
import SEO from '../components/seo';
import { convertObjectToArray } from '../utils/functions';
import ProjectsTemplate from '../components/templates/ProjectsTemplate/ProjectsTemplate';

interface QueryData {
  data?: {
    image0: any;
    image1: any;
    image2: any;
    image3: any;
    image4: any;
    image5: any;
    projectData: {
      name: string;
      primaryDescription: string;
      pageLink: string;
    };
  };
}

const Projects: React.FC<QueryData> = ({ data }) => {
  // const imageArray = convertObjectToArray(
  //   data.image0,
  //   data.image1,
  //   data.image2,
  //   data.image3,
  //   data.image4,
  //   data.image5
  // );
  // const { projects } = data.projectData;

  return (
    <Layout headerTheme='dark'>
      <SEO title='Projects' />
      {/*<ProjectsTemplate projectsData={projects} images={imageArray} />*/}
      <ProjectsTemplate projectsData={[]} images={[]} />
    </Layout>
  );
};

// export const query = graphql`
//   query {
//     image0: file(name: { regex: "/grades-main/" }) {
//       ...mockUpFragment
//     }
//     image1: file(name: { regex: "/chat-main/" }) {
//       ...mockUpFragment
//     }
//     image2: file(name: { regex: "/buyit-main/" }) {
//       ...mockUpFragment
//     }
//     image3: file(name: { regex: "/indeed-main-mobile/" }) {
//       ...mockUpFragment
//     }
//     image4: file(name: { regex: "/wallpapers-mobile/" }) {
//       ...mockUpFragment
//     }
//     image5: file(name: { regex: "/weather-mobile/" }) {
//       ...mockUpFragment
//     }
//     projectData: portfolio {
//       projects(orderBy: index_ASC) {
//         name
//         primaryDescription
//         pageLink
//       }
//     }
//   }
// `;

export default Projects;
