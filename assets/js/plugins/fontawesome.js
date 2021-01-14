import Vue from 'vue'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

// import { } from '@fortawesome/free-regular-svg-icons'

import {
  faUser,
  faUsers,
  faLock,
  faSignOutAlt,
  faCog,
  faMobileAlt,
  faCheck,
  faComments,
  faComment,
  faSearch,
  faTrashAlt,
  faUserSlash,
  faPaperclip,
  faSmile,
  faHome
} from '@fortawesome/fontawesome-free-solid/shakable.js'

import {
  faGithub, faFacebook, faGoogle
} from '@fortawesome/fontawesome-free-brands/shakable.es'

fontawesome.library.add(
  faUser,
  faUsers,
  faLock,
  faSignOutAlt,
  faCog,
  faMobileAlt,
  faCheck,
  faComments,
  faComment,
  faSearch,
  faTrashAlt,
  faUserSlash,
  faPaperclip,
  faSmile,
  faHome
)

// Vue.component('fa', FontAwesomeIcon)
Vue.component('font-awesome-icon', FontAwesomeIcon);
