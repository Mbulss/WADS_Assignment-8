// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // or '/' if you proxy /api in Vite
});

// helper to set JWT on all requests
export function setAuthToken(token) {
  if (token) api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  else delete api.defaults.headers.common['Authorization'];
}

export default api;
