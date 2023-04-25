import type { Meta, StoryObj } from '@storybook/react';

import { TopChart } from '../shared/bisnes/TopChart';
import film from './testOneFilm.json';

const meta = {
  title: 'Example/TopChart',
  component: TopChart,
  tags: ['autodocs'],
  args: { obj: film },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TopChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Chart: Story = {};
