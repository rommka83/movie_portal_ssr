import type { Meta, StoryObj } from '@storybook/react';

import { ShortDescription } from '../shared/bisnes/ShortDescription';
import obj from './testOneFilm.json';
const meta = {
  title: 'Example/ShortDescription',
  component: ShortDescription,
  tags: ['autodocs'],
  args: {
    obj: obj,
  },

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ShortDescription>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Description: Story = {};
