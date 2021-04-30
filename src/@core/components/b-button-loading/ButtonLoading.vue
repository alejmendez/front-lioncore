<template>
  <b-button
    v-bind="$attrs"
    :disabled="loading"
    v-on="$listeners"
  >
    <div v-show="loading">
      <b-spinner small />
      {{ loadingText }}
    </div>
    <div v-show="!loading">
      <slot />
    </div>
  </b-button>
</template>
<script>
import {
  BButton, BSpinner,
} from 'bootstrap-vue'
import i18n from '@/libs/i18n'

export default {
  components: {
    BButton,
    BSpinner,
  },
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    loadingText: {
      type: String,
      default: () => i18n.t('common.loading'),
    },
  },
}
</script>
