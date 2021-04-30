import Vue from 'vue'

// axios
import axios from 'axios'

const axiosIns = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1/',
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
})

Vue.prototype.$http = axiosIns

export default axiosIns
