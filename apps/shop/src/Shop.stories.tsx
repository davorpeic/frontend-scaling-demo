import type { Meta, StoryObj } from '@storybook/react-vite';
import { Shop } from './Shop';

const meta = {
  title: 'Shop/Microfrontend',
  component: Shop,
} satisfies Meta<typeof Shop>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
