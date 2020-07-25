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
            <v-toolbar-title>Register form</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form @keyup.native.enter="register">
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
                label="Name"
                name="name"
                prepend-icon="mdi-account"
                type="text"
                v-model="name"
                :error="!!error.name"
                :error-messages="error.name"
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
              <v-text-field
                id="password_confirmation"
                label="Password confirmation"
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
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="register" :loading="isLoading" :disabled="isLoading">Register</v-btn>
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
    name: 'Register',
    data() {
      return {
        email: '',
        name: '',
        password: '',
        password_confirmation: '',
        error: {
          email: null,
          name: null,
          password: null,
          password_confirmation: null
        },
        isLoading: false
      }
    },
    methods: {
      register() {
        this.error = {
          email: null,
          name: null,
          password: null,
          password_confirmation: null
        }

        this.isLoading = true;
        assembe.auth.register(this.email, this.name, this.password, this.password_confirmation)
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
              name: error.response.data.errors.name,
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
