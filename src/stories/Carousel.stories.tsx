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
    carouselContainerClassName: 'storybookCarousel',
    children: (
      <>
        <FilterGenreCard caption='Драма' genre='drama' onClick={() => {}} />
        <FilterGenreCard caption='Комедии' genre='comedy' onClick={() => {}} />
        <FilterGenreCard caption='Вестерн' genre='western' onClick={() => {}} />
        <FilterGenreCard caption='Для детей' genre='kids' onClick={() => {}} />
        <FilterGenreCard caption='Ужасы' genre='horror' onClick={() => {}} />
        <FilterGenreCard caption='Военные' genre='military' onClick={() => {}} />
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
