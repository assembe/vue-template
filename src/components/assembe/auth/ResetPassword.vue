<template>
  <div>
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        sm="8"
        md="4"
      >
        <v-card class="elevation-12">
          <v-toolbar
            color="primary"
            dark
            flat
          >
            <v-toolbar-title>Reset Password</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form @keyup.native.enter="register">
              <input name="email" type="hidden" v-model="email">
              <input name="token" type="hidden" v-model="token">

              <v-alert type="success" dismissible v-if="info">
                {{ info }}
              </v-alert>

              <v-text-field
                id="password"
                label="New Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
                v-model="password"
                :error="!!error.password"
                :error-messages="error.password"
              ></v-text-field>
              <v-text-field
                id="password_confirmation"
                label="New Password confirmation"
                name="password_confirmation"
                prepend-icon="mdi-lock"
                type="password"
                v-model="password_confirmation"
                :error="!!error.password_confirmation"
                :error-messages="error.password_confirmation"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <router-link
              to="/login"
              v-slot="{ href, route, navigate, isActive, isExactActive }"
            >
              <v-btn text @click="navigate">Login</v-btn>
            </router-link>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="resetPassword" :loading="isLoading" :disabled="isLoading">Reset Password</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import assembe from "../../../api/endpoints";
  import config from "../../../../config/assembe";

  export default {
    name: 'ResetPassword',
    data() {
      return {
        email: '',
        token: '',
        password: '',
        password_confirmation: '',
        info:null,
        error: {
          email: null,
          token: null,
          password: null,
          password_confirmation: null
        },
        isLoading: false
      }
    },
    mounted() {
      this.email = this.$route.query.email;
      this.token = this.$route.params.token;
    },
    methods: {
      resetPassword() {
        this.error = {
          email: null,
          token: null,
          password: null,
          password_confirmation: null
        }
        this.info = null;

        this.isLoading = true;
        assembe.auth.resetPassword(this.email, this.token, this.password, this.password_confirmation)
          .then(response => {
            this.isLoading = false;
            this.info = response.data.message;

          }).catch(error => {
          this.isLoading = false;
          if (error.response) {
            this.error = {
              email: error.response.data.errors.email,
              token: error.response.data.errors.token,
              password: error.response.data.errors.password,
              password_confirmation: error.response.data.errors.password_confirmation,
            }
          }
        })
      }
    }
  }
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
    text-align: center;
  }

</style>
