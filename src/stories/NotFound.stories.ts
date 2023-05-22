import type { Meta, StoryObj } from '@storybook/react';
import { NotFound } from '../shared/ui/NotFound';

const meta = {
  title: 'Example/NotFound',
  component: NotFound,
  tags: ['autodocs'],

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof NotFound>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotFoundEl: Story = {};
