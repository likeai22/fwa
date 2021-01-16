<template>
  <div className="main-layout">
    <NavMenu/>

    <div className="container-fluid">
      <slot>
        <router-view/>
      </slot>
    </div>
  </div>
</template>

<script>
import NavMenu from "~/components/UI/NavMenu";

export default {
  name: 'page',

  components: {
    NavMenu
  }
}
</script>
