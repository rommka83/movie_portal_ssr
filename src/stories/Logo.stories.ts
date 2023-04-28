import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from 'shared/ui/Logo/Logo';

const meta = {
  title: 'Example/Logo',
  component: Logo,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Logotype: Story = {};
