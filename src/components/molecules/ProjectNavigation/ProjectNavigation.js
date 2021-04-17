import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PageTransitionProvider from '../../../providers/PageTransitionProvider';
import { NavigationBox, NavigationParagraph } from './ProjectNavigation.styles';

const ProjectNavigation = ({ isOnTop }) => {
  // const {
  //   portfolio: { projects }
  // } = useStaticQuery(graphql`
  //   query NavigationQuery {
  //     portfolio {
  //       projects(orderBy: index_ASC) {
  //         pageLink
  //         name
  //       }
  //     }
  //   }
  // `);

  return (
    <NavigationBox isOnTop={isOnTop}>
      {/*{projects.map((item, index) => (*/}
      {/*  <PageTransitionProvider to={item.pageLink} key={index} dark={false}>*/}
      {/*    <NavigationParagraph small='true'>{item.name}</NavigationParagraph>*/}
      {/*  </PageTransitionProvider>*/}
      {/*))}*/}
    </NavigationBox>
  );
};

export default ProjectNavigation;
