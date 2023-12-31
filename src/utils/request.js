import axios from 'axios';

import { getToken, removeToken } from './token';
import router from '@/router';

// const baseURL = 'http://localhost:3014'; // 原接口不是REST风格，50-db用于数据格式备份
const baseURL = 'http://geek.itheima.net/v1_0'; // 50-JIKE案例

const request = axios.create({
  baseURL,
  timeout: 5000,
});

// 添加请求拦截器
request.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// 添加响应拦截器
request.interceptors.response.use((response) => {
  // 2xx 范围内的状态码都会触发该函数
  return response.data;
}, (error) => {
  // 超出 2xx 范围的状态码都会触发该函数
  const { status } = error.response;
  if (status === 401) {
    removeToken();
    router.navigate('/50/login');
    window.location.reload();
  }
  return Promise.reject(error);
});

export { request };