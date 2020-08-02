import axios from 'axios'
import config from '../../config/assembe.js'
import store from "../store";

function getHeaders() {
  if (store.getters.isLogged) {
    return {
      'Authorization': 'Bearer '+store.getters.token
    }
  }

  return {}
}

export default {
  post(url, data) {
    return axios({
      method: 'post',
      url,
      baseURL: config.apiHost,
      data,
      headers: getHeaders()
    })
  },
  get(url, data) {
    return axios({
      method: 'get',
      url,
      baseURL: config.apiHost,
      data,
      headers: getHeaders()
    })
  },
  put(url, data) {
    return axios({
      method: 'put',
      url,
      baseURL: config.apiHost,
      data,
      headers: getHeaders()
    })
  },
  delete(url, data) {
    return axios({
      method: 'delete',
      url,
      baseURL: config.apiHost,
      data,
      headers: getHeaders()
    })
  }
}
