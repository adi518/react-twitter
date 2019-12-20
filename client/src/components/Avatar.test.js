import React from 'react';
import Avatar from './Avatar';
import { render } from '@testing-library/react';

test('Avatar component', () => {
  const { asFragment } = render(
    <Avatar
      user={{
        name: 'Driver Man',
        profile_image_url:
          'http://pbs.twimg.com/profile_images/1201972977396379648/5ZQCnQOa_normal.jpg'
      }}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
