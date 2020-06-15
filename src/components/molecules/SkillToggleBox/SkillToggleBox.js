import React from 'react';
import PropTypes from 'prop-types';
import CloseButton from '../../atoms/CloseButton/CloseButton';
import { skills } from '../../../utils/skills';
import { useScrollPosition } from '../../../utils/customHooks';
import { SmallSkillsBox, SkillsBoxParagraph } from './SkillToggleBox.styles';

const SkillToggleBox = ({ isOpen, setState }) => {
  const isOnTop = useScrollPosition();
  return (
    <SmallSkillsBox isOnTop={isOnTop} isOpen={isOpen}>
      <CloseButton lightTheme setBoxState={setState} />
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
