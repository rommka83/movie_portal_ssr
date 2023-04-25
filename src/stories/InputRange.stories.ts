import type { Meta, StoryObj } from '@storybook/react';
import { InputRange } from 'shared/ui/InputRange';

const meta = {
  title: 'Example/InputRange',
  component: InputRange,
  tags: ['autodocs'],

  args: {
    startValue: '71',
    maxValue: '100',
    minValue: '61',
  },

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof InputRange>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputRangeEl: Story = {};
