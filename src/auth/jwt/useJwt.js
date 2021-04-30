import Vue from 'vue'
import useJwt from '@core/auth/jwt/useJwt'
import axios from '@axios'

const { jwt } = useJwt(axios, {})
Vue.prototype.$auth = jwt

export default jwt
