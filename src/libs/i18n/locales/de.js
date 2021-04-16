import deValidate from 'vee-validate/dist/locale/de.json'
import de from './de/de.json'

export default {
  ...de,
  validation: deValidate.messages,
}
