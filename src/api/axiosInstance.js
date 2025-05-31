import axios from 'axios';
import  oktaAuth  from '../oktaAuth'; // adjust path as needed

const instance = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: true,
});

instance.interceptors.request.use(async (config) => {
  // ✅ Add access token from Okta
  const accessToken = await oktaAuth.getAccessToken();
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  // ✅ Add CSRF token
  const csrfToken = document.cookie
    .split('; ')
    .find(row => row.startsWith('XSRF-TOKEN='))
    ?.split('=')[1];

  if (csrfToken) {
    config.headers['X-XSRF-TOKEN'] = decodeURIComponent(csrfToken);
  }

  return config;
}, (error) => {
  return Promise.reject(error);
});

export default instance;
