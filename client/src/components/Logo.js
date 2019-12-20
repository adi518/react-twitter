import React from 'react';
import styled from 'styled-components';

import Octocat from '../images/foundingfather.png';

const StyledLogo = styled.div`
  top: 0;
  left: 0;
  width: 4rem;
  opacity: 0.5;
  position: fixed;
  margin-top: 1rem;
  margin-left: 1rem;
  transition: opacity 0.5s;

  &:hover {
    opacity: 1;
  }

  a,
  img {
    width: inherit;
  }

  @media (max-width: 767.98px) {
    display: none;
  }
`;

const Logo = () => (
  <StyledLogo>
    <a href="https://www.github.com/">
      <img src={Octocat} alt="Octocat" />
    </a>
  </StyledLogo>
);

export default Logo;
