import styled from 'styled-components';

const StyledBar = styled.div`
  width: 100px;
  height: 2px;
  background: ${({ isDarkTheme }) => (isDarkTheme ? '#000' : '#ccc')};
  margin: 0 0.7rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${({ isDarkTheme }) => (isDarkTheme ? '#ccc' : '#000')};
    width: calc(
      ${({ currentSlide, allProjectsLength }) =>
        `(100% / ${allProjectsLength}) * ${currentSlide + 1}`}
    );
    height: 2px;
    transition: width 0.5s ease;
  }
`;

export { StyledBar };
