const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const projectTemplate = path.resolve(`src/templates/project-template.js`);
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  const projectQuery = await graphql(`
    {
      portfolio {
        projects: projectsConnection {
          edges {
            node {
              date
              description
              developStatus
              githubLink
              id
              index
              link
              mainTechnology
              name
              next
              pageLink
              primaryDescription
              secondaryDescription
              slug
              status
              createdAt
              category
              updatedAt
            }
          }
        }
      }
    }
  `);

  projectQuery.data.portfolio.projects.edges.forEach(project => {
    createPage({
      path: project.node.slug,
      component: projectTemplate,
      context: {
        data: project.node,
        fileDirectory: project.node.slug
      }
    });
  });
};
