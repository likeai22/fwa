<template>
  <card :title="$t('home')">
    <h1>Поздравляем, вы авторизовались!</h1>
  </card>
</template>

<script>
export default {
  middleware: 'auth',

  metaInfo() {
    return {title: this.$t('home')}
  }
}
</script>
