import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import { convertObjectToArray } from '../utils/functions';
import ProjectIntro from '../components/ProjectIntro/ProjectIntro';
import Paragraph from '../components/atoms/Paragraph/Paragraph';
import Footer from '../components/molecules/Footer/Footer';

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 70px;
  background-color: ${({ theme }) => theme.color.lightThemeBackground};
  margin: 0;
`;

const StyledTitle = styled(Paragraph)`
  font-size: 34px !important;
  font-family: ${({ theme }) => theme.font.family.avanti};
  color: #1b1b1b;
  padding-left: 2rem;
  margin-bottom: 2rem;
`;

const StyledParagraph = styled(Paragraph)`
  font-size: 10px;
  color: #1b1b1b;
  letter-spacing: 3px;
  padding: 2rem;
  margin-top: 2rem;
`;

const SecondPage = ({ data }) => {
  const imageArray = convertObjectToArray(
    data.image1,
    data.image2,
    data.image3
  );
  const { projects } = data.projectData;
  console.log(projects);
  console.log(imageArray);
  return (
    <Layout headerTheme='dark'>
      <SEO title='Projects' />
      <StyledWrapper>
        <StyledParagraph>2019/20</StyledParagraph>
        <StyledTitle>Projects</StyledTitle>
        {projects.map((item, index) => (
          <ProjectIntro
            data={item}
            image={imageArray[index]}
            key={index}
            reverse={index % 2 !== 0 ? 'true' : null}
          />
        ))}
        <Footer />
      </StyledWrapper>
    </Layout>
  );
};

export const query = graphql`
  query {
    image1: file(name: { regex: "/indeed-main-mobile/" }) {
      ...photoFragment
    }
    image2: file(name: { regex: "/archicept-mobile/" }) {
      ...photoFragment
    }
    image3: file(name: { regex: "/weather-mobile/" }) {
      ...photoFragment
    }
    projectData: portfolio {
      projects {
        name
        primaryDescription
      }
    }
  }
`;

export default SecondPage;
