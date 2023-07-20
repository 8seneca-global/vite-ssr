import { API_URL } from '#root/config'
import storage from '#root/utils/storage'
import Axios, { AxiosResponse } from 'axios'

function authRequestInterceptor(config: any) {
  const token = storage.getToken()
  if (token) {
    config?.headers?.set('Authorization', `Bearer ${token}`)
  }
  config?.headers?.set('Accept', 'application/json; charset=utf-8')

  return config
}

function axiosResponseInterceptor(response: AxiosResponse) {
  return response.data
}

function axiosHandleError(error: any) {
  return Promise.reject(error)
}

export const axios = Axios.create({
  baseURL: API_URL,
})

axios.interceptors.request.use(authRequestInterceptor)
axios.interceptors.response.use(axiosResponseInterceptor, axiosHandleError)
