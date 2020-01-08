import React from 'react';
import PropTypes from 'prop-types';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const Link = ({ to, children, lightTheme }) => {
  return (
    <AniLink
      cover
      direction='down'
      to={to}
      duration={1.3}
      bg={lightTheme ? '#f1f1f1' : '#212121'}
    >
      {children}
    </AniLink>
  );
};

Link.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
  lightTheme: PropTypes.bool
};

export default Link;
