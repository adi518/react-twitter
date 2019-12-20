import React from 'react';
import Likes from './Likes';
import { render } from '@testing-library/react';

describe('Likes component', () => {
  test('without likes', () => {
    const { asFragment } = render(<Likes count={0} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('with likes', () => {
    const { asFragment } = render(<Likes count={2} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
