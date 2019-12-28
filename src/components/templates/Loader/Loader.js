import React from 'react';
import styled from 'styled-components';

const StyledLoader = styled.div`
  width: 100%;
  height: 100vh;
  background: pink;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1004;
`;

const Loader = () => {
  return <StyledLoader />;
};

export default Loader;
