import styled from 'styled-components';
import { Theme } from 'types';

const ButtonWrapper = styled.button<{ isContactPage: boolean }>`
  cursor: pointer;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  position: absolute;
  top: 1rem;
  right: 1rem;
  margin: 0 0.5rem;

  :focus {
    outline: none;
  }

  ${({ theme }) => theme.mq.standard} {
    display: ${({ isContactPage }) => (isContactPage ? 'none' : 'block')};
  }
`;

const InnerButton = styled.div<{ theme: Theme }>`
  position: relative;

  ::before,
  ::after {
    content: '';
    width: ${({ theme }) => (theme === 'light' ? '18px' : '24px')};
    height: 1px;
    background: ${({ theme }) => (theme === 'light' ? '#fff' : '#000')};
    position: absolute;
    left: 0;
    transition: all 0.5s ease;
    top: 0;
  }

  ::before {
    transform: rotate(40deg);
  }
  ::after {
    transform: rotate(-40deg);
  }
`;

export { ButtonWrapper, InnerButton };
