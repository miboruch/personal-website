import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/templates/Layout';
import SEO from '../components/seo';
import { convertObjectToArray } from '../utils/functions';
import ProjectTemplate from '../components/templates/ProjectTemplate';

const ArchiceptPage = ({ data }) => {
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
      <SEO title='Architecture concept' />
      <ProjectTemplate content={projects[0]} images={imagesArray} />
    </Layout>
  );
};

export const photoFragment = graphql`
  fragment photoFragment on File {
    childImageSharp {
      fluid(maxWidth: 1500, quality: 100) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
`;

export const query = graphql`
  query {
    image1: file(name: { regex: "/archicept-mobile/" }) {
      ...photoFragment
    }
    image2: file(name: { regex: "/archicept-main/" }) {
      ...photoFragment
    }
    image3: file(name: { regex: "/archicept-standard/" }) {
      ...photoFragment
    }
    indeedData: portfolio {
      projects(where: { name: "archicept" }) {
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

export default ArchiceptPage;
