import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PageTransitionProvider from '../../../providers/PageTransitionProvider';
import { NavigationBox, NavigationParagraph } from './ProjectNavigation.styles';

interface Props {
  isOnTop: boolean;
}

interface QueryData {
  portfolio: {
    projects: {
      pageLink: string;
      name: string;
    }[];
  };
}

const ProjectNavigation: React.FC<Props> = ({ isOnTop }) => {
  // const {
  //   portfolio: { projects }
  // } = useStaticQuery<QueryData>(graphql`
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
