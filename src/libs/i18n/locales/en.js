import enValidate from 'vee-validate/dist/locale/en.json'
import en from './en/en.json'

export default {
  ...en,
  validation: enValidate.messages,
}
