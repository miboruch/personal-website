import React from 'react';
import { graphql } from 'gatsby';
import Div100vh from 'react-div-100vh';
import Layout from '../components/templates/Layout';
import SEO from '../components/seo';
import { convertObjectToArray } from '../utils/functions';
import MainSlider from '../components/templates/MainSlider/MainSlider';
import CurrentSlideContextProvider from '../providers/CurrentSlideContext';

const IndexPage = ({ data }) => {
  // const {
  //   mainPageData: { projects }
  // } = data;
  // const imagesArray = convertObjectToArray(
  //   data.image0,
  //   data.image1,
  //   data.image2,
  //   data.image3,
  //   data.image4,
  //   data.image5
  // );

  const {
    projects: { edges }
  } = data;
  console.log(data);
  const imagesArray = [
    // data.image0,
    data.image1,
    data.image2
    // data.image3,
    // data.image4,
    // data.image5
  ];
  console.log(imagesArray);
  const projects = edges.map(({ node }) => node);

  return (
    /* Three themes to choose from: light, dark, default.
    To have default, don't pass any props to Layout component  */
    <Div100vh>
      <CurrentSlideContextProvider>
        <Layout>
          <SEO title='Home' />
          <MainSlider images={imagesArray} data={projects} />
        </Layout>
      </CurrentSlideContextProvider>
    </Div100vh>
  );
};

export const mockUpFragment = graphql`
  fragment mockUpFragment on File {
    childImageSharp {
      fluid(maxWidth: 1800, quality: 100) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
`;

export const photoFragment = graphql`
  fragment photoFragment on File {
    childImageSharp {
      fluid(maxWidth: 1060, quality: 100) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
`;

export const smallPhotoFragment = graphql`
  fragment smallPhotoFragment on File {
    childImageSharp {
      fluid(maxWidth: 550, quality: 100) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
`;

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
//     mainPageData: portfolio {
//       projects(orderBy: index_ASC) {
//         index
//         name
//         next
//         description
//         pageLink
//       }
//     }
//   }
// `;

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
          index
          description
          category
          githubLink
          name
          next
          pageLink
          slug
          primaryDescription
          secondaryDescription
          mainTechnology
          link
        }
      }
    }
  }
`;

export default IndexPage;
