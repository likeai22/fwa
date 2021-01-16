<template>
  <div class="main-layout">
    <nav-menu/>
    <div class="container-fluid mt-3">
      <slot><router-view/></slot>
    </div>
    <!-- <h2>{{ menu.title }}</h2>
    <div>{{ menu.body }}</div> -->
  </div>
</template>

<script>

import NavMenu from "~/components/UI/NavMenu";

export default {
  components: {NavMenu},
  name: 'page',
}
</script>