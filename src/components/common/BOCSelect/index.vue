<template lang="pug">
el-select.boc-select(v-bind="$attrs")
  slot
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BOCSelect',
  inheritAttrs: false,
  setup() {
    return {}
  }
})
</script>

<style lang="scss">
.boc-select {
  .el-input {
    &__wrapper {
      background-color: #23232b;
      border-radius: 29px;
      border: 1px solid #fff;
      box-shadow: none !important;

      .el-input__inner {
        color: #fff;
      }
    }
  }

  .select-trigger {
    .el-input.is-focus {
      .el-input__wrapper {
        box-shadow: none !important;
      }
    }

    .el-input.is-disabled {
      .el-input__wrapper {
        background-color: #23232b;
      }
    }

    .el-input {
      .el-input__wrapper.is-focus {
        box-shadow: none !important;
      }
    }
  }

  .el-select__tags {
    left: 6px;

    .el-select-tags-wrapper {
      .el-tag {
        height: 20px;
        line-height: 0px;
        background-color: hsla(0, 0%, 100%, 0.15);
        color: #fff;
      }
    }
  }
}

.el-select-dropdown,
.el-select-dropdown.is-multiple {
  .el-select-dropdown__wrap {
    .el-select-dropdown__item.selected {
      color: #606266;

      &::after {
        display: none;
      }
    }
  }
}
</style>
