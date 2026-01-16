import axios from 'axios';
const orderURL = import.meta.env.VITE_ORDER_API
import {message} from 'antd'
if (!orderURL) {
    message.warning(`env URL yo'q`)
}
export const api = axios.create({
  baseURL: orderURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

