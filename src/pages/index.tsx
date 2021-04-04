import React from 'react';
import { graphql } from 'gatsby';
import Div100vh from 'react-div-100vh';
import Layout from '../components/templates/Layout';
import SEO from '../components/seo';
// import { convertObjectToArray } from '../utils/functions';
import MainSlider from '../components/templates/MainSlider/MainSlider';
import CurrentSlideContextProvider from '../providers/CurrentSlideContext';

interface ProjectQuery {
  index: number;
  description: string;
  category: string;
  githubLink: string;
  name: string;
  next: string;
  pageLink: string;
  slug: string;
  primaryDescription: string;
  secondaryDescription: string;
  mainTechnology: string;
  link: string;
}

interface QueryData {
  data: {
    projects: {
      // allDatoCmsProject: {
      edges: { node: ProjectQuery }[];
      // };
    };
    // mainPageData: {
    //   projects: {
    //     index: string;
    //     name: string;
    //     next: string;
    //     description: string;
    //     pageLink: string;
    //   }[];
    // };
    image0: any;
    image1: any;
    image2: any;
    image3: any;
    image4: any;
    image5: any;
  };
}

const IndexPage: React.FC<QueryData> = ({ data }) => {
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
      fluid(quality: 100) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
`;

export const photoFragment = graphql`
  fragment photoFragment on File {
    childImageSharp {
      fluid(quality: 100) {
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

// export const query = graphql`
//   query MyQuery {
//     allDatoCmsProject {
//       edges {
//         node {
//           index
//           description
//           category
//           githubLink
//           name
//           next
//           pageLink
//           slug
//           primaryDescription
//           secondaryDescription
//           mainTechnology
//           link
//         }
//         previous {
//           id
//         }
//       }
//     }
//     file(name: { regex: "/grades-main/" }) {
//       id
//     }
//   }
// `;

export default IndexPage;
