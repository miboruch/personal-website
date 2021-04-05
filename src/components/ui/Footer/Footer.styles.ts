import styled from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import { Theme } from 'types';

interface Props {
  footerTheme: Theme;
}

const StyledFooter = styled.footer<Props>`
  padding: 3rem;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ footerTheme }) => (footerTheme === 'light' ? '#fff' : '#000')};
`;

const StyledParagraph = styled(Paragraph)`
  font-size: 10px;
  letter-spacing: 4px;
  color: inherit;
`;

const StyledSpan = styled.span<Props>`
  color: ${({ footerTheme }) =>
    footerTheme === 'light' ? '#929292' : '#9d9d9d'};
`;

export { StyledFooter, StyledParagraph, StyledSpan };
