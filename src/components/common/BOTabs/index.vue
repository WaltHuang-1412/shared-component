<template lang="pug">
el-tabs.bo-tabs(:type="type" v-bind="$attrs" :data-type="styleType")
  slot
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BOTabs',
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const styleType = `bo-tabs-${props.type ? props.type : 'default'}`
    return { styleType }
  }
})
</script>
<style lang="scss">
.bo-tabs[data-type='bo-tabs-card'] {
  .el-tabs__header {
    margin: 0;
    border: none;
    .el-tabs__item {
      border-left: none;
      border-bottom: none;
    }
    .el-tabs__nav {
      border-radius: 0;
      border: none;
    }
  }
  .el-tabs__item {
    color: #fff;
    position: relative;
    padding-right: 28px;
    padding-left: 12px;
    &:before {
      content: '';
      display: inline-block;
      position: absolute;
      left: -8px;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(50, 50, 50, 0.4);
      transform: skew(20deg);
      z-index: -1;
    }
    &:hover {
      color: #f36a69;
    }
    &:nth-child(odd):before {
      background-color: #31313d;
    }
    &:nth-child(even):before {
      background-color: #3b3a49;
    }
  }
  .el-tabs__item[tabIndex='0'] {
    color: #f8e71c;
    border-bottom: none;
  }
  .el-tabs__item[tabIndex='0']:before {
    background-color: #2b2b35;
  }
}
.bo-tabs[data-type='bo-tabs-default'] {
  .el-tabs__header {
    margin-bottom: 0;
    .el-tabs__nav-wrap {
      &::after {
        background-color: inherit;
      }
    }
  }
  .el-tabs__nav {
    .el-tabs__active-bar {
      background-color: #f36a69;
    }
    .el-tabs__item {
      color: #aeaeae;
    }
    .el-tabs__item[tabIndex='0'] {
      color: #fff;
    }
  }
}
</style>
