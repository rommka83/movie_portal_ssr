import type { Meta, StoryObj } from '@storybook/react';
import GeneralDataOnCommentsForTheFilm from '../entities/GeneralDataOnCommentsForTheFilm';

const meta = {
  title: 'Example/GeneralDataOnCommentsForTheFilm',
  component: GeneralDataOnCommentsForTheFilm,
  tags: ['autodocs'],

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof GeneralDataOnCommentsForTheFilm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GeneralDataOnComments: Story = {};
