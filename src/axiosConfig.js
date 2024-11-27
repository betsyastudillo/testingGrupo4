import axios from 'axios';

const app = axios.create({
  baseURL: 'https://api-hackaton-lwg2n6jhya-uc.a.run.app',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default app;
