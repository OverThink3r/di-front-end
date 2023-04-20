import axios, {InternalAxiosRequestConfig} from "axios";

const diAPI = axios.create({
  baseURL: 'http://localhost:8000/api'
})

diAPI.interceptors.request.use((config:  InternalAxiosRequestConfig<any>) => {

  // @ts-ignore
  config.headers = {
    ...config.headers,
    'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InZsYWRpIiwidXNlcklkIjoxLCJleHAiOjE2ODIwNjg5NjN9.eOfgvC8hvO2BVYgIm8s8vwhJV_Uy4-35SJyOD1m1RhE'
  }

  return config
})

export {
  diAPI
}