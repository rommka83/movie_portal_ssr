import type { Meta, StoryObj } from '@storybook/react';
import { Carousel } from 'shared/ui/Carousel';
import { FilterGenreCard } from 'shared/ui/FilterGenreCard';

const meta = {
  title: 'Example/Carousel',
  component: Carousel,
  tags: ['autodocs'],

  args: {
    title: 'Заголовок',
    withButton: true,
    children: (
      <>
        <FilterGenreCard caption="Драма" genre="drama" />
        <FilterGenreCard caption="Комедии" genre="comedy" />
        <FilterGenreCard caption="Вестерн" genre="western" />
        <FilterGenreCard caption="Для детей" genre="kids" />
        <FilterGenreCard caption="Ужасы" genre="horror" />
        <FilterGenreCard caption="Военные" genre="military" />
      </>
    ),
  },

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CarouselEl: Story = {};
