import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND,
  headers: {
    'Content-Type': 'application/json',
    withCredentials: true,
  },
});

export default instance;
