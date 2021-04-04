import React from 'react';

import { HeaderTheme } from 'types';
import { mediaItems } from 'utils';

import { StyledWrapper, StyledLink } from './SocialNavigation.styles';

interface Props {
  headerTheme: HeaderTheme;
  noPadding?: boolean;
  isDarkTheme?: boolean;
}

const SocialNavigation = React.forwardRef<HTMLDivElement, Props>(
  ({ headerTheme, noPadding, isDarkTheme }, ref) => (
    <StyledWrapper noPadding={noPadding} ref={ref}>
      {mediaItems.map(item => (
        <StyledLink
          noPadding={noPadding}
          key={item.id}
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

export default SocialNavigation;
