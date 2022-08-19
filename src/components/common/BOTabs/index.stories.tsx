// Button.stories.ts

import BOTabs from './index.vue'

import { Meta, StoryFn } from '@storybook/vue3'
import { render } from 'vue'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Common/BOTabs',
  component: BOTabs
} as Meta<typeof BOTabs>

// export const Default: StoryFn<typeof BOTabs> = () => ({
//   components: { BOTabs },
//   template: `<BOTabs>
//     <el-tab-pane label="home" name="home"/>
//     <el-tab-pane label="about" name="about"/>
//     <el-tab-pane label="detail" name="detail"/>
//     <el-tab-pane label="test" name="test"/>
//   </BOTabs>`
// })

export const Default: StoryFn<typeof BOTabs> = () => ({
  render() {
    return (
      <BOTabs>
        <el-tab-pane label="home" name="home" />
        <el-tab-pane label="about" name="about" />
        <el-tab-pane label="detail" name="detail" />
        <el-tab-pane label="test" name="test" />
      </BOTabs>
    )
  }
})

export const Card: StoryFn<typeof BOTabs> = () => ({
  render() {
    return (
      <BOTabs type="card">
        <el-tab-pane label="home" name="home" />
        <el-tab-pane label="about" name="about" />
        <el-tab-pane label="detail" name="detail" />
        <el-tab-pane label="test" name="test" />
      </BOTabs>
    )
  }
})

export const BorderCard: StoryFn<typeof BOTabs> = () => ({
  render() {
    return (
      <BOTabs type="border-card">
        <el-tab-pane label="home" name="home" />
        <el-tab-pane label="about" name="about" />
        <el-tab-pane label="detail" name="detail" />
        <el-tab-pane label="test" name="test" />
      </BOTabs>
    )
  }
})
