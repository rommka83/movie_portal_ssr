import type { Meta, StoryObj } from '@storybook/react';
import { FilterGenreCard } from 'shared/ui/FilterGenreCard';

const meta = {
  title: 'Example/FilterGenreCard',
  component: FilterGenreCard,
  tags: ['autodocs'],

  args: {
    caption: 'Драма',
    genre: 'drama',
  },

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof FilterGenreCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FilterGenreCardEl: Story = {};
