import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home";
import AssembeRoutes from "./assembe";
import Dashboard from "../components/Dashboard";
import {guest, auth} from "./guard";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      beforeEnter: auth
    },

    // PUT YOUR ROUTES HERE



    { path: '*', redirect: '/' }
  ].concat(AssembeRoutes)
})
