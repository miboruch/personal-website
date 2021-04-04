import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/templates/Layout';
import { graphql } from 'gatsby';
import PortfolioProjectTemplate from '../components/templates/PortfolioProjectTemplate/PortfolioProjectTemplate';

interface QueryData {
  pageContext: {
    data: any;
  };
  data: {
    allFile: {
      edges: any;
    };
  };
}

const ProjectTemplate: React.FC<QueryData> = ({
  pageContext: { data },
  data: { allFile }
}) => {
  console.log(allFile);
  return (
    <Layout headerTheme='dark'>
      <SEO title={data.name} />
      <PortfolioProjectTemplate content={data} images={allFile.edges} />
    </Layout>
  );
};

export const query = graphql`
  query ImageQuery($fileDirectory: String!) {
    allFile(filter: { relativeDirectory: { eq: $fileDirectory } }) {
      edges {
        node {
          ...mockUpFragment
        }
      }
    }
  }
`;

export default ProjectTemplate;
