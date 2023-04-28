import type { Meta, StoryObj } from '@storybook/react';
import Link from 'shared/ui/Link';

const meta = {
  title: 'Example/Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    to: { to: 'link' },
  },
  args: {
    children: 'Link',
    to: '#',
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LinkPrimary: Story = {};
