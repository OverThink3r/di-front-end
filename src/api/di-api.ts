import axios, {InternalAxiosRequestConfig} from "axios";
import {getEnvVariables} from "../helpers";

const diAPI = axios.create({
  baseURL: 'https://di-back-end.herokuapp.com/api'
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