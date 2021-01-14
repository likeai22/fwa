<template>
  <div className="card">
    <div v-if="title" className="card-header">
      {{ title }}
    </div>

    <div className="card-body">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',

  props: {
    title: {type: String, default: null}
  }
}
</script>
