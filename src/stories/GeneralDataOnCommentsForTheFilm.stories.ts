import type { Meta, StoryObj } from '@storybook/react';
import GeneralDataOnCommentsForTheFilm from '../entities/GeneralDataOnCommentsForTheFilm';
import { comment } from './OneComment.stories';

const meta = {
  title: 'Example/GeneralDataOnCommentsForTheFilm',
  component: GeneralDataOnCommentsForTheFilm,
  tags: ['autodocs'],
  args: {
    comments: { docs: [comment], total: 1, limit: 1, page: 1, pages: 1 },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof GeneralDataOnCommentsForTheFilm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GeneralDataOnComments: Story = {};
