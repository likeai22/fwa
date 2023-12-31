// function page(path) {
//   return () => import( /* webpackChunkName: '' */ `~/pages/${path}`).then(m => m.default || m)
// }

import SettingsChildren from './routes/settings'

const Login = () => import('~/pages/auth/login').then(m => m.default || m)
const Register = () => import('~/pages/auth/register').then(m => m.default || m)
const PasswordEmail = () => import('~/pages/auth/password/email').then(m => m.default || m)
const PasswordReset = () => import('~/pages/auth/password/reset').then(m => m.default || m)
const NotFound = () => import('~/pages/errors/404').then(m => m.default || m)

const Welcome = () => import('~/pages/welcome').then(m => m.default || m)
const Home = () => import('~/pages/home').then(m => m.default || m)
// const Page = () => import('~/pages/page').then(m => m.default || m)
const Settings = () => import('~/pages/settings/index').then(m => m.default || m)


export default [
  {
    path: '/',
    name: 'welcome',
    component: Welcome
  },

  {
    path: '/page/:url',
    name: 'page',
    component: Welcome,
    props: true
  },

  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/password/reset',
    name: 'password.request',
    component: PasswordEmail
  },
  {
    path: '/password/reset/:token',
    name: 'password.reset',
    component: PasswordReset
  },

  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/settings',
    component: Settings, children: SettingsChildren
  },

  {
    path: '*',
    component: NotFound
  }
]
