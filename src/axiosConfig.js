import axios from 'axios';

const app = axios.create({
  baseURL: 'http://10.170.134.161:4000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default app;
