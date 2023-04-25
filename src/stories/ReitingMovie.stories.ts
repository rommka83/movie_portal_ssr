import type { Meta, StoryObj } from '@storybook/react';

import { ReitingMovie } from '../shared/bisnes/ReitingMovie';

const meta = {
  title: 'Example/ReitingMovie',
  component: ReitingMovie,
  tags: ['autodocs'],
  args: { grade: 5.5 },

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ReitingMovie>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Reiting: Story = {};
