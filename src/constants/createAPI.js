import axios from 'axios';
import { API_URI } from '../_settings';

const API = axios.create({
  baseURL: API_URI,
  timeout: 5000,
});

export { API }