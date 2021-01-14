const SettingsProfile = () => import('~/pages/settings/profile').then(m => m.default || m)
const SettingsPassword = () => import('~/pages/settings/password').then(m => m.default || m)
// const SettingsBalance = () => import('~/pages/settings/balance').then(m => m.default || m)

export default [
  {path: '', redirect: {name: 'settings.profile'}},
  {path: 'profile', name: 'settings.profile', component: SettingsProfile},
  // {path: 'balance', name: 'settings.balance', component: SettingsBalance},
  {path: 'password', name: 'settings.password', component: SettingsPassword}
]
