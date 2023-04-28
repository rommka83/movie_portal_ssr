import type { Meta, StoryObj } from '@storybook/react';
import PriceBadge from 'shared/ui/PriceBadge';

const meta: Meta<typeof PriceBadge> = {
  title: 'Example/PriceBadge',
  component: PriceBadge,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PriceBadge>;

export const Pink: Story = {
  args: {
    price: true,
  },
};

export const Gray: Story = {
  args: {
    price: false,
  },
};
