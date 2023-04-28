import type { Meta, StoryObj } from '@storybook/react';
import { CardTitle } from 'shared/ui/CardTitle/CardTitle';

const meta = {
  title: 'Example/CardTitle',
  component: CardTitle,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    children: 'CardTitle',
  },

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CardTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardTitlePrimary: Story = {};
