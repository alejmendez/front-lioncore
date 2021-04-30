import Vue from 'vue'
import {
  ToastPlugin, ModalPlugin, ButtonPlugin, FormPlugin, OverlayPlugin, SpinnerPlugin, FormInputPlugin, FormGroupPlugin, CardPlugin,
  LinkPlugin, InputGroupPlugin, FormCheckboxPlugin,
} from 'bootstrap-vue'
import ButtonLoading from '@core/components/b-button-loading/ButtonLoading.vue'

// BSV Plugin Registration
Vue.use(ToastPlugin)
Vue.use(ModalPlugin)
Vue.use(ButtonPlugin)
Vue.use(FormPlugin)
Vue.use(OverlayPlugin)
Vue.use(SpinnerPlugin)
Vue.use(FormInputPlugin)
Vue.use(FormGroupPlugin)
Vue.use(CardPlugin)
Vue.use(LinkPlugin)
Vue.use(InputGroupPlugin)
Vue.use(FormCheckboxPlugin)

Vue.component('button-loading', ButtonLoading)
