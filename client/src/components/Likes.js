import React from 'react';
import styled from 'styled-components';

const StyledLikes = styled.div`
  margin-top: 1rem;
  margin-left: auto;
`;

const Likes = ({ count }) =>
  count ? <StyledLikes> {count} 👍 </StyledLikes> : null;

export default Likes;
