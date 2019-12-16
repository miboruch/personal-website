import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Menu from '../Menu/Menu';
import { useElementSize } from '../../utils/customHooks';
import MenuButton from '../atoms/MenuButton/MenuButton';
import { graphql, useStaticQuery } from 'gatsby';
import GatsbyImage from 'gatsby-image';

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

const Header = ({ lightTheme }) => {
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
          medium='true'
          lightTheme={lightTheme}
          fluid={
            lightTheme
              ? logoDark.childImageSharp.fluid
              : logoWhite.childImageSharp.fluid
          }
        />
        <MenuButton
          isOpen={isOpen}
          toggleMenu={toggleMenu}
          ref={menuButton}
          lightTheme={lightTheme}
        />
      </StyledHeader>
      <Menu isOpen={isOpen} boxSize={size} lightTheme={lightTheme} />
    </>
  );
};

Header.propTypes = {
  lightTheme: PropTypes.bool
};

export default Header;
