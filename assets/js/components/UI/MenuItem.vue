<template>
  <li class="nav-item" :class="{'dropdown': menu.children.length !== 0}">
    <!--    <router-link :to="{name: 'page', params: { url: menu.url }}">{{ menu.title }}</router-link>-->
    <template v-if="menu.children.length === 0">
      <router-link :id="menu.pk" class="nav-link"
                   :to="{name: 'page', params: { url: menu.url }}">{{ menu.title }}
      </router-link>
    </template>


    <template v-else>
      <router-link :id="menu.pk" class="nav-link dropdown-toggle"
         data-toggle="dropdown"
         aria-haspopup="true"
         aria-expanded="false" :to="{name: 'page', params: { url: menu.url }}">
        {{ menu.title }}
      </router-link>

      <div class="dropdown-menu" :aria-labelledby="menu.pk">
        <router-link class="dropdown-item"
                     v-for="child in menu.children"
                     :key="child.pk"
                     :to="{name: 'page', params: { url: child.url}}">{{ child.title }}
        </router-link>
      </div>
    </template>

  </li>
</template>
<script>
export default {
  name: "MenuItem",
  props: {
    menu: {
      type: Object,
      default: () => ({}),
    }
  }
}
</script>

<style scoped>

</style>