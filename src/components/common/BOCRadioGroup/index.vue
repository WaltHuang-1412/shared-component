<template lang="pug">
ElRadioGroup.boc-radio-group(v-bind="$attrs")
  slot
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BOCRadioGroup',
  inheritAttrs: false,
  setup() {
    return {}
  }
})
</script>

<style lang="scss"></style>
