import axios from 'axios';

export const $instants = axios.create({
  baseURL: 'https://portfolio-backend-8h5a.onrender.com',
});
