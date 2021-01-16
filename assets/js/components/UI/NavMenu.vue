<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <router-link class="navbar-brand" :to="{name: 'welcome'}">FWA</router-link>
      <button class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarsMenuButton"
              aria-controls="navbarsMenuButton"
              aria-expanded="false"
              aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsMenuButton">
        <ul class="navbar-nav mr-auto">
          <menu-item v-for="item in menu" :key="item.pk" :menu="item"/>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
          <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>

  </div>

</template>

<script>
import axios from 'axios'
import MenuItem from "~/components/UI/MenuItem"

export default {
  name: "NavMenu",
  components: {MenuItem},
  data: () => ({
    menu: [],
  }),
  async created() {
    const {data} = await axios.get('api/menu/')
    this.menu = data
  },
}
</script>

<style scoped>

</style>