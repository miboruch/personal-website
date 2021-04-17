import React from 'react';
import PropTypes from 'prop-types';

import { CloseButton } from 'src/components/index';
import { skills } from 'src/utils';
import { useScroll } from 'src/components/hooks/use-scroll.hook';
import { SmallSkillsBox, SkillsBoxParagraph } from './SkillToggleBox.styles';

const SkillToggleBox = ({ isOpen, setState }) => {
  const { isOnTop } = useScroll();

  const handleClose = () => setState(false);
  return (
    <SmallSkillsBox isOnTop={isOnTop} isOpen={isOpen}>
      <CloseButton handleClose={handleClose} />
      <SkillsBoxParagraph>
        {skills.map(item => (
          <>
            {item}
            <br />
          </>
        ))}
      </SkillsBoxParagraph>
    </SmallSkillsBox>
  );
};

SkillToggleBox.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setState: PropTypes.func.isRequired
};

export default SkillToggleBox;
