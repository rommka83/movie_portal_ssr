import type { Meta, StoryObj } from '@storybook/react';
import { CastomSelect } from 'features/CastomSelect';

const meta = {
  title: 'Example/CastomSelect',
  component: CastomSelect,
  tags: ['autodocs'],

  args: {
    placeholder: 'плейсхолдер',
    list: [
      'первый элемент',
      'второй элемент',
      'третий элемент',
      'четвёртый элемент',
      'пятый элемент',
      'шестой элемент',
    ],
    func: () => {},
  },

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CastomSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CastomSelectEl: Story = {};
