import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const NavigationBox = styled.div`
  width: 200px;
  height: 90px;
  background: #fff;
  position: fixed;
  bottom: 5px;
  left: 5px;
  z-index: 600;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  opacity: ${({ isOnTop }) => (isOnTop ? 1 : 0)};
  transform: translateY(${({ isOnTop }) => (isOnTop ? '0' : '10%')});
  transition: transform 1s ease, opacity 1s ease;
  text-transform: uppercase;
  line-height: 1.7;
  -webkit-box-shadow: 10px 10px 30px -15px rgba(199, 199, 199, 1);
  -moz-box-shadow: 10px 10px 30px -15px rgba(199, 199, 199, 1);
  box-shadow: 10px 10px 30px -15px rgba(199, 199, 199, 1);
`;

const NavigationParagraph = styled(Paragraph)`
  color: #8d8d8d;
  letter-spacing: 4px;
  font-size: 10px;
`;

const ProjectNavigation = ({ isOnTop }) => {
  const {
    portfolio: { projects }
  } = useStaticQuery(graphql`
    query NavigationQuery {
      portfolio {
        projects {
          pageLink
          name
        }
      }
    }
  `);

  return (
    <NavigationBox isOnTop={isOnTop}>
      {projects.map((item, index) => (
        <AniLink
          cover
          direction='down'
          to={item.pageLink}
          duration={1.3}
          bg='#212121'
          key={index}
        >
          <NavigationParagraph small='true' key={index}>
            {item.name}
          </NavigationParagraph>
        </AniLink>
      ))}
    </NavigationBox>
  );
};

export default ProjectNavigation;
