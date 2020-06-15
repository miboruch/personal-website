import styled from 'styled-components';

const ButtonWrapper = styled.button`
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
    display: ${({ contactPage }) => (contactPage ? 'none' : 'block')};
  }
`;

const InnerButton = styled.div`
  position: relative;

  ::before,
  ::after {
    content: '';
    width: ${({ lightTheme }) => (lightTheme ? '18px' : '24px')};
    height: 1px;
    background: ${({ lightTheme }) => (lightTheme ? '#fff' : '#000')};
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
