<template lang="pug">
el-table(class="bo-table" v-bind="$attrs" :row-class-name="tableRowClassName")
  slot
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface ITableRowClassName {
  row: any
  rowIndex: number
}

export default defineComponent({
  name: 'BOTable',
  inheritAttrs: false,
  setup() {
    const tableRowClassName = ({ row, rowIndex }: ITableRowClassName) => {
      if ((rowIndex + 1) % 2 !== 0) {
        return 'odd-row'
      } else {
        return 'even-row'
      }
    }

    return {
      tableRowClassName
    }
  }
})
</script>

<style lang="scss">
.bo-table {
  --el-table-border: 0;
  --el-table-border-color: inherits;
  --el-table-tr-bg-color: unset;
}

.bo-table {
  color: #fff;
  border: 0;
  background-color: #31313d;

  thead {
    color: #ffffff99;
    background-color: #2b2b35;
  }

  th.el-table__cell {
    background-color: #2b2b35;
  }
  .even-row {
    background-color: rgb(49, 49, 61);
  }
  .odd-row {
    background-color: rgb(60, 59, 74);
  }
}

.el-table__header-wrapper tr th.el-table__fixed-right-patch {
  background-color: #2b2b35;
}

.el-table--enable-row-hover .el-table__body tr:hover > td.el-table__cell {
  background-color: #23232b;
}
</style>
