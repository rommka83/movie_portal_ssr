import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs } from 'shared/ui/Breadcrumbs';

const meta = {
  title: 'Example/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],

  args: {
    crumbs: [{ title: 'Фильмы', link: 'ссылка' }, { title: 'Биография' }],
  },

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BreadcrumbsEl: Story = {};
