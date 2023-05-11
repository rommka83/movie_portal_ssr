/* eslint-disable storybook/prefer-pascal-case */
import type { Meta, StoryObj } from '@storybook/react';
import OneComment from '../entities/OneComment';
import { IOneComment } from 'shared/types/IOneComment';

export const comment: IOneComment = {
  id: 1,
  movieId: 0,
  title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  type: 'string',
  review:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatibus tempore architecto officiis corrupti! Officiis veniam nihil maxime aspernatur dolore ad ut tempora aut enim sequi illum, accusamus quidem itaque.Voluptatem veritatis eius corrupti ipsa architecto laudantium sit modi qui ratione! Molestiae nesciunt consectetur repudiandae corrupti ex alias ipsum eius voluptas, qui, minus quo? Animi nemo veritatis non molestias modi!',
  date: '2014-03-23T00:00:00.000Z',
  author: 'Вася Пупкин',
  authorId: 0,
  userRating: 0,
};

const meta = {
  title: 'Example/OneComment',
  component: OneComment,
  tags: ['autodocs'],
  args: { comment },

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof OneComment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Restrictions: Story = {};
