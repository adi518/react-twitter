import axios from 'axios';

import tweetsMock from './tweetsMock';
import { getToken, getTweets, BASE_URL } from '../src/api';

import tokenMock from './tokenMock';

jest.mock('axios');

beforeEach(() => {
  axios.get.mockReset();
});

describe('api', () => {
  test('getToken', async () => {
    const data = {
      token_type: 'bearer',
      access_token: tokenMock
    };
    axios.get.mockImplementation(() => Promise.resolve(data));
    await expect(getToken()).resolves.toEqual(data);
    expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/token`);
  });

  test('getTweets', async () => {
    const data = tweetsMock;
    axios.get.mockImplementation(() => Promise.resolve(data));
    const result = getTweets({ accessToken: tokenMock });
    await expect(result).resolves.toEqual(data);
    expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/tweets`, {
      headers: {
        Authorization: `Bearer ${tokenMock}`
      },
      params: { count: 20, include_entities: true, q: '#coronavirus' }
    });
  });

  test('getTweets with query argument', async () => {
    const data = tweetsMock;
    axios.get.mockImplementation(() => Promise.resolve(data));
    const result = getTweets({
      accessToken: tokenMock,
      query: {
        count: '20',
        include_entities: '1',
        max_id: '1208114329746317314'
      }
    });
    await expect(result).resolves.toEqual(data);
    expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/tweets`, {
      headers: {
        Authorization: `Bearer ${tokenMock}`
      },
      params: {
        count: '20',
        q: '#coronavirus',
        include_entities: '1',
        max_id: '1208114329746317314'
      }
    });
  });
});
