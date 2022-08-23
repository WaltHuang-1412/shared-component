<template lang="pug">
el-table(class="bo-table" v-bind="$attrs" :row-class-name="rowClassName")
  slot
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BOTable',
  inheritAttrs: false,
  setup(props) {
    const rowClassName = ({ rowIndex }: { rowIndex: number }) => {
      if ((rowIndex + 1) % 2 !== 0) {
        return 'odd-row'
      } else {
        return 'even-row'
      }
    }
    return { rowClassName }
  }
})
</script>

<style lang="scss">
.bo-table {
  --el-table-border: 0;
  --el-table-border-color: inherits;
  --el-table-tr-bg-color: unset;
  color: #fff;
  border: 0;
  background-color: #31313d;
  thead {
    color: rgba(255, 255, 255, 0.6);
    background-color: #2b2b35;
  }
  th {
    &.el-table__cell {
      background-color: #2b2b35;
    }
  }
  .even-row {
    background-color: #31313d;
  }
  .odd-row {
    background-color: #3c3b4a;
  }
  .el-table__header-wrapper tr th.el-table__fixed-right-patch {
    background-color: #2b2b35;
  }

  .el-table--enable-row-hover .el-table__body tr:hover > td.el-table__cell {
    background-color: #23232b;
  }
}
</style>
