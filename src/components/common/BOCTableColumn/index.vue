<template lang="pug">
el-table-column.boc-table-column(v-bind="$attrs")
  template(#default="scope" v-if="isUseSlot")
    slot(:row="scope.row")
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'BOCTableColumn',
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
.boc-table-column {
  td.el-table__cell,
  th.el-table__cell,
  th.el-table__cell.is-leaf {
    border: 0;
  }
}
</style>
