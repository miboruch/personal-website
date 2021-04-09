import React from 'react';
import { graphql } from 'gatsby';
import Div100vh from 'react-div-100vh';
import Layout from '../components/templates/Layout';
import ContactTemplate from '../components/templates/ContactTemplate/ContactTemplate';
import SEO from '../components/seo';

interface QueryData {
  data: {
    image: any;
  }
}

const ContactPage: React.FC<QueryData> = ({ data: { image } }) => (
  <Div100vh>
    <Layout headerTheme='light'>
      <SEO title='Contact' />
      <ContactTemplate image={image} />
    </Layout>
  </Div100vh>
);

export const query = graphql`
  query {
    image: file(name: { regex: "/portret/" }) {
      ...smallPhotoFragment
    }
  }
`;

export default ContactPage;
