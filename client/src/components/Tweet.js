import React from 'react';
import styled from 'styled-components';

import Likes from './Likes';
import Avatar from './Avatar';

const StyledTweet = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem;
  color: #ffffff;
  flex-shrink: 0;
  min-height: 5rem;
  border-radius: 1rem;
  margin-bottom: 1rem;
  flex-direction: column;
  box-sizing: border-box;
  border: 1px solid #38444d;
  transition: background-color 0.5s, border-color 0.5s;

  &:hover {
    border-color: #1b95e0;
    background-color: #1b95e0;
  }

  &:first-child {
    margin-top: 1rem;
  }
`;

const FlexRow = styled.div`
  display: flex;
`;

const Text = styled.div`
  margin-top: 0.25rem;
  word-break: break-all;
`;

const Tweet = ({ user, text, favorite_count }) => (
  <StyledTweet>
    <FlexRow>
      <Avatar user={user} />
      <div>
        <b>@{user.name}</b>
        <Text>{text}</Text>
      </div>
    </FlexRow>
    <Likes count={favorite_count} />
  </StyledTweet>
);

export default Tweet;
