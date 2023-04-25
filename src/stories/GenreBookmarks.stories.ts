import type { Meta, StoryObj } from '@storybook/react';
import { GenreBookmarks } from '../shared/bisnes/GenreBookmarks';
import film from './testOneFilm.json';

const meta = {
  title: 'Example/GenreBookmarks',
  component: GenreBookmarks,
  tags: ['autodocs'],
  args: { ganre: film.genres },

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof GenreBookmarks>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Bookmarks: Story = {};
