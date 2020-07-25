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
            <v-alert type="success" dismissible v-if="info">
              {{ info }}
            </v-alert>

            <v-form @keyup.native.enter="sendResetLink">
              <v-text-field
                label="Email"
                name="email"
                prepend-icon="mdi-account"
                type="text"
                v-model="email"
                :error="!!error.email"
                :error-messages="error.email"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="sendResetLink" :loading="isLoading" :disabled="isLoading">Send Reset Link</v-btn>
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
    name: 'EmailPassword',
    data() {
      return {
        email: '',
        info:null,
        error: {
          email: null,
        },
        isLoading: false
      }
    },
    methods: {
      sendResetLink() {
        this.error = {
          email: null,
        }
        this.info = null;

        this.isLoading = true;
        assembe.auth.sendResetLink(this.email)
          .then(response => {
            this.isLoading = false;
            this.info = response.data.message;

          }).catch(error => {
          this.isLoading = false;
          if (error.response) {
            this.error = {
              email: error.response.data.errors.email,
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
