import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:5000/api' : '/app',
  withCredentials: true
});

instance.defaults.headers.post[ 'Content-Type' ] = 'application/json';

export default instance;
