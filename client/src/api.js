import axios from 'axios';

export const BASE_URL = 'http://localhost:4000';

export const getToken = () => axios.get(`${BASE_URL}/token`);

export const getTweets = ({ accessToken, query, limit = 20 } = {}) =>
  axios.get(`${BASE_URL}/tweets`, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    },
    params: {
      q: '#coronavirus',
      include_entities: true,
      count: limit,
      ...query
    }
  });
