import type { Meta, StoryObj } from '@storybook/react';

import { BlockChart } from '../shared/bisnes/BlockChart';
import obj from './testOneFilm.json';

const meta = {
  title: 'Example/BlockChart',
  component: BlockChart,
  tags: ['autodocs'],
  args: { obj: obj.rating, width: 40 },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof BlockChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Restrictions: Story = {};
