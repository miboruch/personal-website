import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Menu from '../Menu/Menu';
import { useElementSize } from '../../utils/customHooks';
import MenuButton from '../molecules/MenuButton/MenuButton';
import { graphql, useStaticQuery } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import Paragraph from '../atoms/Paragraph/Paragraph';

const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 66px;
  background: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  transition: all 1s ease;
`;

const StyledLogo = styled(GatsbyImage)`
  margin-left: 1rem;
  width: 80px;
  z-index: 1000;
  transition: all 1s ease;

  ${({ theme }) => theme.mq.mobileL} {
    width: 100px;
    margin-left: 2rem;
  }
`;

const StyledMenuButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledParagraph = styled(Paragraph)`
  display: none;
  margin-right: 3rem;
  letter-spacing: 0;

  ${({ theme }) => theme.mq.standard} {
    display: block;
  }
`;

const StyledLink = styled.a`
  color: #fff;
  display: none;
  margin-right: 3rem;
  letter-spacing: 0;

  ${({ theme }) => theme.mq.standard} {
    display: block;
  }
`;

const Header = ({ headerTheme }) => {
  const [isOpen, setOpen] = useState(false);
  const [size, menuButton] = useElementSize();

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const { logoWhite, logoDark } = useStaticQuery(graphql`
    query {
      logoWhite: file(relativePath: { eq: "logo-white-square.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      logoDark: file(relativePath: { eq: "logo-dark-square.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);

  return (
    <>
      <StyledHeader>
        <StyledLogo
          fluid={
            headerTheme === 'dark'
              ? logoDark.childImageSharp.fluid
              : headerTheme === 'light' && isOpen
              ? logoDark.childImageSharp.fluid
              : logoWhite.childImageSharp.fluid
          }
        />
        <StyledMenuButtonWrapper>
          <StyledParagraph>Krakow, Poland</StyledParagraph>
          <StyledLink href='mailto:miboruch@gmail.com'>
            miboruch@gmail.com
          </StyledLink>
          <MenuButton
            isOpen={isOpen}
            toggleMenu={toggleMenu}
            ref={menuButton}
            headerTheme={headerTheme}
          />
        </StyledMenuButtonWrapper>
      </StyledHeader>
      <Menu isOpen={isOpen} boxSize={size} headerTheme={headerTheme} />
    </>
  );
};

Header.propTypes = {
  headerTheme: PropTypes.oneOf(['dark, light'])
};

export default Header;
