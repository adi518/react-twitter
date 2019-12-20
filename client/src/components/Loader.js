import React from 'react';
import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core';

const StyledLoader = styled.div`
  margin: auto;
  color: #1b95e0;
`;

const Loader = () => (
  <StyledLoader>
    <CircularProgress size={100} color="inherit" />
  </StyledLoader>
);

const StyledSmallLoader = styled(StyledLoader)`
  left: 0;
  bottom: 0;
  position: fixed;
  margin-left: 1rem;
  margin-bottom: 1rem;
`;

export const SmallLoader = () => (
  <StyledSmallLoader>
    <CircularProgress size={25} color="inherit" />
  </StyledSmallLoader>
);

export default Loader;
