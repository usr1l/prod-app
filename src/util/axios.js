import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api' : '/api',
  withCredentials: true
});

instance.defaults.headers.post[ 'Content-Type' ] = 'application/json';

export default instance;
