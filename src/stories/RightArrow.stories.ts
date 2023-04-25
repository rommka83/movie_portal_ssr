import type { Meta, StoryObj } from '@storybook/react';

import { RightArrow } from '../shared/ui/RightArrow';

const meta = {
  title: 'Example/RightArrow',
  component: RightArrow,
  tags: ['autodocs'],
  args: { size: 'big', color: 'black' },

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof RightArrow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Big: Story = {};
