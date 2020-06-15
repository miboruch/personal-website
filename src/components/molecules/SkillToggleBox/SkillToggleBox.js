import React from 'react';
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

export default SkillToggleBox;
