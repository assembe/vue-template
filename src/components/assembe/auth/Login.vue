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
            <v-toolbar-title>Login form</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form @keyup.native.enter="login">
              <v-text-field
                label="Email"
                name="email"
                prepend-icon="mdi-account"
                type="text"
                v-model="email"
                :error="!!error.email"
                :error-messages="error.email"
              ></v-text-field>

              <v-text-field
                id="password"
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
                v-model="password"
                :error="!!error.password"
                :error-messages="error.password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <router-link
              to="/password/email"
              v-slot="{ href, route, navigate, isActive, isExactActive }"
            >
              <v-btn text @click="navigate">Reset Password</v-btn>
            </router-link>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="login" :loading="isLoading" :disabled="isLoading">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import assembe from "../../../api/endpoints";
  import config from '../../../../config/assembe'

  export default {
    name: 'Login',
    data() {
      return {
        email: '',
        password: '',
        error: {
          email: null,
          password: null
        },
        isLoading: false
      }
    },
    methods: {
      login() {
        this.error = {
          email: null,
          password: null
        }

        this.isLoading = true;
        assembe.auth.login(this.email, this.password)
          .then(response => {
            this.isLoading = false;
            this.$store.dispatch('login', {
              token: response.data.token,
              user: response.data.user,
            })
            this.$router.push(config.redirectAfterLogin)
          }).catch(error => {
          this.isLoading = false;
          if (error.response) {
            this.error = {
              email: error.response.data.errors.email,
              password: error.response.data.errors.password,
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
