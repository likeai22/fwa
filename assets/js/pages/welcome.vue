<template>
  <div class="container-fluid mt-3">
    <div><h2>{{ menu.title }}</h2></div>
    <div v-html="menu.body"></div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import axios from 'axios'
// import navbarMenu from '~/pages/welcome/navbarMenu';

export default {
  // components: {navbarMenu},
  layout: 'page',

  // data: () => ({
  //   title: window.config.appName
  // }),

  data: () => ({
    menu: {
      title: ''
    },
  }),

  props: {
    url: {
      type: String,
      default: 'fp'
    }
  },

  watch: {
    'url': 'updatePage',
  },

  metaInfo() {
    return {title: this.menu.title}
  },

  methods: {
    async updatePage() {
      const {data} = await axios.get(`/api/menu/${this.url}/`)
      this.menu = data;
    }
  },

  mounted() {
    this.updatePage()
  },

  // metaInfo() {
  //   return {title: this.$t('home')}
  // },

  // async created() {
  //   const {data} = await axios.get(`/api/menu/${this.url}/`)
  //   this.menu = data;
  // },


  computed: mapGetters({
    authenticated: 'auth/check'
  })
}
</script>

<style scoped>
.top-right {
  position: absolute;
  right: 10px;
  top: 18px;
}

.title {
  font-size: 85px;
}
</style>
