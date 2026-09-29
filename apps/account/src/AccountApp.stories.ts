import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { onBeforeMount } from 'vue';
import { register } from './index';

const meta = {
  title: 'Account/Microfrontend',
  render: () => ({
    setup() {
      onBeforeMount(() => {
        register();
      });
    },
    template: '<account-mfe />',
  }),
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
