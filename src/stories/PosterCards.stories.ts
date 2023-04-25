import type { Meta, StoryObj } from '@storybook/react';

import PosterCards from '../shared/bisnes/PosterCards';

const meta = {
  title: 'Example/PosterCards',
  component: PosterCards,
  tags: ['autodocs'],
  args: {
    src: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/5ec7dbd7-1cab-4eae-8846-8be00c56dc0a/300x450',
    name: 'Имя',
  },

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof PosterCards>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
