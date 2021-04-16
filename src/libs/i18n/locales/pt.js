import ptValidate from 'vee-validate/dist/locale/pt_BR.json'
import pt from './pt/pt.json'

export default {
  ...pt,
  validation: ptValidate.messages,
}
