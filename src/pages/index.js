import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Image from '../components/image';
import SEO from '../components/seo';

const StyledHeader = styled.h1`
  font-family: ${({ theme }) => theme.font.family.futura};
`;

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <StyledHeader>Hi people</StyledHeader>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to='/page-2/'>Go to page 2</Link>
  </Layout>
);

export default IndexPage;
