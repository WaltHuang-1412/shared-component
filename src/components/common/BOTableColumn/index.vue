<template lang="pug">
el-table-column(class="bo-table-column" v-bind="$attrs")
  template(#default="scope" v-if="isUseSlot")
    slot(:row="scope.row")
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'BOTableColumn',
  inheritAttrs: false,
  setup(props, { slots }) {
    const isUseSlot = computed(() => Object.keys(slots).length > 0)
    return {
      isUseSlot
    }
  }
})
</script>

<style lang="scss">
.bo-table-column {
  td.el-table__cell,
  th.el-table__cell,
  th.el-table__cell.is-leaf {
    border: 0;
  }
}
</style>
