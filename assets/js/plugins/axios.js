import axios from 'axios'
import store from '~/store'
import router from '~/router'
import swal from 'sweetalert2'
import i18n from '~/plugins/i18n'

axios.interceptors.request.use(request => {
  const token = store.getters['auth/token']
  if (token) {
    request.headers.common['Authorization'] = `Token ${token}`
  }

  // request.headers['X-Socket-id'] = Echo.socketId()
  request.baseURL = 'http://127.0.0.1:8000'
  return request
})

// Responce inerceptor

axios.interceptors.response.use(response => response, error => {
  const { status } = error.response

  // Ошибка сервера
  if (status >= 500) {
    swal({
      type: 'error',
      title: i18n.t('error_alert_title'),
      text: i18n.t('error_alert_text'),
      reverseButtons: true,
      confirmButtonText: i18n.t('ok'),
      cancelButtonText: i18n.t('cancel')
    })
  }

  // Страница не найдена
  if (status === 404) {
    router.push({ name: '404' })
  }

  if (status === 401 && store.getters['auth/check']) {
    swal({
      type: 'warning',
      title: i18n.t('token_expired_alert_title'),
      text: i18n.t('token_expired_alert_text'),
      reverseButtons: true,
      confirmButtonText: i18n.t('ok'),
      cancelButtonText: i18n.t('cancel')
    }).then(() => {
      store.commit('auth/LOGOUT')

      router.push({ name: 'login' })
    })
  }

  return Promise.reject(error)
})
