import type { Meta, StoryObj } from '@storybook/react';

import AgeRestrictions from '../shared/bisnes/AgeRestrictions';

const meta = {
  title: 'Example/AgeRestrictions',
  component: AgeRestrictions,
  tags: ['autodocs'],
  args: { age: 12 },

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AgeRestrictions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Restrictions: Story = {};
