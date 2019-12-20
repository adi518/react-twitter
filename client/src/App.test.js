import React from 'react';
import { render } from '@testing-library/react';
import ShallowRenderer from 'react-test-renderer/shallow';

import App from './App';
import tweetsMock from './tweetsMock';

const renderer = new ShallowRenderer();
const {
  statuses: [mockTweet0, mockTweet1, mockTweet2]
} = tweetsMock;

describe('App component', () => {
  test('renders without tweets', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders with tweets', () => {
    const tweets = [mockTweet0, mockTweet1, mockTweet2];
    const { asFragment } = render(<App initialState={{ tweets }} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
