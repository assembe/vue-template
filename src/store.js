import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userToken: window.localStorage.getItem('token'),
    user: window.localStorage.getItem('user')
  },
  getters: {
    isLogged: state => {
      return state.userToken !== null
    },
    token: state => {
      return state.userToken
    },
    user: state => {
      return state.user
    }
  },
  mutations: {
    setUserToken(state, token) {
      state.userToken = token
    },
    removeUserToken(state) {
      state.userToken = null
    },
    setUser(state, user) {
      state.user = user
    },
    removeUser(state) {
      state.user = null
    },
  },
  actions: {
    login({commit}, data) {
      commit('setUserToken', data.token)
      commit('setUser', data.user)
      window.localStorage.setItem('token', data.token)
      window.localStorage.setItem('user', data.user)
    },
    logout({commit}) {
      commit('removeUserToken')
      commit('removeUser')
      window.localStorage.removeItem('token')
    }
  }
})

export default store;
