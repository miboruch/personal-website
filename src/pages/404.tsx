import React from 'react';

import Layout from 'components/templates/Layout';
import SEO from 'components/seo';
import NotFoundPageTemplate from '../components/templates/NotFoundPageTemplate/NotFoundPageTemplate';

const NotFoundPage: React.FC = () => (
  <Layout colorTheme={'dark'}>
    <SEO title='Not found' />
    <NotFoundPageTemplate />
  </Layout>
);

export default NotFoundPage;
