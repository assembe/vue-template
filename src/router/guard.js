import store from "../store";

export function auth(to, from, next) {
  if (store.getters.isLogged) {
    next()
  } else {
    next('/login')
  }
}

export function guest(to, from, next) {
  if (!store.getters.isLogged) {
    next()
  } else {
    next('/')
  }
}

