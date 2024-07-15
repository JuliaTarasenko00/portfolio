import axios from 'axios';

export const $instants = axios.create({
  baseURL: 'https://portfolio-backend-8h5a.onrender.com',
});

$instants.interceptors.request.use(function (config) {
  const token = window.localStorage.getItem('token');
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
