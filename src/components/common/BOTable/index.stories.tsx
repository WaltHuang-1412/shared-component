import BOTable from './index.vue'
import BoTableColumn from '../BOTableColumn/index.vue'
import { ref } from 'vue'
import { Meta, StoryFn } from '@storybook/vue3'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Common/BOTable',
  component: BOTable
} as Meta<typeof BOTable>

export const Default = (args: any, { loaded: { tableData } }: any) => {
  return {
    components: { BOTable, BoTableColumn },
    setup() {
      return { args, tableData: tableData }
    },
    template: `<BOTable :data="tableData">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
    </BOTable>`
  }
}

// export const Default2: StoryFn<any | any> = (args) => {
//   const { label, ...elseArgs } = args
//   const tableData = ref([
//     {
//       date: '2016-05-03',
//       name: 'Tom',
//       address: 'No. 189, Grove St, Los Angeles'
//     },
//     {
//       date: '2016-05-02',
//       name: 'Tom',
//       address: 'No. 189, Grove St, Los Angeles'
//     },
//     {
//       date: '2016-05-04',
//       name: 'Tom',
//       address: 'No. 189, Grove St, Los Angeles'
//     },
//     {
//       date: '2016-05-01',
//       name: 'Tom',
//       address: 'No. 189, Grove St, Los Angeles'
//     }
//   ])
//   return {
//     components: { BOTable, BoTableColumn },
//     render() {
//       return (
//         <BOTable data={tableData}>
//           <el-table-column prop="date" label="Date" width="180" />
//           <el-table-column prop="name" label="Name" width="180" />
//           <el-table-column prop="address" label="Address" />
//         </BOTable>
//       )
//     }
//   }
// }

Default.loaders = [
  async () => ({
    tableData: [
      {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      },
      {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }
    ]
  })
]
