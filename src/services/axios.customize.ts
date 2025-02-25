import { store } from '@/redux/store'
import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios'


// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL as string
})

// Alter defaults after instance has been created
// instance.defaults.headers.common['Authorization'] = localStorage.getItem('access_token');


// Add a request interceptor
instance.interceptors.request.use(function (config: InternalAxiosRequestConfig) {
  // Do something before request is sent
  config.headers.Authorization = `Bearer ${store.getState().auth.accessToken}`
  // config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`
  return config
// eslint-disable-next-line @typescript-eslint/no-explicit-any
}, function (error: any) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
instance.interceptors.response.use(function (response: AxiosResponse) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  if (response && response.data) {
    return response.data
  }
  return response
// eslint-disable-next-line @typescript-eslint/no-explicit-any
}, function (error: any) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  if (error?.response?.data) {
    return error?.response?.data
  }
  return Promise.reject(error)
})

export default instance
