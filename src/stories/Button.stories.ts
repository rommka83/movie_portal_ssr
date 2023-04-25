import type { Meta, StoryObj } from '@storybook/react';

import ButtonOrLink from 'shared/ui/ButtonOrLink';

const meta = {
  title: 'Example/Button',
  component: ButtonOrLink,
  tags: ['autodocs'],
  argTypes: {
    large: { large: true },
  },
  args: {
    children: 'Button',
    large: true,
    round: false,
    transparent: false,
    small: false,
  },

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ButtonOrLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
