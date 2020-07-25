import sdk from './sdk'

export default {
  auth: {
    login(email, password) {
      return sdk.post('api/auth/login', {
        email, password
      })
    },
    register(email, name, password, password_confirmation) {
      return sdk.post('api/auth/register', {
        email, name, password, password_confirmation
      })
    },
    sendResetLink(email) {
      return sdk.post('api/auth/password/email', {
        email
      })
    },
    resetPassword(email, token, password, password_confirmation) {
      return sdk.post('api/auth/password/reset', {
        email, token, password, password_confirmation
      })
    },
  },


}
