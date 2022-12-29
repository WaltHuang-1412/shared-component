<template lang="pug">
n-button.the-button(v-bind="$attrs")
  slot
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BOCButton',
  props: {},
  setup() {
    return {}
  }
})
</script>

<style lang="scss">
.the-button {
  display: inline-block;
  
}
</style>
