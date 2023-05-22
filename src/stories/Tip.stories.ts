import type { Meta, StoryObj } from '@storybook/react';
import { Tip } from '../shared/ui/Tip';

const meta = {
  title: 'Example/Tip',
  component: Tip,
  tags: ['autodocs'],

  args: {
    type: 'success',
    title: 'Заголовок типса',
    text: 'Текст типса',
    id: '1',
    className: 'storybookTip',
    onClose: (id) => console.log(id),
  },

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Tip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TipEl: Story = {};
