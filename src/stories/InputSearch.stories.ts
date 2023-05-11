import type { Meta, StoryObj } from '@storybook/react';
import { InputSearch } from 'shared/ui/InputSearch';

const meta = {
  title: 'Example/InputSearch',
  component: InputSearch,
  tags: ['autodocs'],

  args: {
    placeholderText: 'Что ищем',
    searchValue: 'string',
  },

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof InputSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputSearchEl: Story = {};
