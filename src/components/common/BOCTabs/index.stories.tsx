import BOCTabs from './index.vue'

import { Meta, StoryFn } from '@storybook/vue3'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Common/BOTabs',
  component: BOCTabs
} as Meta<typeof BOCTabs>

export const Default: StoryFn<typeof BOCTabs> = () => ({
  render() {
    return (
      <BOCTabs>
        <el-tab-pane label="home" name="home" />
        <el-tab-pane label="about" name="about" />
        <el-tab-pane label="detail" name="detail" />
        <el-tab-pane label="test" name="test" />
      </BOCTabs>
    )
  }
})

export const Card: StoryFn<typeof BOCTabs> = () => ({
  render() {
    return (
      <BOCTabs type="card">
        <el-tab-pane label="home" name="home" />
        <el-tab-pane label="about" name="about" />
        <el-tab-pane label="detail" name="detail" />
        <el-tab-pane label="test" name="test" />
      </BOCTabs>
    )
  }
})

export const BorderCard: StoryFn<typeof BOCTabs> = () => ({
  render() {
    return (
      <BOCTabs type="border-card">
        <el-tab-pane label="home" name="home" />
        <el-tab-pane label="about" name="about" />
        <el-tab-pane label="detail" name="detail" />
        <el-tab-pane label="test" name="test" />
      </BOCTabs>
    )
  }
})
