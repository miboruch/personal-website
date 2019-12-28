import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const Link = ({ to, children }) => {
  return (
    <AniLink cover direction='down' to={to} duration={1.3} bg='#212121'>
      {children}
    </AniLink>
  );
};

export default Link;
