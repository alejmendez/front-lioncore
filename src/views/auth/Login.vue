<template>
  <div class="auth-wrapper auth-v1 px-2">
    <div class="auth-inner py-2">

      <b-overlay
        :show="loading"
        variant="transparent"
        opacity="0.3"
        rounded="sm"
        no-wrap
      />
      <b-card class="mb-0">
        <b-link class="brand-logo">
          <vuexy-logo />

          <h2 class="brand-text text-primary ml-1">
            {{ $t('common.brandApp') }}
          </h2>
        </b-link>

        <b-card-title class="mb-1">
          {{ $t('login.title') }}
        </b-card-title>
        <b-card-text class="mb-2">
          {{ $t('login.subtitle') }}
        </b-card-text>

        <!-- form -->
        <validation-observer
          ref="loginForm"
          #default="{invalid}"
        >
          <b-form
            class="auth-login-form mt-2"
            @submit.prevent
            @submit="submit()"
          >

            <!-- email -->
            <b-form-group
              label-for="email"
              :label="$t('login.email')"
            >
              <validation-provider
                #default="{ errors }"
                :name="$t('login.email')"
                rules="required|email"
              >
                <b-form-input
                  id="email"
                  v-model="userEmail"
                  name="login-email"
                  :state="errors.length > 0 ? false : null"
                  :disabled="loading"
                  placeholder="john@example.com"
                  autofocus
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>

            <!-- password -->
            <b-form-group>
              <div class="d-flex justify-content-between">
                <label for="password">{{ $t('login.password') }}</label>
                <b-link :to="{name:'auth-forgot-password'}">
                  <small>{{ $t('login.forgot_password') }}</small>
                </b-link>
              </div>
              <validation-provider
                #default="{ errors }"
                :name="$t('login.password')"
                rules="required"
              >
                <b-input-group
                  class="input-group-merge"
                  :class="errors.length > 0 ? 'is-invalid' : null"
                >
                  <b-form-input
                    id="password"
                    v-model="password"
                    :type="passwordFieldType"
                    class="form-control-merge"
                    :state="errors.length > 0 ? false : null"
                    :disabled="loading"
                    name="login-password"
                    placeholder="Password"
                  />

                  <b-input-group-append
                    is-text
                    :disabled="loading"
                  >
                    <feather-icon
                      class="cursor-pointer"
                      :icon="passwordToggleIcon"
                      @click="togglePasswordVisibility"
                    />
                  </b-input-group-append>
                </b-input-group>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>

            <!-- checkbox -->
            <b-form-group>
              <b-form-checkbox
                id="remember-me"
                v-model="status"
                name="checkbox-1"
                :disabled="loading"
              >
                {{ $t('login.remember_me') }}
              </b-form-checkbox>
            </b-form-group>

            <!-- submit button -->
            <button-loading
              variant="primary"
              type="submit"
              block
              :loading="loading"
              :disabled="invalid || loading"
            >
              {{ $t('login.login') }}
            </button-loading>
          </b-form>
        </validation-observer>

        <b-card-text class="text-center mt-2">
          <span>{{ $t('login.new_on_our_platform') }} </span>
          <b-link :to="{name:'auth-register'}">
            <span>{{ $t('login.create_an_account') }}</span>
          </b-link>
        </b-card-text>

        <div class="divider my-2">
          <div class="divider-text">
            {{ $t('login.or') }}
          </div>
        </div>

        <!-- social button -->
        <div class="auth-footer-btn d-flex justify-content-center">
          <b-button
            href="javascript:void(0)"
            variant="facebook"
          >
            <feather-icon icon="FacebookIcon" />
          </b-button>
          <b-button
            href="javascript:void(0)"
            variant="twitter"
          >
            <feather-icon icon="TwitterIcon" />
          </b-button>
          <b-button
            href="javascript:void(0)"
            variant="google"
          >
            <feather-icon icon="MailIcon" />
          </b-button>
          <b-button
            href="javascript:void(0)"
            variant="github"
          >
            <feather-icon icon="GithubIcon" />
          </b-button>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import VuexyLogo from '@core/layouts/components/Logo.vue'
import { required, email } from '@validations'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'

export default {
  components: {
    // BSV
    VuexyLogo,
    ValidationProvider,
    ValidationObserver,
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      userEmail: '',
      password: '',
      status: '',
      loading: false,
      // validation rules
      required,
      email,
    }
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
  },
  methods: {
    submit() {
      this.loading = true
      this.$auth.login({
        email: this.userEmail,
        password: this.password,
      }).then(response => {
        this.$router.push('dashboard').catch(() => {})
        this.$auth.setData(response.data)
        // this.$router.push({ name: 'dashboard' })
      }).catch(error => {
        console.log(error)
      }).finally(() => {
        this.loading = false
      })
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-auth.scss';
</style>
