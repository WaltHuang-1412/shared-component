<template lang="pug">
el-table-column(class="bo-table-column" v-bind="$attrs")
  template(#default="scope")
    slot(:row="scope.row")
</template>

<script setup lang="ts"></script>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BOTableColumn',
  inheritAttrs: false
})
</script>
<style lang="scss">
.bo-table-column td.el-table__cell,
.bo-table-column th.el-table__cell,
.bo-table-column th.el-table__cell.is-leaf {
  border: 0;
}
</style>
