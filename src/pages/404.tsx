import React from 'react';
import Layout from 'components/templates/Layout';
import SEO from 'components/seo';
import NotFoundPageTemplate from '../components/templates/NotFoundPageTemplate/NotFoundPageTemplate';

const NotFoundPage = () => (
  <Layout headerTheme='dark'>
    <SEO title='Not found' />
    <NotFoundPageTemplate />
  </Layout>
);

export default NotFoundPage;
