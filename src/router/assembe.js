import Home from "../components/Home";
import Login from "../components/assembe/auth/Login";
import {guest} from "./guard";
import Register from "../components/assembe/auth/Register";
import EmailPassword from "../components/assembe/auth/EmailPassword";
import ResetPassword from "../components/assembe/auth/ResetPassword";

export default [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: guest
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    beforeEnter: guest
  },
  {
    path: '/password/email',
    name: 'Email New Password',
    component: EmailPassword,
    beforeEnter: guest
  },
  {
    path: '/password/reset/:token',
    name: 'Email New Password',
    component: ResetPassword,
    beforeEnter: guest
  },
]
