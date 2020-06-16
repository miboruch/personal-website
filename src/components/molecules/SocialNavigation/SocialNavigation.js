import React from 'react';
import PropTypes from 'prop-types';
import { mediaItems } from '../../../utils/items';
import { StyledWrapper, StyledLink } from './SocialNavigation.styles';

const SocialNavigation = React.forwardRef(
  ({ headerTheme, noPadding, isDarkTheme }, ref) => (
    <StyledWrapper noPadding={noPadding} ref={ref}>
      {mediaItems.map(item => (
        <StyledLink
          noPadding={noPadding}
          key={item.id}
          medium='true'
          href={item.link}
          target='_blank'
          rel='noreferrer'
          headerTheme={headerTheme}
          isDarkTheme={isDarkTheme}
        >
          {item.name}
        </StyledLink>
      ))}
    </StyledWrapper>
  )
);

SocialNavigation.displayName = 'SocialNavigation';

SocialNavigation.propTypes = {
  headerTheme: PropTypes.oneOf(['dark', 'light']),
  noPadding: PropTypes.bool
};

SocialNavigation.defaultProps = {
  noPadding: false
};

export default SocialNavigation;
