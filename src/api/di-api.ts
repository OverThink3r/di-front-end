import axios, {InternalAxiosRequestConfig} from "axios";
import {getEnvVariables} from "../helpers";

const diAPI = axios.create({
  baseURL: 'http://localhost:8000/api'
})

diAPI.interceptors.request.use((config:  InternalAxiosRequestConfig<any>) => {

  // @ts-ignore
  config.headers = {
    ...config.headers,
    'x-token': localStorage.getItem('token')
  }

  return config
})

export {
  diAPI
}