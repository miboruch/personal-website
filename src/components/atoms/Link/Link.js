import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import PropTypes from 'prop-types';

const Link = ({ to, children }) => {
  return (
    <AniLink cover direction='down' to={to} duration={1.3} bg='#212121'>
      {children}
    </AniLink>
  );
};

Link.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Link;
