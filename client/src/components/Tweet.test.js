import React from 'react';
import Tweet from './Tweet';
import { render } from '@testing-library/react';

test('Tweet component', () => {
  const { asFragment } = render(
    <Tweet
      user={{
        name: 'Driver Man',
        profile_image_url:
          'http://pbs.twimg.com/profile_images/1201972977396379648/5ZQCnQOa_normal.jpg'
      }}
      text="Block You - Driver Man Vlog 12 https://t.co/e8S0XNCqgq #coronavirus #blockyou"
      favorite_count={2}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
