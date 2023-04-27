import type { Meta, StoryObj } from '@storybook/react';
import { SectionTitle } from 'shared/ui/SectionTitle/SectionTitle';

const meta = {
  title: 'Example/SectionTitle',
  component: SectionTitle,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    children: 'SectionTitle',
  },

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SectionTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SectionTitlePrimary: Story = {};
