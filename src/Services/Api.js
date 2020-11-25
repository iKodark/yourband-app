import axios from "axios";

import { Alert } from 'react-native'

import { getToken } from './AsyncStorage';

const api = axios.create({
  baseURL: "http://192.168.0.23:9000/api",
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

api.interceptors.response.use(
  response => {

    return response
  },
  error => {

    console.log('ERROR SERVICE', error);

    if (
      error.request._hasError === true &&
      error.request._response.includes('connect')
    ) {
      console.log(error.request);
      Alert.alert(
        'Aviso',
        'Não foi possível conectar aos nossos servidores, sem conexão a internet',
        [ { text: 'OK' } ],
        { cancelable: false },
      )
    }

    if (error.response.status === 401) {
      const requestConfig = error.config

      // O token JWT expirou

      // deleteUser().then(() => {
      //   navigate('AuthLoading', {})
      // })

      return axios(requestConfig)
    }

    return Promise.reject(error)
  },
)

api.interceptors.request.use(
  config => {
    return getToken()
      .then(token => {
        if (token)
          config.headers['x-access-token'] = `${token}`
        return Promise.resolve(config)
      })
      .catch(error => {
        console.log(error)
        return Promise.resolve(config)
      })
  },
  error => {
    return Promise.reject(error)
  },
)

const upload = axios.create({
  baseURL: "http://192.168.0.23:9000/api",
});

upload.interceptors.response.use(
  response => {

    return response
  },
  error => {

    console.log('ERROR SERVICE', error);

    if (
      error.request._hasError === true &&
      error.request._response.includes('connect')
    ) {
      console.log(error.request);
      Alert.alert(
        'Aviso',
        'Não foi possível conectar aos nossos servidores, sem conexão a internet',
        [ { text: 'OK' } ],
        { cancelable: false },
      )
    }

    if (error.response.status === 401) {
      const requestConfig = error.config

      // O token JWT expirou

      // deleteUser().then(() => {
      //   navigate('AuthLoading', {})
      // })

      return axios(requestConfig)
    }

    return Promise.reject(error)
  },
)

upload.interceptors.request.use(
  config => {
    return getToken()
      .then(token => {
        if (token)
          config.headers['x-access-token'] = `${token}`
        return Promise.resolve(config)
      })
      .catch(error => {
        console.log(error)
        return Promise.resolve(config)
      })
  },
  error => {
    return Promise.reject(error)
  },
)

export { api, upload };