import {client} from './client';

export const addShortUrl = async (url) => {
  const response = await client.post('/', {url});
  const {data} = await response.data;
  return data;
};

export const getShortLinks = async () => {
  const response = await client.get('/');
  const {data} = await response.data;
  return data;
};
