<template lang="pug">
a-date-picker(v-bind="$attrs" v-model:value="renderDateValue" class="boc-date-picker")
  template(
    v-for="(slot, slotName) in $slots"
    #[slotName]="scoped"
    :key="slotName"
  )
    slot(:name="slotName" :scoped="scoped")
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { DatePicker } from 'ant-design-vue'

export default defineComponent({
  name: 'BOCDatePicker',
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Date, Object],
      required: true
    }
  },
  components: {
    DatePicker
  },
  setup(props, { emit }) {
    const renderDateValue = computed({
      get() {
        return props.modelValue
      },
      set(v) {
        emit('update:modelValue', v)
      }
    })
    return {
      renderDateValue
    }
  }
})
</script>

<style lang="scss">
.ant-picker-suffix {
  position: absolute;
  color: rgb(192, 196, 204);
  left: 0;
  width: 13.5px;
}
div[class*='boc-date-picker'] {
  background-color: transparent;
  color: #fff;
  border-radius: 29px;
  border-color: #fff;
  position: relative;

  &.date,
  &.datetime {
    width: 200px;
  }
  &:hover {
    border-color: unset;
    .ant-picker-input:not(.ant-input-disabled) {
      box-shadow: unset;
    }
  }
  &:focus {
    .ant-picker-input:not(.ant-input-disabled) {
      border-color: unset;
      box-shadow: unset;
    }
    box-shadow: none;
  }
  .ant-picker-input {
    padding: 0px 30px;
    box-sizing: border-box;
    & > input {
      color: inherit;
    }
    /* &::after {
      display: block;
      content: '';
      background-image: url('../../../assets/images/icons/arrow-down.svg');
      position: absolute;
      right: 0;
      background-size: contain;
      width: 14px;
      height: 14px;
    } */
  }
  .ant-picker-suffix {
    @extend .ant-picker-suffix;
  }
  .ant-picker-clear {
    color: rgb(192, 196, 204);
    background-color: transparent;
  }
  &.has-value {
    // 為了判斷要不要顯示右側的 "v" icon使用
    .ant-picker-input {
      &::after {
        display: none;
      }
    }
  }
}

.ant-picker.ant-picker-disabled {
  background: transparent;
  opacity: 0.3;
  .ant-picker-suffix {
    @extend .ant-picker-suffix;
  }
}

.ant-picker-dropdown {
  .ant-picker-content {
    td {
      vertical-align: middle;
    }
  }
}

.ant-picker-focused {
  box-shadow: none !important;
}
</style>
