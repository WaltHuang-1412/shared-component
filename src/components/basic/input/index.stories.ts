import BasicInput from './index.vue';

interface test {
  args: object;
}

export default {
  title: 'Example/Form/Input',
  component: BasicInput,
};

const Template = (args: any) => ({
  components: { BasicInput },
  setup() {
    return { args };
  },
  template: '<basic-input v-bind="args" />',
});

export const Default = Template.bind({});
// Default.args = {
//   primary: true,
//   label: 'Input',
// };
