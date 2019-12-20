import React from 'react';
import styled from 'styled-components';

const StyledAvatar = styled.div`
  margin-right: 1rem;

  img {
    border-radius: 50%;
  }
`;

const Avatar = ({ user }) => (
  <StyledAvatar>
    <img src={user.profile_image_url} alt={user.name} />
  </StyledAvatar>
);

export default Avatar;
