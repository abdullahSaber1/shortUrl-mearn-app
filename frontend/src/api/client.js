import axios from 'axios';

const API_URL = 'http://localhost:8000/api/v1/shortlinks';

export const client = axios.create({
  baseURL: API_URL,
  timeout: 30000,
});
